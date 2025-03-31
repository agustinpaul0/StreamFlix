import { motion } from "framer-motion";
import DarkThemeButtonBackIcon from "../assets/img/white-button-back-icon.svg";
import WhiteThemeButtonBackIcon from "../assets/img/dark-button-back-icon.svg";
import logo from "../assets/img/logo.svg";
import useRedirect from "../hooks/useRedirect";

const MediaLayoutNavBar = () => {
  const handleRedirect = useRedirect();

  return (
    <nav className="fixed top-0 left-0 flex gap-3 items-center z-40 w-full bg-[#FFFFFF] dark:bg-[#080808] h-15">
      <motion.button
        type="button"
        className="flex items-center p-4"
        onClick={() => handleRedirect("../")}
        whileTap={{ scale: 0.95 }}
      >
        <img src={WhiteThemeButtonBackIcon} alt="Back" className="w-6 h-6 dark:hidden block" />
        <img src={DarkThemeButtonBackIcon} alt="Back" className="w-6 h-6 dark:block hidden" />
      </motion.button>
      <img src={logo} className="w-7 h-7 mr-4 ml-auto flex items-center" alt="App Logo" />
    </nav>
  );
};

export default MediaLayoutNavBar;