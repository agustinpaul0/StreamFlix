import FeaturedMediaCard from "./FeaturedMediaCard";
import { getAllPopularMedia } from "../utils/mediaUtils";
import { useEffect, useState } from "react";
import { useSelectedMedia } from "../context/SelectedMediaContext";

const PopularMedia = () => {
  const popularMedia = getAllPopularMedia();
  const { setSelectedMedia } = useSelectedMedia();
  const [randomPopularMedia] = useState(
    (popularMedia.length > 0)
      ? popularMedia[Math.floor(Math.random() * popularMedia.length)]
      : null
  );

  useEffect(() => {
    if(randomPopularMedia) {
      setSelectedMedia(randomPopularMedia);
    }
  }, [randomPopularMedia]);

  if(!randomPopularMedia) return null;

  return <FeaturedMediaCard media={randomPopularMedia} />;
};

export default PopularMedia;
