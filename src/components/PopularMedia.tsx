import FeaturedMediaCard from "./FeaturedMediaCard";
import { getAllPopularMedia } from "../utils/mediaUtils";

const PopularMedia = () => {
  const popularMedia = getAllPopularMedia();
  const randomPopularMediaToDisplay = popularMedia[Math.floor(Math.random() * popularMedia.length)];

  return <FeaturedMediaCard media={randomPopularMediaToDisplay} />;
};

export default PopularMedia;