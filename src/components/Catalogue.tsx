import useFetch from "../hooks/useFetch";
import getAllMovies from "../services/getAllMovies";
import getAllTVSeries from "../services/getAllTVSeries";
import Movie from "../types/Movie";
import Series from "../types/Series";
import MovieCard from "./MovieCard";

const AllMedia = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_MOVIES_URL = `${BASE_URL}discover/movie?language=en-US`;
  const ALL_SERIES_URL = `${BASE_URL}discover/tv?language=en-US`;

  const { data: movieData, error: movieError } = useFetch(getAllMovies, ALL_MOVIES_URL);
  const { data: tvData, error: tvError } = useFetch(getAllTVSeries, ALL_SERIES_URL);

  if (movieError || tvError) {
    console.error(movieError || tvError);
    return null;
  }

  if (!movieData && !tvData) return <></>;

  return (
    <>
      {movieData && movieData.map((movie: Movie) => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}
      {tvData && tvData.map((series: Series) => (
        <MovieCard key={series.id} posterPath={series.poster_path} />
      ))}
    </>
  );
};

export default AllMedia;
