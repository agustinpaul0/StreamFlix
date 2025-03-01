import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import { fetchRequestToken, fetchSessionId, fetchAccountId, fetchUserDetails } from "../utils/fetchUtils";
import { saveSessionData } from "../services/sessionStorageServices"; 
import Redirect from "../components/Redirect";

const Login = () => {
  const HOME_SCREEN_URL = "/streamflix/search/home";
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [requestToken, setRequestToken] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('request_token');
    if (token) {
      setRequestToken(token);
    }
  }, [location]);

  const handleLogin = async () => {
    try {
      const token = await fetchRequestToken();
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:5173`;
    } catch (error) {
      console.error("Error fetching request token:", error);
    }
  };

  const handleSessionConfirmation = async () => {
    try {
      const sessionId = await fetchSessionId(requestToken);
      const accountId = await fetchAccountId(sessionId);
      const userDetails = await fetchUserDetails(accountId);
      saveSessionData(sessionId, userDetails, accountId);
      setRedirectUrl(HOME_SCREEN_URL);
    } catch (error) {
      console.error("Error fetching session ID or user info:", error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin}>Iniciar sesión con TMDB</button><br/>
      {requestToken && <button onClick={handleSessionConfirmation}>Confirmar Login</button>}
      {redirectUrl && <Redirect url={redirectUrl} />}
    </div>
  );
};

export default Login;
