import { useQuery } from "@tanstack/react-query";
import getAllMovies from "../services/getAllMovies";
import getAllTVSeries from "../services/getAllTVSeries";
import Movie from "../types/Movie";
import Series from "../types/Series";
import MediaCard from "./MediaCard";
import Splash from "../screens/Splash";

const AllMedia = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_MOVIES_URL = `${BASE_URL}discover/movie?language=en-US`;
  const ALL_SERIES_URL = `${BASE_URL}discover/tv?language=en-US`;

  const {
    data: movieData,
    error: movieError,
    isLoading: isLoadingMovies,
  } = useQuery<Movie[], Error>({
    queryKey: ["movies"], 
    queryFn: () => getAllMovies(ALL_MOVIES_URL),
  });

  const {
    data: tvData,
    error: tvError,
    isLoading: isLoadingTV,
  } = useQuery<Series[], Error>({
    queryKey: ["tvSeries"], 
    queryFn: () => getAllTVSeries(ALL_SERIES_URL), 
  });

  if (movieError || tvError) {
    console.error(movieError || tvError);
    return null;
  }

  if (isLoadingMovies || isLoadingTV) {
    return <Splash />; 
  }

  return (
    <>
      {movieData && movieData.map((movie: Movie) => (
        <MediaCard key={movie.id} posterPath={movie.poster_path} />
      ))}
      {tvData && tvData.map((series: Series) => (
        <MediaCard key={series.id} posterPath={series.poster_path} />
      ))}
    </>
  );
};

export default AllMedia;
