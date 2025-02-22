import { useState, useEffect } from "react";
import Movie from "../types/Movie";
import { getAllMoviesCatalogue, getAllPopularMoviesCatalogue, getMoviesGenres, groupMediaByGenre } from "../utils/mediaUtils";
import MovieCard from "./MediaCard";
import MediaSection from "./MediaSection";

const MoviesCatalogueByGenre = () => {
  const { data: moviesCatalogue } = getAllMoviesCatalogue();
  const { data: popularMoviesCatalogue } = getAllPopularMoviesCatalogue();
  const [genres, setGenres] = useState<Record<number, string>>({});
  const [moviesByGenre, setMoviesByGenre] = useState<Map<string, Movie[]>>(new Map<string, Movie[]>());

  useEffect(() => {
    getMoviesGenres().then((movieGenres) => setGenres(movieGenres));
  }, []);

  useEffect(() => {
    if (!moviesCatalogue.length || !Object.keys(genres).length) return;
    const groupedMoviesCatalogue = groupMediaByGenre<Movie>(moviesCatalogue, genres);
    setMoviesByGenre(groupedMoviesCatalogue);
  }, [moviesCatalogue, genres]);

  return (
    <>
      <MediaSection title="Popular Movies">
        {popularMoviesCatalogue.map((movie)=>(
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </MediaSection>
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
