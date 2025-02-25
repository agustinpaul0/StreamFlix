import HeaderSection from "../components/HeaderSection";
import MediaSection from "../components/MediaSection";
import Catalogue from "../components/Catalogue";
import MoviesCatalogue from "../components/MoviesCatalogue";
import SeriesCatalogue from "../components/SeriesCatalogue";
import PopularMedia from "../components/PopularMedia";
import PopularCatalogue from "../components/PopularCatalogue";

const Home = () => {
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
      <MediaSection title="Movies">
        <MoviesCatalogue />
      </MediaSection>
      <MediaSection title="Series">
        <SeriesCatalogue />
      </MediaSection>
    </>
  );
};

export default Home;