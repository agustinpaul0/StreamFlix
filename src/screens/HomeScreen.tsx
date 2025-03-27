import HeaderSection from "../components/HeaderSection";
import MediaSection from "../components/MediaSection";
import Catalogue from "../components/Catalogue";
import MoviesCatalogue from "../components/MoviesCatalogue";
import SeriesCatalogue from "../components/SeriesCatalogue";
import PopularMedia from "../components/PopularMedia";
import PopularCatalogue from "../components/PopularCatalogue";
import MyListCatalogue from "../components/MyListCatalogue";
import { useMyListCatalogue } from "../context/MyListCatalogueContext";
import { useEffect } from "react";

const HomeScreen = () => {
  const { myListCatalogue } = useMyListCatalogue();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when first mounted
  }, []);

  return (
    <>
      <HeaderSection />
      <PopularMedia />
      <MediaSection title="Catalogue">
        <Catalogue />
      </MediaSection>
      <MediaSection title="Popular">
        <PopularCatalogue />
      </MediaSection>
      {myListCatalogue.length > 0 && (
        <MediaSection title="My List">
          <MyListCatalogue catalogue={myListCatalogue} />
        </MediaSection>
      )}
      <MediaSection title="Movies">
        <MoviesCatalogue />
      </MediaSection>
      <MediaSection title="Series">
        <SeriesCatalogue />
      </MediaSection>
    </>
  );
};

export default HomeScreen;