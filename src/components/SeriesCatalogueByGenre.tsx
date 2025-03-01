import { useState, useEffect } from "react";
import { getAllPopularTVSeriesCatalogue, getAllTVSeriesCatalogue, getSeriesGenres, groupMediaByGenre } from "../utils/mediaUtils";
import Series from "../types/Series";
import MediaCard from "./MediaCard";
import MediaSection from "./MediaSection";

const SeriesCatalogueByGenre = () => {
  const { data: series } = getAllTVSeriesCatalogue();
  const { data: popularSeriesCatalogue } = getAllPopularTVSeriesCatalogue();

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
      <MediaSection title="Popular Series">
        {popularSeriesCatalogue.map((series)=>(
          <MediaCard key={series.id} media={series} />
        ))}
      </MediaSection>
      {Array.from(seriesByGenre.entries())
        .sort(([genreA], [genreB]) => genreA.localeCompare(genreB))
        .map(([genre, allSeries]) => (
          <MediaSection key={genre} title={genre}>
            {allSeries.map((series) => (
              <MediaCard key={series.id} media={series} />
            ))}
          </MediaSection>
        ))}
    </>
  );
};

export default SeriesCatalogueByGenre;