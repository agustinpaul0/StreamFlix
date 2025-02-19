import axios from "axios";
import MediaGenre from "../types/MediaGenre";

const fetchGenres = async (type: "movie" | "tv"): Promise<Record<number, string>> => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN; 

  try {
    const response = await axios.get(`${BASE_URL}genre/${type}/list`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: "application/json",
      },
      params: {
        language: "en", 
      },
    });

    const genreMap: Record<number, string> = {};
    response.data.genres.forEach((genre: MediaGenre) => {
      genreMap[genre.id] = genre.name;
    });

    return genreMap;
  } catch (e) {
    console.error("Error while fetching genres:", e);
    throw e;
  }
};

export default fetchGenres;
