import useRedirect from "../hooks/useRedirect";
import { setCurrentUserService } from "../services/sessionStorageServices";
import User from "../types/User";

const UserCard = ({ user, icon }: { user: User, icon: string }) => {
  const HOME_SCREEN_URL = "/streamflix/search/home";
  const handleRedirect = useRedirect();

  const initApp = (user: User) => {
    setCurrentUserService(user.id);
    handleRedirect(HOME_SCREEN_URL);
  };

  return (
    <div 
      className="flex flex-col items-center gap-2"
      onClick={() => initApp(user)}
    >
      <div 
        className="w-24 h-24 rounded-lg flex items-center justify-center text-white text-3xl font-bold bg-cover bg-center"
        style={{ backgroundImage: `url(${icon})` }}
      >
      </div>
      <span className="text-white text-lg font-medium">{user.username}</span>
    </div>
  );
};

export default UserCard;