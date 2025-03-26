import axios from "axios";
import Media from "../types/Media";
import MediaGenre from "../types/MediaGenre";
import User from "../types/User";

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  accept: "application/json",
});

export const fetchMediaFromPage = async (url: string, page: number): Promise<Omit<Media, "media_type">[]> => {
  try {
    const res = await axios.get(`${url}&page=${page}`, {
      headers: getAuthHeaders(),
    });

    return res.data.results as Omit<Media, "media_type">[];
  } catch (error) {
    console.error("Error fetching media from page:", error);
    throw error;
  }
};

export const addMediaToMap = <T extends Media>(
  media: Omit<Media, "media_type">[],
  allMediaMap: Map<number, T>,
  mediaType: string
) => {
  try {
    media.forEach((item) => {
      allMediaMap.set(item.id, { ...item, media_type: mediaType } as T);
    });
  } catch (error) {
    console.error("Error adding media to map:", error);
    throw error;
  }
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
    const res = await axios.get(`https://api.themoviedb.org/3/authentication/token/new`, {
      headers: getAuthHeaders(),
    });
    return res.data.request_token;
  } catch (error) {
    console.error("Error fetching request token:", error);
    throw error;
  }
};

export const fetchSessionId = async (requestToken: string): Promise<string> => {
  try {
    const res = await axios.post(`https://api.themoviedb.org/3/authentication/session/new`, {
      request_token: requestToken,
    }, {
      headers: getAuthHeaders(),
    });
    return res.data.session_id;
  } catch (error) {
    console.error("Error fetching session ID:", error);
    throw error;
  }
};

export const fetchUserDetails = async (sessionId: string): Promise<User> => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/account`, {
      params: {
        session_id: sessionId,
      },
      headers: getAuthHeaders(),
    });
    const { id, name, username } = response.data;
    return { id, name, username };
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

export const fetchPrivateMedia = async (url: string, accountId: number, sessionId: string) => {
  try {
    const response = await axios.get(url, {
      headers: getAuthHeaders(),
      params: { session_id: sessionId, account_id: accountId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching private data:", error);
    throw error;
  }
};

export const postMediaToCurrentUserListCatalogue = async (
  accountId: number,
  sessionId: string,
  media: Media,
  favorite: boolean
): Promise<void> => {
  try {
    console.log("Media to add/remove: ", media);
    const url = `${import.meta.env.VITE_TMDB_BASE_URL}account/${accountId}/favorite`;
    const res = await axios.post(
      url,
      {
        media_type: media.media_type,
        media_id: media.id,
        favorite: favorite,
      },
      {
        headers: getAuthHeaders(),
        params: { session_id: sessionId },
      }
    );
    console.log(res);
  } catch (error) {
    console.error("Error adding media to favorites:", error);
    throw error;
  }
};