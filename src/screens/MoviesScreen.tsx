import { Suspense } from "react";
import MoviesCatalogueByGenre from "../components/MoviesCatalogueByGenre";
import PopularMovie from "../components/PopularMovie";
import SplashScreen from "./SplashScreen";

const MoviesScreen = () => {
  return (
    <>
      <Suspense fallback={<SplashScreen />}>
        <h3 className="text-2xl font-medium pl-4 pt-4">Our Recommendation</h3>
        <PopularMovie />
        <MoviesCatalogueByGenre />
      </Suspense>
    </>
  );
};

export default MoviesScreen;