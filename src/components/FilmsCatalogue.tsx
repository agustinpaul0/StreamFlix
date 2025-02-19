import useFetch from "../hooks/useFetch";
import getAllMovies from "../services/getAllMovies";
import Movie from "../types/Movie";
import MovieCard from "./MovieCard";

const FilmsCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_MOVIES_URL = `${BASE_URL}discover/movie?language=en-US`;

  const { data, error } = useFetch(getAllMovies, ALL_MOVIES_URL);

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) return <></>;

  return (
    <>
      {data.map((movie: Movie) => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}
    </>
  );
};

export default FilmsCatalogue;
