import HeaderNav from "../components/HeaderNav";
import FeaturedMedia from "../components/FeaturedMedia";
import MediaSection from "../components/MediaSection";
import Catalogue from "../components/Catalogue";
import FilmsCatalogue from "../components/FilmsCatalogue";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <FeaturedMedia />
      <MediaSection title="Catalogue">
        <Catalogue />
      </MediaSection>
      <MediaSection title="Films">
        <FilmsCatalogue />
      </MediaSection>
    </>
  );
};

export default Home;
