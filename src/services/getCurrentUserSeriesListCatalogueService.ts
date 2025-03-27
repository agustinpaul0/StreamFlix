import Series from "../types/Series";
import { 
  addMediaToMap, 
  fetchPrivateMedia 
} from "../utils/fetchUtils";

const getCurrentUserSeriesListCatalogueService = async (url: string, accountId: number, sessionId: string) => {
  const allSeriesMap = new Map<number, Series>();
    const mediaType = "tv";
    
    try {
      const firstPageSeries = await fetchPrivateMedia(url, accountId, sessionId);
      const totalPages = firstPageSeries.total_pages;
  
      for (let page = 1; page <= totalPages; page++) {
        const series = await fetchPrivateMedia(`${url}?page=${page}`, accountId, sessionId);
        addMediaToMap(series.results, allSeriesMap, mediaType);
      }
  
      return Array.from(allSeriesMap.values());
    } catch (error) {
      console.error("Unexpected error while fetching user favorite series: ", error);
      throw error;
    }
};

export default getCurrentUserSeriesListCatalogueService;