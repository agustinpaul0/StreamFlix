import { fetchMediaFromPage, addMediaToMap } from "../utils/fetchUtils";
import Series from "../types/Series";
import Media from "../types/Media";

const getPopularTVSeries = async (url: string) => {
  const MAX_PAGES = 3;
  const allTVShowsMap = new Map<number, Series>();
  const mediaType = "series";

  let page = 1;

  try {
    while (page <= MAX_PAGES) {
      const series: Omit<Media, "media_type">[] = await fetchMediaFromPage(url, page);
      addMediaToMap(series, allTVShowsMap, mediaType);
      page++;
    }

    return Array.from(allTVShowsMap.values());
  } catch (e) {
    console.error("Unexpected error while fetching popular TV shows: ", e);
    throw e;
  }
};

export default getPopularTVSeries;