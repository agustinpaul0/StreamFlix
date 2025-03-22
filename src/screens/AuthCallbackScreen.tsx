import { 
  useEffect, 
  useState 
} from "react";
import { useLocation } from "react-router-dom";
import { 
  fetchSessionId, 
  fetchUserDetails 
} from "../utils/fetchUtils";
import User from "../types/User";
import UserCard from "../components/UserCard";
import LoadingModal from "../components/LoadingModal";
import blueUserIcon from "../assets/img/blue-user-icon.jpg";
import redUserIcon from "../assets/img/red-user-icon.jpg";
import greenUserIcon from "../assets/img/green-user-icon.jpg";
import yellowUserIcon from "../assets/img/yellow-user-icon.jpg";
import turquoiseUserIcon from "../assets/img/turquoise-user-icon.jpg";
import logo from "../assets/img/logo.svg";
import { setCurrentUserSessionIdService } from "../services/sessionStorageServices";

const availableIcons = [
  blueUserIcon,
  redUserIcon,
  greenUserIcon,
  yellowUserIcon,
  turquoiseUserIcon,
];

const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * availableIcons.length);
  return availableIcons[randomIndex];
};

const AuthCallbackScreen = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleSessionConfirmation = async (requestToken: string) => {
      try {
        const sessionId = await fetchSessionId(requestToken);
        const userDetails = await fetchUserDetails(sessionId);
        setCurrentUserSessionIdService(sessionId);
        setCurrentUser(userDetails);
      } catch (error) {
        console.error(error);
      }
    };

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("request_token");

    if (token) {
      handleSessionConfirmation(token);
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-[#080808] flex flex-col justify-center items-center text-white text-2xl">
      {currentUser ? (
        <>
          <img src={logo} alt="App Logo" />
          <h1 className="text-center">Who's watching?</h1>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {<UserCard user={currentUser} icon={getRandomIcon()} />}
          </div>
        </>
      ) : (
        <LoadingModal />
      )}
    </div>
  );
};

export default AuthCallbackScreen;