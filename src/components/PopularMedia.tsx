import { useEffect, useState } from "react";
import FeaturedMediaCard from "./FeaturedMediaCard";
import { getAllPopularMedia } from "../utils/mediaUtils";
import { useSelectedMedia } from "../context/SelectedMediaContext";

const PopularMedia = () => {
  const popularMedia = getAllPopularMedia();

  const { selectedMedia, setSelectedMedia } = useSelectedMedia();
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

  return (selectedMedia && <FeaturedMediaCard media={selectedMedia} />);
};

export default PopularMedia;