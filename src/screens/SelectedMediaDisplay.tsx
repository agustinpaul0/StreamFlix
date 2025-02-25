import { useOutletContext } from "react-router-dom";
import MediaBanner from "../components/MediaBanner";
import MediaDescription from "../components/MediaDescription";
import Redirect from "../components/Redirect";
import SelectedMediaContextProps from "../types/SelectedMediaContextProps";

const SelectedMediaDisplay = () => {
  const {
    selectedMedia,
    canRedirectToShowDetails,
    canRedirectToPreviousScreen,
    setCanRedirectToShowDetails,
    SELECTED_MEDIA_DETAILS_SCREEN_URL,
  } = useOutletContext<SelectedMediaContextProps>();

  return (
    <>
      <MediaBanner media={selectedMedia} />
      <MediaDescription media={selectedMedia} onShowMore={() => setCanRedirectToShowDetails(true)} />
      {canRedirectToPreviousScreen && <Redirect url={"../"} />}
      {canRedirectToShowDetails && <Redirect url={SELECTED_MEDIA_DETAILS_SCREEN_URL} />}
    </>
  );
};

export default SelectedMediaDisplay;
