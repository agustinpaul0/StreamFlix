import axios from "axios";
import { getAuthHeaders } from "../utils/fetchUtils";
import Video from "../types/Video";

const getTrailer = async (mediaId: number, mediaType: string): Promise<Video | null> => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const url = `${BASE_URL}${mediaType}/${mediaId}/videos`;

  try {
    const response = await axios.get(url, { headers: getAuthHeaders() });
    const trailer = response.data.results.find(
      (video: Video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer || null;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
};

export default getTrailer;
