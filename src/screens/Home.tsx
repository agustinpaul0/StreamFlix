import HeaderNav from "../components/HeaderNav";
import FeaturedMedia from "../components/FeaturedMedia";
import MediaSection from "../components/MediaSection";
import TrendingMovies from "../components/TrendingMovies";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <FeaturedMedia />
      <MediaSection title="Catalogue">
        <TrendingMovies />
      </MediaSection>
      <MediaSection title="Movies">
        <TrendingMovies />
      </MediaSection>
      <MediaSection title="Series">
        <TrendingMovies />
      </MediaSection>
    </>
  );
};

export default Home;
