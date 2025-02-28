import axios from "axios";
import Media from "../types/Media";
import MediaGenre from "../types/MediaGenre";

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  accept: "application/json",
});

export const fetchMediaFromPage = async (url: string, page: number): Promise<Omit<Media, "media_type">[]> => {
  const res = await axios.get(`${url}&page=${page}`, {
    headers: getAuthHeaders(),
  });

  return res.data.results as Omit<Media, "media_type">[];
};

export const addMediaToMap = <T extends Media>(media: Omit<Media, "media_type">[], allMediaMap: Map<number, T>, mediaType: string) => {
  media.forEach((item) => (
    allMediaMap.set(item.id, { ...item, media_type: mediaType } as T)
  ));
};

export const fetchGenres = async (mediaType: "movie" | "tv"): Promise<Record<number, string>> => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

  try {
    const response = await axios.get(`${BASE_URL}genre/${mediaType}/list`, {
      headers: getAuthHeaders(),
      params: { language: "en" },
    });

    const genreMap: Record<number, string> = {};
    response.data.genres.forEach((genre: MediaGenre) => {
      genreMap[genre.id] = genre.name;
    });

    return genreMap;
  } catch (error) {
    console.error("Error while fetching genres:", error);
    throw error;
  }
};