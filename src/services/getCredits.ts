import axios from "axios";
import CreditsResponse from "../types/CreditsResponse";
import { getAuthHeaders } from "../utils/fetchUtils";

export const getCredits = async (mediaId: number, mediaType: string): Promise<CreditsResponse> => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const url = `${BASE_URL}${mediaType}/${mediaId}/credits`;

  const response = await axios.get(url, { headers: getAuthHeaders() });
  return response.data as CreditsResponse;
};