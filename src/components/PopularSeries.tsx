import FeaturedMediaCard from "./FeaturedMediaCard";
import { getAllPopularTVSeriesCatalogue } from "../utils/mediaUtils";

const PopularSeries = () => {
  const {data: popularSeries} = getAllPopularTVSeriesCatalogue();
  const randomPopularSeriesToDisplay = popularSeries[Math.floor(Math.random() * popularSeries.length)];

  return <FeaturedMediaCard media={randomPopularSeriesToDisplay} />;
};

export default PopularSeries;