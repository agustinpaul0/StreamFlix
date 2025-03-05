import { 
  useEffect, 
  useState 
} from "react";
import { useLocation } from "react-router-dom";
import { 
  fetchSessionId, 
  fetchUserDetails 
} from "../utils/fetchUtils";
import { 
  addUserToLocalStorageService, 
  getAllUsersFromLocalStorageService 
} from "../services/localStorageServices";
import User from "../types/User";
import UserCard from "../components/UserCard";
import LoadingModal from "../components/LoadingModal";
import blueUserIccon from "../assets/img/blue-user-icon.jpg";
import redUserIccon from "../assets/img/red-user-icon.jpg";
import greenUserIccon from "../assets/img/green-user-icon.jpg";
import yellowUserIccon from "../assets/img/yellow-user-icon.jpg";
import turquoiseUserIccon from "../assets/img/turquoise-user-icon.jpg";
import addUserIcon from "../assets/img/add-user-icon.svg";

const availableIcons = [
  blueUserIccon,
  redUserIccon,
  greenUserIccon,
  yellowUserIccon,
  turquoiseUserIccon
];

const usedIcons = new Set<string>();

const getUniqueIcon = () => {
  for (let icon of availableIcons) {
    if (!usedIcons.has(icon)) {
      usedIcons.add(icon);
      return icon;
    }
  }
  usedIcons.clear();
  return getUniqueIcon();
};

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
          console.log(getUniqueIcon());
          return <UserCard key={user.id} user={user} icon={getUniqueIcon()} />;
        })
      ) : (
        <LoadingModal />
      )}
    </div>
  );
};

export default AuthCallbackScreen;