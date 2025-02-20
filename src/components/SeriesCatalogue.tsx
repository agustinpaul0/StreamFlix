import Series from "../types/Series";
import MediaCard from "./MediaCard";
import { getAllSeriesCatalogue } from "../utils/mediaUtils";

const SeriesCatalogue = () => {
  const { data: series } = getAllSeriesCatalogue();
  
  return (
    <>
      {series.map((series: Series) => (
        <MediaCard key={series.id} posterPath={series.poster_path} />
      ))}
    </>
  );
};

export default SeriesCatalogue;