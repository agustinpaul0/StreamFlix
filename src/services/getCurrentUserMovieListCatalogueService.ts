import Movie from "../types/Movie";
import { addMediaToMap, fetchPrivateMedia } from "../utils/fetchUtils";
import { getCurrentUserService } from "./sessionStorageServices";

const getCurrentUserMovieListCatalogueService = async (url: string, sessionId: string) => {
  const accountId = getCurrentUserService();
  const allMoviesMap = new Map<number, Movie>();
  const mediaType = "movie";
  
  try {
    const firstPageMovies = await fetchPrivateMedia(url, accountId, sessionId);
    const totalPages = firstPageMovies.total_pages;

    for (let page = 1; page <= totalPages; page++) {
      const movies = await fetchPrivateMedia(`${url}&page=${page}`, accountId, sessionId);
      addMediaToMap(movies.results, allMoviesMap, mediaType);
    }

    return Array.from(allMoviesMap.values());
  } catch (error) {
    console.error("Unexpected error while fetching user favorite movies: ", error);
    throw error;
  }
};

export default getCurrentUserMovieListCatalogueService;
