import axios from "axios";
import Series from "../types/Series";

const getAllTVSeries = async (url: string) => {
  const TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const MAX_PAGES = 3;
  const allTVShowsMap = new Map<number, Series>();
  let page = 1;

  try {
    while (page <= MAX_PAGES) {
      const res = await axios.get(`${url}&page=${page}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          accept: "application/json",
        },
      });

      res.data.results.forEach((series: Series) => {
        allTVShowsMap.set(series.id, series);
      });

      page++;
    }

    return Array.from(allTVShowsMap.values());
  } catch (e) {
    console.error("Unexpected error while fetching TV shows: ", e);
    throw e;
  }
};

export default getAllTVSeries;
