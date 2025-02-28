import { useOutletContext } from "react-router-dom";
import MediaBanner from "../components/MediaBanner";
import MediaDescription from "../components/MediaDescription";
import Redirect from "../components/Redirect";
import { useState } from "react";
import Media from "../types/Media";

const SelectedMediaScreen = () => {
  const SELECTED_MEDIA_DETAILS_SCREEN_URL = "/streamflix/media/details";
  const { selectedMedia } = useOutletContext<{ selectedMedia: Media}>();
  const [canRedirectToShowDetails, setCanRedirectToShowDetails] = useState(false);

  return (
    <>
      <MediaBanner media={selectedMedia} />
      <MediaDescription media={selectedMedia} onShowMore={() => setCanRedirectToShowDetails(true)} />
      {canRedirectToShowDetails && <Redirect url={SELECTED_MEDIA_DETAILS_SCREEN_URL} />}
    </>
  );
};

export default SelectedMediaScreen;
