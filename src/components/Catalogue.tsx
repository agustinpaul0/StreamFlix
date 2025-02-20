import { useSuspenseQuery } from "@tanstack/react-query";
import getAllMovies from "../services/getAllMovies";
import getAllTVSeries from "../services/getAllTVSeries";
import Movie from "../types/Movie";
import Series from "../types/Series";
import MediaCard from "./MediaCard";

const Catalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_MOVIES_URL = `${BASE_URL}discover/movie?language=en-US`;
  const ALL_SERIES_URL = `${BASE_URL}discover/tv?language=en-US`;

  const {
    data: movieData,
  } = useSuspenseQuery<Movie[], Error>({
    queryKey: ["movies"],
    queryFn: () => getAllMovies(ALL_MOVIES_URL),
  });

  const {
    data: tvData,
  } = useSuspenseQuery<Series[], Error>({
    queryKey: ["tvSeries"],
    queryFn: () => getAllTVSeries(ALL_SERIES_URL),
  });

  return (
    <>
      {movieData && movieData.map((movie: Movie) => (
        <MediaCard key={movie.id} posterPath={movie.poster_path} />
      ))}
      {tvData && tvData.map((series: Series) => (
        <MediaCard key={series.id} posterPath={series.poster_path} />
      ))}
    </>
  );
};

export default Catalogue;
