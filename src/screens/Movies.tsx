import MoviesCatalogueByGenre from "../components/MoviesCatalogueByGenre";
import PopularMovie from "../components/PopularMovie";

const Movies = () => {
  return (
    <>
      <h3 className="text-2xl font-medium pl-4 pt-4">Our Recommendation</h3>
      <PopularMovie />
      <MoviesCatalogueByGenre />
    </>
  );
};

export default Movies;
