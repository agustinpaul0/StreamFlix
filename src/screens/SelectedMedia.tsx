import Footer from "../components/Footer";
import SelectedMediaNav from "../components/SelectedMediaNav";
import MediaBanner from "../components/MediaBanner";
import MediaDetails from "../components/MediaDetails";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import Redirect from "../components/Redirect";
import { useState } from "react";

const SelectedMedia: React.FC = () => {
  const SELECTED_MEDIA_DETAILS_SCREEN_URL = "details";
  const { selectedMedia } = useSelectedMedia();
  const [canRedirectToShowDetails, setCanRedirectToShowDetails] = useState(false);
  const [canRedirectToPreviousScreen, setCanRedirectToPreviousScreen] = useState(false);

  if (!selectedMedia) return <></>;

  return (
    <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter mb-[7vh] overflow-hidden">
      <SelectedMediaNav onBack={() => setCanRedirectToPreviousScreen(true)} />
      <MediaBanner media={selectedMedia} />
      <MediaDetails media={selectedMedia} onShowMore={() => setCanRedirectToShowDetails(true)} />
      {canRedirectToPreviousScreen && <Redirect url={"../"} />}
      {canRedirectToShowDetails && <Redirect url={SELECTED_MEDIA_DETAILS_SCREEN_URL} />}
      <Footer />
    </main>
  );
};

export default SelectedMedia;