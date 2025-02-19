import HeaderNav from "../components/HeaderNav";
import MediaSection from "../components/MediaSection";
import Catalogue from "../components/Catalogue";
import MoviesCatalogue from "../components/MoviesCatalogue";
import SeriesCatalogue from "../components/SeriesCatalogue";
import PopularMedia from "../components/PopularMedia";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <PopularMedia />
      <MediaSection title="Catalogue">
        <Catalogue />
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
