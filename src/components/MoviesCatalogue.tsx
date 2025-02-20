import { useSuspenseQuery } from "@tanstack/react-query";
import getAllMovies from "../services/getAllMovies";
import Movie from "../types/Movie";
import MovieCard from "./MediaCard";

const MoviesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_MOVIES_URL = `${BASE_URL}discover/movie?language=en-US`;

  const { data } = useSuspenseQuery<Movie[], Error>({
    queryKey: ["moviesCatalogue"],
    queryFn: () => getAllMovies(ALL_MOVIES_URL),
  });

  return (
    <>
      {data.map((movie: Movie) => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}
    </>
  );
};

export default MoviesCatalogue;