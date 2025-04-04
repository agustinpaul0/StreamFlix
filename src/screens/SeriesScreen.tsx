import { Suspense } from "react";
import PopularSeries from "../components/PopularSeries";
import SeriesCatalogueByGenre from "../components/SeriesCatalogueByGenre";
import SplashScreen from "./SplashScreen";

const SeriesScreen = () => {
  return (
    <>
      {/*Don't know why I had to sorround it with a Suspense in order to work properly*/}
      <Suspense fallback={<SplashScreen />}>
        <h3 className="text-2xl font-medium pl-4 pt-4">Our Recommendation</h3>
        <PopularSeries />
        <SeriesCatalogueByGenre />
      </Suspense>
    </>
  );
};

export default SeriesScreen;