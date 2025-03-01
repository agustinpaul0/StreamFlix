import axios from "axios";
import Media from "../types/Media";
import MediaGenre from "../types/MediaGenre";
import UserDetails from "../types/UserDetails";

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
  try {
    const response = await axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}genre/${mediaType}/list`, {
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

export const fetchRequestToken = async (): Promise<string> => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    return res.data.request_token;
  } catch (error) {
    console.error("Error fetching request token:", error);
    throw error;
  }
};

export const fetchSessionId = async (requestToken: string): Promise<string> => {
  try {
    const res = await axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${import.meta.env.VITE_TMDB_API_KEY}`, {
      request_token: requestToken,
    });
    return res.data.session_id;
  } catch (error) {
    console.error("Error fetching session ID:", error);
    throw error;
  }
};

export const fetchAccountId = async (sessionId: string): Promise<number> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/account?api_key=${import.meta.env.VITE_TMDB_API_KEY}&session_id=${sessionId}`
    );
    return response.data.id; // This is the account_id
  } catch (error) {
    console.error("Error fetching account ID:", error);
    throw error;
  }
};

export const fetchUserDetails = async (accountId: number): Promise<UserDetails> => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/account/${accountId}`, {
      headers: getAuthHeaders(),
    });
    const { id, name, username } = response.data; 
    return { id, name, username };
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};