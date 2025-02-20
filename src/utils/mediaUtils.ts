import { useSuspenseQuery } from "@tanstack/react-query";
import getAllMovies from "../services/getAllMovies";
import getAllTVSeries from "../services/getAllTVSeries";
import Movie from "../types/Movie";
import Series from "../types/Series";
import Media from "../types/Media";
import getPopularMovies from "../services/getPopularMovies";
import getPopularTVSeries from "../services/getPopularTVSeries";

export const getAllMedia = () => {
  const { data: movies } = getAllMoviesCatalogue();
  const { data: series } = getAllSeriesCatalogue();

  return { movies, series };
};

export const getAllSeriesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_SERIES_URL = `${BASE_URL}discover/tv?language=en-US`;

  return useSuspenseQuery<Series[], Error>({
    queryKey: ["tvSeriesCatalogue"],
    queryFn: () => getAllTVSeries(ALL_SERIES_URL),
  });
};

export const getAllMoviesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_MOVIES_URL = `${BASE_URL}discover/movie?language=en-US`;

  return useSuspenseQuery<Movie[], Error>({
    queryKey: ["moviesCatalogue"],
    queryFn: () => getAllMovies(ALL_MOVIES_URL),
  });
};

export const getAllPopularMedia = () => {
  const { data: movieData } = getAllPopularMoviesCatalogue();
  const { data: seriesData } = getAllPopularTVSeriesCatalogue();

  return [...movieData, ...seriesData];
};

export const getAllPopularMoviesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const POPULAR_MOVIES_URL = `${BASE_URL}movie/popular?language=en-US`;

  return useSuspenseQuery<Movie[], Error>({
    queryKey: ["popularMoviesCatalogue"],
    queryFn: () => getPopularMovies(POPULAR_MOVIES_URL),
  });
};

export const getAllPopularTVSeriesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const POPULAR_SERIES_URL = `${BASE_URL}tv/popular?language=en-US`;

  return useSuspenseQuery<Series[], Error>({
    queryKey: ["popularTVSeriesCatalogue"],
    queryFn: () => getPopularTVSeries(POPULAR_SERIES_URL),
  });
};

export const getMediaGenres = (media: Media, movieGenres: Record<number, string>, tvGenres: Record<number, string>): string => {
  const genresMap = media.media_type === "movie" ? movieGenres : tvGenres;
  return media.genre_ids
    .map((genreId) => genresMap[genreId] || "Unknown")
    .join(" | ");
};