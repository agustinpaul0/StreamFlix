import { getAllPopularMedia } from "../utils/mediaUtils";
import Media from "../types/Media";
import MediaCard from "./MediaCard";

const PopularCatalogue = () => {
  const popularMedia = getAllPopularMedia();

  return (
    <>
      {popularMedia.slice().reverse().map((popularMedia: Media) => (
        <MediaCard key={popularMedia.id} posterPath={popularMedia.poster_path} />
      ))}
    </>
  );
};

export default PopularCatalogue;