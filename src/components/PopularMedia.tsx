import useFetch from "../hooks/useFetch";
import getPopularMovies from "../services/getPopularMovies";
import getPopularTVSeries from "../services/getPopularTVSeries";
import FeaturedMediaCard from "./FeaturedMediaCard";
import Media  from "../types/Media";  

const PopularMedia = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const POPULAR_FILMS_URL = `${BASE_URL}movie/popular?language=en-US`;
  const POPULAR_SERIES_URL = `${BASE_URL}tv/popular?language=en-US`;

  const { data: movieData, error: movieError } = useFetch(getPopularMovies, POPULAR_FILMS_URL);
  const { data: tvData, error: tvError } = useFetch(getPopularTVSeries, POPULAR_SERIES_URL);

  if (movieError || tvError) {
    console.error(movieError || tvError);
    return null;
  }

  if (!movieData && !tvData) return <></>;

  const movies = movieData ?? [];
  const tvShows = tvData ?? [];

  const combinedMedia: Media[] = [
    ...movies,
    ...tvShows,
  ];

  const randomMedia: Media = combinedMedia[Math.floor(Math.random() * combinedMedia.length)];

  console.log(randomMedia);

  return <FeaturedMediaCard media={randomMedia} />;
};

export default PopularMedia;
