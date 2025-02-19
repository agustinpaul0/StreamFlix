import HeaderNav from "../components/HeaderNav";
import FeaturedMedia from "../components/FeaturedMedia";
import MediaSection from "../components/MediaSection";
import Catalogue from "../components/Catalogue";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <FeaturedMedia />
      <MediaSection title="Catalogue">
        <Catalogue />
      </MediaSection>
    </>
  );
};

export default Home;
