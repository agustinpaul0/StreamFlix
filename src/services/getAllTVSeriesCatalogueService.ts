import { fetchMediaFromPage, addMediaToMap } from "../utils/fetchUtils";
import Series from "../types/Series";
import Media from "../types/Media";

const getAllTVSeriesCatalogueService = async (url: string) => {
  const MAX_PAGES = 3;
  const allTVSeriesMap = new Map<number, Series>();
  const mediaType = "tv";

  let page = 1;

  try {
    while (page <= MAX_PAGES) {
      const series: Omit<Media, "media_type">[] = await fetchMediaFromPage(url, page);
      addMediaToMap(series, allTVSeriesMap, mediaType);
      page++;
    }

    return Array.from(allTVSeriesMap.values());
  } catch (error) {
    console.error("Unexpected error while fetching all TV shows: ", error);
    throw error;
  }
};

export default getAllTVSeriesCatalogueService;