import { 
  fetchMediaFromPage, 
  addMediaToMap 
} from "../utils/fetchUtils";
import Series from "../types/Series";
import Media from "../types/Media";

const getAllPopularTVSeriesCatalogueService = async (url: string) => {
  const MAX_PAGES = 3;
  const allTVShowsMap = new Map<number, Series>();
  const mediaType = "tv";

  let page = 1;

  try {
    while (page <= MAX_PAGES) {
      const series: Omit<Media, "media_type">[] = await fetchMediaFromPage(url, page);
      addMediaToMap(series, allTVShowsMap, mediaType);
      page++;
    }

    return Array.from(allTVShowsMap.values());
  } catch (error) {
    console.error("Unexpected error while fetching popular TV shows: ", error);
    throw error;
  }
};

export default getAllPopularTVSeriesCatalogueService;