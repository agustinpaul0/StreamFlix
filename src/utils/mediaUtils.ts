import { useSuspenseQuery } from "@tanstack/react-query";
import getAllMovies from "../services/getAllMovies";
import getAllTVSeries from "../services/getAllTVSeries";
import getTrailer from "../services/getTrailer";
import Movie from "../types/Movie";
import Series from "../types/Series";
import Media from "../types/Media";
import getPopularMovies from "../services/getPopularMovies";
import getPopularTVSeries from "../services/getPopularTVSeries";
import { fetchGenres } from "./fetchUtils";

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

export const getMediaGenres = async (media: Media): Promise<string> => {
  const genresRecord = media.media_type === "movie" ? await fetchGenres("movie") : await fetchGenres("tv");
  return media.genre_ids
    .map((genreId) => (
      genresRecord[genreId] || "Unknown"
    ))
    .join(" | ");
};

export const getMoviesGenres = async (): Promise<Record<number, string>> => {
  const genresRecord = await fetchGenres("movie");
  return genresRecord;
};

export const getSeriesGenres = async (): Promise<Record<number, string>> => {
  const genresRecord = await fetchGenres("tv");
  return genresRecord;
};

export const groupMediaByGenre = <T extends Media>(
  mediaCatalogue: T[], 
  genres: Record<number, string>
): Map<string, T[]> => {
  const groupedMedia = new Map<string, T[]>();

  mediaCatalogue.forEach((media) => {
    media.genre_ids.forEach((id) => {
      const genreName = genres[id];
      if (genreName) {
        if (!groupedMedia.has(genreName)) {
          groupedMedia.set(genreName, []);
        }
        groupedMedia.get(genreName)?.push(media);
      }
    });
  });

  return groupedMedia;
};

export const getMediaTrailer = (media: Media) => {
  return useSuspenseQuery<string | null, Error>({
    queryKey: [`${media.media_type}-${media.id}-trailer`],
    queryFn: async () => {
      const trailer = await getTrailer(media.id, media.media_type);
      return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
    },
  });
};
