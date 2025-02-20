import FeaturedMediaCard from "./FeaturedMediaCard";
import Media from "../types/Media";
import { getAllPopularMedia } from "../utils/mediaUtils";

const PopularMedia = () => {
  const popularMedia = getAllPopularMedia();
  const randomPopularMediaToDisplay: Media = popularMedia[Math.floor(Math.random() * popularMedia.length)];

  return <FeaturedMediaCard media={randomPopularMediaToDisplay} />;
};

export default PopularMedia;