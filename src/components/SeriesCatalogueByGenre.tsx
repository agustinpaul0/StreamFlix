import { 
  getAllPopularTVSeriesCatalogue, 
  getAllTVSeriesCatalogue, 
  getSeriesGenres, 
  groupMediaByGenre 
} from "../utils/mediaUtils";
import Series from "../types/Series";
import MediaCard from "./MediaCard";
import MediaSection from "./MediaSection";

const SeriesCatalogueByGenre = () => {
  const { data: series } = getAllTVSeriesCatalogue();
  const { data: popularSeriesCatalogue } = getAllPopularTVSeriesCatalogue();
  const { data: genres } = getSeriesGenres();

  const seriesByGenre = groupMediaByGenre<Series>(series, genres);

  return (
    <>
      <MediaSection title="Popular Series">
        {popularSeriesCatalogue.map((series) => (
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