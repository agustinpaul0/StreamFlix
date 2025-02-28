import Series from "../types/Series";
import MediaCard from "./MediaCard";
import { getAllTVSeriesCatalogue } from "../utils/mediaUtils";

const SeriesCatalogue = () => {
  const { data: series } = getAllTVSeriesCatalogue();
  
  return (
    <>
      {series.map((series: Series) => (
        <MediaCard key={series.id} media={series} />
      ))}
    </>
  );
};

export default SeriesCatalogue;