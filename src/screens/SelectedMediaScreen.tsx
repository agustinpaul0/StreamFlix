import { useOutletContext } from "react-router-dom";
import MediaBanner from "../components/MediaBanner";
import MediaDescription from "../components/MediaDescription";
import Media from "../types/Media";

const SelectedMediaScreen = () => {
  const { selectedMedia } = useOutletContext<{ selectedMedia: Media}>();

  return (
    <>
      <MediaBanner media={selectedMedia} />
      <MediaDescription media={selectedMedia} />
    </>
  );
};

export default SelectedMediaScreen;
