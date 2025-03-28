import { 
  useEffect, 
  useState 
} from "react";
import FeaturedMediaCard from "./FeaturedMediaCard";
import { getAllPopularMoviesCatalogue } from "../utils/mediaUtils";
import { useSelectedMedia } from "../context/SelectedMediaContext";

const PopularMovie = () => {
  const { data: popularMovies } = getAllPopularMoviesCatalogue();

  const { setSelectedMedia } = useSelectedMedia();
  const [randomPopularMovieToDisplay] = useState(
    (popularMovies.length > 0)
      ? popularMovies[Math.floor(Math.random() * popularMovies.length)]
      : null
  );

  useEffect(() => {
    if(randomPopularMovieToDisplay) {
      setSelectedMedia(randomPopularMovieToDisplay);
    }
  }, [randomPopularMovieToDisplay]);

  if(!randomPopularMovieToDisplay) return <></>;

  return <FeaturedMediaCard media={randomPopularMovieToDisplay} />;
};

export default PopularMovie;