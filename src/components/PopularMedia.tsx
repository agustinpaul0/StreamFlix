import { useSuspenseQuery } from "@tanstack/react-query";
import FeaturedMediaCard from "./FeaturedMediaCard";
import Media from "../types/Media";
import getPopularMovies from "../services/getPopularMovies";
import getPopularTVSeries from "../services/getPopularTVSeries";
import Movie from "../types/Movie";
import Series from "../types/Series";

const PopularMedia = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const POPULAR_MOVIES_URL = `${BASE_URL}movie/popular?language=en-US`;
  const POPULAR_SERIES_URL = `${BASE_URL}tv/popular?language=en-US`;

  const { data: movieData, error: movieError, isLoading: isLoadingMovies } = useSuspenseQuery<Movie[], Error>({
    queryKey: ["popularMovies"],
    queryFn: () => getPopularMovies(POPULAR_MOVIES_URL),
  });

  const { data: tvData, error: tvError, isLoading: isLoadingTV } = useSuspenseQuery<Series[], Error>({
    queryKey: ["popularTVSeries"],
    queryFn: () => getPopularTVSeries(POPULAR_SERIES_URL),
  });

  if (movieError || tvError) {
    console.error(movieError || tvError);
    return null;
  }

  if (isLoadingMovies || isLoadingTV) {
    return <></>;  
  }

  const movies = movieData ?? [];
  const tvShows = tvData ?? [];

  const combinedMedia: Media[] = [...movies, ...tvShows];
  const randomMedia: Media = combinedMedia[Math.floor(Math.random() * combinedMedia.length)];

  return <FeaturedMediaCard media={randomMedia} />;
};

export default PopularMedia;
