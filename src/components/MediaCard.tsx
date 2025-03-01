import Media from "../types/Media";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import useRedirect from "../hooks/useRedirect";

const MediaCard = ({ media }: { media: Media }) => {
  const MEDIA_SCREEN_URL = "/streamflix/media/selected";
  const BANNER_URL = `https://image.tmdb.org/t/p/w500${media.poster_path}`;
  const { setSelectedMedia } = useSelectedMedia();
  const handleRedirect = useRedirect();

  const displayMediaScreen = (url: string, mediaToDisplay: Media) => {
    setSelectedMedia(mediaToDisplay);
    handleRedirect(url, false);
  };

  return (
    <>
      <button
        type="button"
        className="w-32 h-48 overflow-hidden rounded-md shadow-md flex-none hover:cursor-pointer"
        onClick={() => displayMediaScreen(`${MEDIA_SCREEN_URL}`, media)}
      >
        <img
          src={BANNER_URL}
          alt="Movie Banner"
          className="w-full h-full object-fill rounded-md"
        />
      </button>
    </>
  );
};

export default MediaCard;
