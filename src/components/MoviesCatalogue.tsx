import Movie from "../types/Movie";
import MovieCard from "./MediaCard";
import { getAllMoviesCatalogue } from "../utils/mediaUtils";

const MoviesCatalogue = () => {
  const { data: movies } = getAllMoviesCatalogue();
  
  return (
    <>
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}
    </>
  );
};

export default MoviesCatalogue;