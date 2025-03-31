import { motion } from "framer-motion";
import Media from "../types/Media";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import useRedirect from "../hooks/useRedirect";
import noMediaPoster from "../assets/img/no-media-poster.svg";
import { MEDIA_SCREEN_URL } from "../data/app-routes";

const MediaCard = ({ media }: { media: Media }) => {

  const BANNER_URL = media.poster_path
    ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
    : noMediaPoster;

  const { setSelectedMedia } = useSelectedMedia();
  const handleRedirect = useRedirect();

  const displayMediaScreen = (url: string, mediaToDisplay: Media) => {
    setSelectedMedia(mediaToDisplay);
    handleRedirect(url);
  };

  const imageClass = BANNER_URL === noMediaPoster ? "object-cover" : "object-fill";

  return (
    <>
      <motion.button
        type="button"
        className="w-32 h-48 overflow-hidden rounded-md shadow-md flex-none hover:cursor-pointer border-1 border-[#000000] dark:border-[#FFFFFF]"
        onClick={() => displayMediaScreen(`${MEDIA_SCREEN_URL}`, media)}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={BANNER_URL}
          alt="Movie Banner"
          className={`w-full h-full ${imageClass} rounded-md border-1 border-[#000000] dark:border-[#FFFFFF]`}
        />
      </motion.button>
    </>
  );
};

export default MediaCard;