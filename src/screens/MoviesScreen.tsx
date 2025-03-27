import { Suspense } from "react";
import MoviesCatalogueByGenre from "../components/MoviesCatalogueByGenre";
import PopularMovie from "../components/PopularMovie";
import SplashScreen from "./SplashScreen";

const MoviesScreen = () => {
  return (
    <>
      {/*Don't know why I had to sorround it with a Suspense in order to work properly*/}
      <Suspense fallback={<SplashScreen />}>
        <h3 className="text-2xl font-medium pl-4 pt-4">Our Recommendation</h3>
        <PopularMovie />
        <MoviesCatalogueByGenre />
      </Suspense>
    </>
  );
};

export default MoviesScreen;