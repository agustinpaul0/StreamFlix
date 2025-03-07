import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSessionId, fetchUserDetails } from "../utils/fetchUtils";
import {
  addUserToLocalStorageService,
  getAllUsersFromLocalStorageService,
} from "../services/localStorageServices";
import User from "../types/User";
import UserCard from "../components/UserCard";
import LoadingModal from "../components/LoadingModal";
import blueUserIcon from "../assets/img/blue-user-icon.jpg";
import redUserIcon from "../assets/img/red-user-icon.jpg";
import greenUserIcon from "../assets/img/green-user-icon.jpg";
import yellowUserIcon from "../assets/img/yellow-user-icon.jpg";
import turquoiseUserIcon from "../assets/img/turquoise-user-icon.jpg";
import addUserIcon from "../assets/img/add-user-icon.svg";
import useRedirect from "../hooks/useRedirect";
import logo from "../assets/img/logo.svg";

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
  const [users, setUsers] = useState<Map<string, User> | null>(null);
  const location = useLocation();
  const handleRedirect = useRedirect();
  const LOGIN_SCREEN_URL = "/";

  useEffect(() => {
    const handleSessionConfirmation = async (requestToken: string) => {
      try {
        const sessionId = await fetchSessionId(requestToken);
        const userDetails = await fetchUserDetails(sessionId);
        addUserToLocalStorageService(userDetails);
      } catch (error) {
        console.error(error);
      }
    };

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("request_token");

    if (token) {
      handleSessionConfirmation(token).then(() => {
        setUsers(getAllUsersFromLocalStorageService());
      });
    } else {
      setUsers(getAllUsersFromLocalStorageService());
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-[#080808] flex flex-col justify-center items-center text-white text-2xl">
      {users ? (
        <>
          <img src={logo} alt="App Logo" />
          <h1 className="text-center">Who's watching?</h1>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {Array.from(users.values()).map((user) => (
              <UserCard key={user.id} user={user} icon={getRandomIcon()} />
            ))}
            <button
              className="w-auto h-auto flex flex-col items-center justify-center text-white text-3xl font-bold bg-cover bg-center"
              onClick={() => handleRedirect(LOGIN_SCREEN_URL)}
            >
              <img
                className="object-fill w-24 h-24"
                src={addUserIcon}
                alt="Add User"
              />
              <span className="text-white text-lg font-medium">
                Add Profile
              </span>
            </button>
          </div>
        </>
      ) : (
        <LoadingModal />
      )}
    </div>
  );
};

export default AuthCallbackScreen;
