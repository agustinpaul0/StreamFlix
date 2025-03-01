import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAccountId, fetchSessionId, fetchUserDetails } from "../utils/fetchUtils";
import { saveSessionDataService } from "../services/sessionStorageServices";
import useRedirect from "../hooks/useRedirect";

const AuthCallbackScreen = () => {
  const HOME_SCREEN_URL = "/streamflix/search/home";
  const handleRedirect = useRedirect();
  const [requestToken, setRequestToken] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("request_token");
    if (token) {
      setRequestToken(token);
    }
  }, []);

  const handleSessionConfirmation = async () => {
    try {
      const sessionId = await fetchSessionId(requestToken);
      const accountId = await fetchAccountId(sessionId);
      const userDetails = await fetchUserDetails(accountId);
      saveSessionDataService(sessionId, userDetails, accountId);
      handleRedirect(HOME_SCREEN_URL, true);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="w-screen h-screen bg-[#080808] flex justify-center items-center text-white text-2xl">
      {requestToken && <button onClick={handleSessionConfirmation}>CONTINUAR</button>}
    </div>
  );
};

export default AuthCallbackScreen;
