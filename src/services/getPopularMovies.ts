import { fetchMediaFromPage, addMediaToMap } from "../utils/fetchUtils";
import Movie from "../types/Movie";
import Media from "../types/Media";

const getPopularMovies = async (url: string) => {
  const MAX_PAGES = 3;
  const allMoviesMap = new Map<number, Movie>();
  const mediaType = "movie";

  let page = 1;

  try {
    while (page <= MAX_PAGES) {
      const movies: Omit<Media, "media_type">[] = await fetchMediaFromPage(url, page);
      addMediaToMap(movies, allMoviesMap, mediaType);
      page++;
    }

    return Array.from(allMoviesMap.values());
  } catch (e) {
    console.error("Unexpected error while fetching popular movies: ", e);
    throw e;
  }
};

export default getPopularMovies;