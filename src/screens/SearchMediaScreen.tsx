import { useEffect, useState } from "react";
import { filterMediaByTitle, filterMoviesByGenre, filterSeriesByGenre, getAllMedia, getAllPopularMedia, getMoviesGenres, getSeriesGenres, groupMediaByGenre } from "../utils/mediaUtils";
import Media from "../types/Media";
import { useLocation } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import MediaSection from "../components/MediaSection";
import Movie from "../types/Movie";
import Series from "../types/Series";
import SplashScreen from "./SplashScreen";

const SearchMediaScreen = () => {
  const [mediaByTitle, setMediaByTitle] = useState<Media[]>([]);
  const [moviesByGenreFiltered, setMoviesByGenreFiltered] = useState<Movie[]>([]);
  const [seriesByGenreFiltered, setSeriesByGenreFiltered] = useState<Series[]>([]);
  const [userSearch, setUserSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true); 
  const location = useLocation();

  const { movies, series } = getAllMedia();
  const popularMedia = getAllPopularMedia();

  // It can happen that a popular media is not included in the media catalogue due to TMDB API settings
  const catalogue: Media[] = [
    ...movies,
    ...series,
    ...popularMedia.filter(
      (popular) => 
        !movies.some((movie) => movie.id === popular.id) && 
        !series.some((serie) => serie.id === popular.id)
    ),
  ];

  const { data: moviesGenres } = getMoviesGenres();
  const moviesByGenre = groupMediaByGenre<Movie>(movies, moviesGenres);

  const { data: seriesGenres } = getSeriesGenres();
  const seriesByGenre = groupMediaByGenre<Series>(series, seriesGenres);

  useEffect(() => {
    window.scroll(0, 0);

    const handleSearch = (search: string) => {
      setUserSearch(search);

      const filteredByTitle = filterMediaByTitle(catalogue, search);
      const filteredMoviesByGenre = filterMoviesByGenre(moviesByGenre, search);
      const filteredSeriesByGenre = filterSeriesByGenre(seriesByGenre, search);

      setMediaByTitle(filteredByTitle);
      setMoviesByGenreFiltered(filteredMoviesByGenre);
      setSeriesByGenreFiltered(filteredSeriesByGenre);
      setIsLoading(false); // Disables loading state once processing is complete
    };

    const queryParams = new URLSearchParams(location.search);
    const mediaToSearchParam = queryParams.get("user_search");

    if (mediaToSearchParam) {
      handleSearch(mediaToSearchParam);
    } else {
      setIsLoading(false); // If there's no search, disable loading
    }
  }, [location]);

  if (isLoading) return <SplashScreen />;  

  return (
    <>
      {mediaByTitle.length > 0 && (
        <MediaSection title={`Results after filtering media by title: "${userSearch}"`}>
          {mediaByTitle.map((media) => (
            <MediaCard key={media.id} media={media} />
          ))}
        </MediaSection>
      )}

      {moviesByGenreFiltered.length > 0 && (
        <MediaSection title={`Results after filtering movies by genre: "${userSearch}"`}>
          {moviesByGenreFiltered.map((movie) => (
            <MediaCard key={movie.id} media={movie} />
          ))}
        </MediaSection>
      )}

      {seriesByGenreFiltered.length > 0 && (
        <MediaSection title={`Results after filtering series by genre: "${userSearch}"`}>
          {seriesByGenreFiltered.map((serie) => (
            <MediaCard key={serie.id} media={serie} />
          ))}
        </MediaSection>
      )}

      {mediaByTitle.length === 0 && moviesByGenreFiltered.length === 0 && seriesByGenreFiltered.length === 0 && (
        <div className="flex p-4 gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FF0000"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <h2 className="text-2xl font-medium">
            {`No results found for "${userSearch}". Try searching by title or genre.`}
          </h2>
        </div>
      )}
    </>
  );
};

export default SearchMediaScreen;