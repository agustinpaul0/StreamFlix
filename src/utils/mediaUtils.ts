import { useSuspenseQuery } from "@tanstack/react-query";
import getAllMoviesCatalogueService from "../services/getAllMoviesCatalogueService";
import getAllTVSeriesCatalogueService from "../services/getAllTVSeriesCatalogueService";
import getMediaTrailerService from "../services/getMediaTrailerService";
import Movie from "../types/Movie";
import Series from "../types/Series";
import Media from "../types/Media";
import getAllPopularMoviesCatalogueService from "../services/getAllPopularMoviesCatalogueService";
import getAllPopularTVSeriesCatalogueService from "../services/getAllPopularTVSeriesCatalogueService";
import { fetchGenres } from "./fetchUtils";
import CreditsResponse from "../types/CreditsResponse";
import { getMediaCreditsService } from "../services/getMediaCreditsService";
import { 
  getCurrentUserAccountIdService, 
  getCurrentUserSessionIdService 
} from "../services/sessionStorageServices";
import getCurrentUserMovieListCatalogueService from "../services/getCurrentUserMovieListCatalogueService";
import getCurrentUserSeriesListCatalogueService from "../services/getCurrentUserSeriesListCatalogueService";

export const getAllMedia = () => {
  const { data: movies } = getAllMoviesCatalogue();
  const { data: series } = getAllTVSeriesCatalogue();

  return { movies, series };
};

export const getAllMoviesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_MOVIES_URL = `${BASE_URL}discover/movie?language=en-US`;

  return useSuspenseQuery<Movie[], Error>({
    queryKey: ["moviesCatalogue"],
    queryFn: () => getAllMoviesCatalogueService(ALL_MOVIES_URL),
  });
};

export const getAllTVSeriesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ALL_SERIES_URL = `${BASE_URL}discover/tv?language=en-US`;

  return useSuspenseQuery<Series[], Error>({
    queryKey: ["tvSeriesCatalogue"],
    queryFn: () => getAllTVSeriesCatalogueService(ALL_SERIES_URL),
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
    queryFn: () => getAllPopularMoviesCatalogueService(POPULAR_MOVIES_URL),
  });
};

export const getAllPopularTVSeriesCatalogue = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const POPULAR_SERIES_URL = `${BASE_URL}tv/popular?language=en-US`;

  return useSuspenseQuery<Series[], Error>({
    queryKey: ["popularTVSeriesCatalogue"],
    queryFn: () => getAllPopularTVSeriesCatalogueService(POPULAR_SERIES_URL),
  });
};

export const getCurrentUserListCatalogue = async (): Promise<Media[]> => {
  const movies = await getCurrentUserMovieListCatalogue();
  const series = await getCurrentUserSeriesListCatalogue();

  return [ ...movies, ...series ];
}

export const getCurrentUserMovieListCatalogue = async () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const currentUserAccountId = getCurrentUserAccountIdService();
  const USER_MOVIE_LIST_CATALOGUE = `${BASE_URL}account/${currentUserAccountId}/favorite/movies`;

  return await getCurrentUserMovieListCatalogueService(USER_MOVIE_LIST_CATALOGUE, currentUserAccountId, getCurrentUserSessionIdService());
}

export const getCurrentUserSeriesListCatalogue = async () => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const currentUserAccountId = getCurrentUserAccountIdService();
  const USER_SERIES_LIST_CATALOGUE = `${BASE_URL}account/${currentUserAccountId}/favorite/tv`;

  return await getCurrentUserSeriesListCatalogueService(USER_SERIES_LIST_CATALOGUE, currentUserAccountId, getCurrentUserSessionIdService());
}

export const getMediaGenres = (media: Media) => {
  return useSuspenseQuery<string, Error>({
    queryKey: [`${media.media_type}-${media.id}-genres`],
    queryFn: async () => {
      const genresRecord =
        media.media_type === "movie"
          ? await fetchGenres("movie")
          : await fetchGenres("tv");

      return media.genre_ids
        .map((genreId) => genresRecord[genreId] || "Unknown")
        .join(" | ");
    },
  });
};

export const getMoviesGenres = () => {
  return useSuspenseQuery<Record<number, string>, Error>({
    queryKey: ["moviesGenres"],
    queryFn: () => fetchGenres("movie"),
  });
};

export const getSeriesGenres = () => {
  return useSuspenseQuery<Record<number, string>, Error>({
    queryKey: ["seriesGenres"],
    queryFn: () => fetchGenres("tv"),
  });
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

export const filterMediaByTitle = (catalogue: Media[], search: string): Media[] => {
  return catalogue.filter((media) => {
    const titleToCompare = isMovie(media) ? media.title : media.name;
    return titleToCompare.toLowerCase().startsWith(search.toLowerCase());
  });
};

export const filterMoviesByGenre = (moviesByGenre: Map<string, Movie[]>, search: string): Movie[] => {
  const filteredMovies: Movie[] = [];
  for (const [genreId, movies] of moviesByGenre.entries()) {
    if (genreId.toLowerCase().includes(search.toLowerCase())) {
      movies.forEach((movie) => {
        if (!filteredMovies.some((movieFromFilteredMovies) => movieFromFilteredMovies.id === movie.id)) {
          filteredMovies.push(movie);
        }
      });
    }
  }
  return filteredMovies;
};

export const filterSeriesByGenre = (seriesByGenre: Map<string, Series[]>, search: string): Series[] => {
  const filteredSeries: Series[] = [];
  for (const [genreId, series] of seriesByGenre.entries()) {
    if (genreId.toLowerCase().includes(search.toLowerCase())) {
      series.forEach(serie => {
        if (!filteredSeries.some((seriesFromFilteredSeries) => seriesFromFilteredSeries.id === serie.id)) {
          filteredSeries.push(serie);
        }
      });
    }
  }
  return filteredSeries;
};

export const getMediaTrailer = (media: Media) => {
  return useSuspenseQuery<string | null, Error>({
    queryKey: [`${media.media_type}-${media.id}-trailer`],
    queryFn: async () => {
      const trailer = await getMediaTrailerService(media.id, media.media_type);
      return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
    },
  });
};

export const isMovie = (media: Media): media is Movie => {
  return "video" in media;
};

export const getMediaCredits = (media: Media) => {
  return useSuspenseQuery<CreditsResponse, Error>({
    queryKey: [`${media.media_type}-${media.id}-credits`],
    queryFn: () => getMediaCreditsService(media.id, media.media_type),
  });
};