import HeaderNav from "../components/HeaderNav";
import FeaturedMedia from "../components/FeaturedMedia";
import MediaSection from "../components/MediaSection";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <FeaturedMedia />
      <MediaSection title="Catalogue" />
      <MediaSection title="Movies" />
      <MediaSection title="Series" />
      <MediaSection title="My List" />
    </>
  );
};

export default Home;
