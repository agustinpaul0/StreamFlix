import { useState, useEffect } from "react";
import { getAllSeriesCatalogue, getSeriesGenres, groupMediaByGenre } from "../utils/mediaUtils";
import MovieCard from "./MediaCard";
import MediaSection from "./MediaSection";
import Series from "../types/Series";

const SeriesCatalogueByGenre = () => {
  const { data: series } = getAllSeriesCatalogue();
  const [genres, setGenres] = useState<Record<number, string>>({});
  const [seriesByGenre, setMoviesByGenre] = useState<Map<string, Series[]>>(new Map<string, Series[]>());

  useEffect(() => {
    getSeriesGenres().then((seriesGenres) => setGenres(seriesGenres));
  }, []);

  useEffect(() => {
    if (!series.length || !Object.keys(genres).length) return;
    const groupedSeries = groupMediaByGenre<Series>(series, genres);
    setMoviesByGenre(groupedSeries);
  }, [series, genres]);

  return (
    <>
      {Array.from(seriesByGenre.entries())
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

export default SeriesCatalogueByGenre;
