import Series from "../types/Series";
import MediaCard from "./MediaCard";
import { getAllSeriesCatalogue } from "../utils/mediaUtils";

const SeriesCatalogue = () => {
  const { data: series } = getAllSeriesCatalogue();
  
  return (
    <>
      {series.map((series: Series) => (
        <MediaCard key={series.id} media={series} />
      ))}
    </>
  );
};

export default SeriesCatalogue;