import Movie from "../types/Movie";
import Series from "../types/Series";
import { getAllMedia } from "../utils/mediaUtils";
import MediaCard from "./MediaCard";

const Catalogue = () => {
  const { movies, series } = getAllMedia();

  return (
    <>
      {movies.slice().reverse().map((movie: Movie) => (
        <MediaCard key={movie.id} posterPath={movie.poster_path} />
      ))}
      {series.slice().reverse().map((series: Series) => (
        <MediaCard key={series.id} posterPath={series.poster_path} />
      ))}
    </>
  );
};

export default Catalogue;
