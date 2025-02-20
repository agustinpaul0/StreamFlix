import { useQuery } from "@tanstack/react-query";
import getAllTVSeries from "../services/getAllTVSeries";
import Series from "../types/Series";
import MediaCard from "./MediaCard";

const SeriesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_SERIES_URL = `${BASE_URL}discover/tv?language=en-US`;

  const { data, error, isLoading } = useQuery<Series[], Error>({
    queryKey: ["tvSeriesCatalogue"],
    queryFn: () => getAllTVSeries(ALL_SERIES_URL),
  });

  if (error) {
    console.error(error);
    return null;
  }

  if (isLoading) return <></>;

  return (
    <>
      {data?.map((series: Series) => (
        <MediaCard key={series.id} posterPath={series.poster_path} />
      ))}
    </>
  );
};

export default SeriesCatalogue;
