import { useState, useEffect } from "react";
import Movie from "../types/Movie";
import { getAllMoviesCatalogue, getMoviesGenres, groupMediaByGenre } from "../utils/mediaUtils";
import MovieCard from "./MediaCard";
import MediaSection from "./MediaSection";

const MoviesCatalogueByGenre = () => {
  const { data: movies } = getAllMoviesCatalogue();
  const [genres, setGenres] = useState<Record<number, string>>({});
  const [moviesByGenre, setMoviesByGenre] = useState<Map<string, Movie[]>>(new Map<string, Movie[]>());

  useEffect(() => {
    getMoviesGenres().then((movieGenres) => setGenres(movieGenres));
  }, []);

  useEffect(() => {
    if (!movies.length || !Object.keys(genres).length) return;
    const groupedMovies = groupMediaByGenre<Movie>(movies, genres);
    setMoviesByGenre(groupedMovies);
  }, [movies, genres]);

  return (
    <>
      {Array.from(moviesByGenre.entries())
        .sort(([genreA], [genreB]) => genreA.localeCompare(genreB))
        .map(([genre, movies]) => (
          <MediaSection key={genre} title={genre}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </MediaSection>
        ))}
    </>
  );
};

export default MoviesCatalogueByGenre;
