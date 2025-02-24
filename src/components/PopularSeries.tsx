import FeaturedMediaCard from "./FeaturedMediaCard";
import { getAllPopularTVSeriesCatalogue } from "../utils/mediaUtils";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import { useEffect, useState } from "react";

const PopularSeries = () => {
  const { data: popularSeries } = getAllPopularTVSeriesCatalogue();
  const { setSelectedMedia } = useSelectedMedia();
  const [randomPopularSeriesToDisplay] = useState(
    (popularSeries.length > 0)
      ? popularSeries[Math.floor(Math.random() * popularSeries.length)]
      : null
  );

  useEffect(() => {
    if(randomPopularSeriesToDisplay) {
      setSelectedMedia(randomPopularSeriesToDisplay);
    }
  }, [randomPopularSeriesToDisplay]);

  if(!randomPopularSeriesToDisplay) return null;

  return <FeaturedMediaCard media={randomPopularSeriesToDisplay} />;
};

export default PopularSeries;
