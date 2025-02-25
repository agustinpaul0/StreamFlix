import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import OperationFailed from "./OperationFailed";
import Splash from "./Splash";
import SelectedMediaNavBar from "../components/SelectedMediaNavBar";
import { useSelectedMedia } from "../context/SelectedMediaContext";

const SelectedMediaLayout = () => {
  const SELECTED_MEDIA_DETAILS_SCREEN_URL = "/streamflix/media/details";
  const { selectedMedia } = useSelectedMedia();
  const [canRedirectToShowDetails, setCanRedirectToShowDetails] = useState(false);
  const [canRedirectToPreviousScreen, setCanRedirectToPreviousScreen] = useState(false);

  if (!selectedMedia) return <></>;

  return (
    <ErrorBoundary FallbackComponent={OperationFailed}>
      <Suspense fallback={<Splash />}>
        <SelectedMediaNavBar onBack={() => setCanRedirectToPreviousScreen(true)} />
        <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter mt-15 mb-[7vh]">
          <Outlet
            context={{
              selectedMedia,
              canRedirectToShowDetails,
              canRedirectToPreviousScreen,
              setCanRedirectToShowDetails,
              setCanRedirectToPreviousScreen,
              SELECTED_MEDIA_DETAILS_SCREEN_URL,
            }}
          />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SelectedMediaLayout;
