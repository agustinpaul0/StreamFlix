import FeaturedMediaCard from "./FeaturedMediaCard";
import { getAllPopularMoviesCatalogue } from "../utils/mediaUtils";

const PopularMovie = () => {
  const {data: popularMovie} = getAllPopularMoviesCatalogue();
  const randomPopularMovieToDisplay = popularMovie[Math.floor(Math.random() * popularMovie.length)];

  return <FeaturedMediaCard media={randomPopularMovieToDisplay} />;
};

export default PopularMovie;