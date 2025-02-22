import FeaturedMediaCard from "./FeaturedMediaCard";
import { getAllPopularMedia } from "../utils/mediaUtils";
import { useEffect, useState } from "react";
import { useSelectedMedia } from "../context/SelectedMediaContext";

const PopularMedia = () => {
  const popularMedia = getAllPopularMedia();
  const { setSelectedMedia } = useSelectedMedia();
  const [randomMedia] = useState(
    (popularMedia.length > 0)
      ? popularMedia[Math.floor(Math.random() * popularMedia.length)]
      : null
  );

  useEffect(() => {
    if(randomMedia) {
      setSelectedMedia(randomMedia);
    }
  }, [randomMedia]);

  if(!randomMedia) return null;

  return <FeaturedMediaCard media={randomMedia} />;
};

export default PopularMedia;
