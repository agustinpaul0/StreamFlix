import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import SelectedMediaNavBar from "../components/SelectedMediaNavBar";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import Redirect from "../components/Redirect";

const MediaRouteLayout = () => {
  const { selectedMedia } = useSelectedMedia();
  const [canRedirectToPreviousScreen, setCanRedirectToPreviousScreen] = useState(false);

  useEffect(() => {
    setCanRedirectToPreviousScreen(false);
  }, [canRedirectToPreviousScreen]);

  if (!selectedMedia) return <></>;

  return (
    <>
      <SelectedMediaNavBar
        onBack={() => setCanRedirectToPreviousScreen(true)}
      />
      <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter mt-15 mb-[7vh]">
        <Outlet
          context={{
            selectedMedia,
          }}
        />
      </main>
      {canRedirectToPreviousScreen && <Redirect url={"../"} />}
    </>
  );
};

export default MediaRouteLayout;
