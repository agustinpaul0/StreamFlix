import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSessionId, fetchUserDetails } from "../utils/fetchUtils";
import { addUserToLocalStorageService, getAllUsersFromLocalStorageService } from "../services/localStorageServices";
import User from "../types/User";
import UserCard from "../components/UserCard";
import LoadingModal from "../components/LoadingModal";

const AuthCallbackScreen = () => {
  const [users, setUsers] = useState<Map<string, User> | null>(null);
  const location = useLocation();

  useEffect(() => {

    const handleSessionConfirmation = async (requestToken: string) => {
      try {
        const sessionId = await fetchSessionId(requestToken);
        const userDetails = await fetchUserDetails(sessionId);
        addUserToLocalStorageService(userDetails);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("request_token");

    if (token) {
      console.log(token);
      handleSessionConfirmation(token).then(() => {
        setUsers(getAllUsersFromLocalStorageService());
      });
    } else {
      setUsers(getAllUsersFromLocalStorageService());
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-[#080808] flex justify-center items-center text-white text-2xl">
      {users ? (
        Array.from(users.values()).map((user) => {
          console.log("mapeando");
          return <UserCard key={user.id} user={user} />;
        })
      ) : (
        <LoadingModal />
      )}
    </div>
  );
};

export default AuthCallbackScreen;