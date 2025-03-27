import { 
  getAllMoviesCatalogue, 
  getAllPopularMoviesCatalogue, 
  getMoviesGenres, 
  groupMediaByGenre, 
} from "../utils/mediaUtils";
import Movie from "../types/Movie";
import MediaCard from "./MediaCard";
import MediaSection from "./MediaSection";

const MoviesCatalogueByGenre = () => {
  const { data: moviesCatalogue } = getAllMoviesCatalogue();
  const { data: popularMoviesCatalogue } = getAllPopularMoviesCatalogue();
  const { data: genres } = getMoviesGenres();

  const moviesByGenre = groupMediaByGenre<Movie>(moviesCatalogue, genres);

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