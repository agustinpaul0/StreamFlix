import { motion } from "framer-motion";
import useRedirect from "../hooks/useRedirect";
import { setCurrentUserService } from "../services/sessionStorageServices";
import User from "../types/User";
import { HOME_SCREEN_URL } from "../data/app-routes";

const UserCard = ({ user, icon }: { user: User; icon: string }) => {
  const handleRedirect = useRedirect();

  const initApp = (user: User) => {
    setCurrentUserService(user.id);
    handleRedirect(HOME_SCREEN_URL);
  };

  return (
    <>
      <motion.button
        className="w-auto h-auto rounded-sm flex flex-col items-center justify-center text-white text-3xl font-bold bg-cover bg-center"
        onClick={() => initApp(user)}
        aria-label={`Select ${user.username} to start streaming`}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={icon}
          alt={`${user.username}'s profile`}
          className="object-fill w-24 h-24 rounded-sm"
        />
        <span className="text-white text-lg font-medium">{user.username}</span>
      </motion.button>
    </>
  );
};

export default UserCard;