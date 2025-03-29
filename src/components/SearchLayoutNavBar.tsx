import { motion } from "framer-motion";
import { 
  useState, 
  useEffect 
} from "react";
import search from "../assets/img/search-icon.svg";
import logo from "../assets/img/logo.svg";
import useRedirect from "../hooks/useRedirect";
import { useLocation } from "react-router-dom";
import { HOME_SCREEN_URL } from "../data/app-routes";

const SearchLayoutNavBar = () => {
  const [searchMedia, setSearchMedia] = useState<string | null>(null);
  const handleRedirect = useRedirect();
  const location = useLocation();

  const SEARCH_MEDIA_SCREEN_URL = searchMedia 
    ? `/streamflix/search/media?user_search=${encodeURIComponent(searchMedia)}` 
    : "/streamflix/search/media?user_search=";

  useEffect(() => {
    if (location.pathname === HOME_SCREEN_URL) {
      setSearchMedia(null); 
    }
  }, [location]);

  useEffect(() => {
    if (searchMedia !== null) {
      handleRedirect(SEARCH_MEDIA_SCREEN_URL); 
    }
  }, [searchMedia]);

  return (
    <nav className="fixed top-0 left-0 w-full flex p-4 gap-4 bg-[#080808] z-40 h-21">
      <img src={logo} alt="App Logo" />
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Type a title or genre..."
          value={searchMedia || ""}
          onChange={(event) => setSearchMedia(event.target.value)}
          spellCheck={false}
          className="rounded-full bg-[#1E1E1E] text-[#827E7E] pl-3 w-full h-full border-2 flex-grow border-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
        />
        <motion.button
          type="button"
          onClick={() => handleRedirect(SEARCH_MEDIA_SCREEN_URL)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-[#1E1E1E] text-white rounded-full focus:outline-none cursor-pointer"
          whileTap={{ scale: 0.95 }}
        >
          <img src={search} alt="Search Icon" className="w-5 h-5" />
        </motion.button>
      </div>
    </nav>
  );
};

export default SearchLayoutNavBar;