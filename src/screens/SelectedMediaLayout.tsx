import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import OperationFailed from "./OperationFailed";
import Splash from "./Splash";
import SelectedMediaNavBar from "../components/SelectedMediaNavBar";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import Redirect from "../components/Redirect";

const SelectedMediaLayout = () => {
  const { selectedMedia } = useSelectedMedia();
  const [canRedirectToPreviousScreen, setCanRedirectToPreviousScreen] = useState(false);

  useEffect(() => {
    setCanRedirectToPreviousScreen(false);
  }, [canRedirectToPreviousScreen])

  if (!selectedMedia) return <></>;

  return (
    <ErrorBoundary FallbackComponent={OperationFailed}>
      <Suspense fallback={<Splash />}>
        <SelectedMediaNavBar onBack={() => setCanRedirectToPreviousScreen(true)} />
        <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter mt-15 mb-[7vh]">
          <Outlet
            context={{
              selectedMedia
            }}
          />
        </main>
        {canRedirectToPreviousScreen && <Redirect url={"../"} />}
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SelectedMediaLayout;
