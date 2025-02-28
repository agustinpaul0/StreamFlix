import PopularSeries from "../components/PopularSeries";
import SeriesCatalogueByGenre from "../components/SeriesCatalogueByGenre";

const SeriesScreen = () => {
  return (
    <>
      <h3 className="text-2xl font-medium pl-4 pt-4">Our Recommendation</h3>
      <PopularSeries />
      <SeriesCatalogueByGenre />
    </>
  );
};

export default SeriesScreen;
