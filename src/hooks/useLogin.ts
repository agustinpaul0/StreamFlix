import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchRequestToken, fetchSessionId, fetchAccountId, fetchUserDetails } from "../utils/fetchUtils";
import { saveSessionData } from "../services/sessionStorageServices";

const useLogin = () => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [requestToken, setRequestToken] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("request_token");
    if (token) {
      setRequestToken(token);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const token = await fetchRequestToken();
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:5173`;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSessionConfirmation = async () => {
    try {
      const sessionId = await fetchSessionId(requestToken);
      const accountId = await fetchAccountId(sessionId);
      const userDetails = await fetchUserDetails(accountId);
      saveSessionData(sessionId, userDetails, accountId);
      setRedirectUrl("/streamflix/search/home");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    requestToken,
    redirectUrl,
    handleLogin,
    handleSessionConfirmation,
  };
};

export default useLogin;
