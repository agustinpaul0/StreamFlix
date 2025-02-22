import Movie from "../types/Movie";
import MediaCard from "./MediaCard";
import { getAllMoviesCatalogue } from "../utils/mediaUtils";

const MoviesCatalogue = () => {
  const { data: movies } = getAllMoviesCatalogue();
  
  return (
    <>
      {movies.map((movie: Movie) => (
        <MediaCard key={movie.id} media={movie} />
      ))}
    </>
  );
};

export default MoviesCatalogue;