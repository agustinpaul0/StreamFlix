import useRedirect from "../hooks/useRedirect";
import { setCurrentUserService } from "../services/sessionStorageServices";
import User from "../types/User";

const UserCard = ({ user }: {user: User}) => {
  const HOME_SCREEN_URL = "/streamflix/search/home";
  const handleRedirect = useRedirect();

  const initApp = (user: User) => {
    setCurrentUserService(user.id)
    handleRedirect(HOME_SCREEN_URL);
  }

  return (
    <div 
      className="flex flex-col items-center gap-2"
      onClick={() => initApp(user)}>
      <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-3xl font-bold">
        {user.username.charAt(0).toUpperCase()}
      </div>
      <span className="text-white text-lg font-medium">{user.username}</span>
    </div>
  );
};

export default UserCard;