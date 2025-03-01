import { fetchRequestToken } from "../utils/fetchUtils";
import { motion } from "framer-motion";
import loginBanner from "../assets/img/login-banner.jpg";
import logo from "../assets/img/logo.svg";

const LoginScreen = () => {
  const handleLogin = async () => {
    try {
      const token = await fetchRequestToken();
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:5173/auth`;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <section 
      className="h-dvh flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${loginBanner})` }}
    >
      <motion.div
        className="w-[95vw] bg-[#1c1c1c]/80 text-center px-6 py-8 rounded-lg shadow-lg flex flex-col"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="App Logo" className= "mr-2 w-10 h-10" />
          <h2 className="text-3xl font-extrabold text-white">Log In</h2>
        </div>
        <p className="text-lg text-gray-400 font-medium mb-6">
          Access your TMDB account to continue
        </p>

        <motion.button
          onClick={handleLogin}
          className="w-full bg-[#FF0000] font-medium text-white text-lg py-3 rounded-md hover:bg-[#d40000] transition-colors duration-300"
          whileTap={{ scale: 0.95 }}
        >
          Log in with TMDB
        </motion.button>
      </motion.div>
    </section>
  );
};

export default LoginScreen;