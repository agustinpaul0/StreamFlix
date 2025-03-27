import { 
  getAllMoviesCatalogue, 
  getAllPopularMoviesCatalogue, 
  getMoviesGenres, 
  groupMediaByGenre, 
} from "../utils/mediaUtils";
import Movie from "../types/Movie";
import MediaCard from "./MediaCard";
import MediaSection from "./MediaSection";
import { useEffect } from "react";

const MoviesCatalogueByGenre = () => {

  const { data: moviesCatalogue } = getAllMoviesCatalogue();
  const { data: popularMoviesCatalogue } = getAllPopularMoviesCatalogue();
  const { data: genres } = getMoviesGenres();
  const moviesByGenre = groupMediaByGenre<Movie>(moviesCatalogue, genres);

  useEffect(() => {
    console.log("movies catalogue by genre montado");
  }, []);

  return (
    <>
      <MediaSection title="Popular Movies">
        {popularMoviesCatalogue.map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </MediaSection>
      {Array.from(moviesByGenre.entries())
        .sort(([genreA], [genreB]) => genreA.localeCompare(genreB))
        .map(([genre, movies]) => (
          <MediaSection key={genre} title={genre}>
            {movies.map((movie) => (
              <MediaCard key={movie.id} media={movie} />
            ))}
          </MediaSection>
        ))}
    </>
  );
};

export default MoviesCatalogueByGenre;