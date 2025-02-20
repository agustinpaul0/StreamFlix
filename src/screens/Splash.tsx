import { useState, useEffect } from "react";
import banner from "../assets/img/banner.svg";

const Splash = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsSplashVisible(false); 
    }, 2000);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <div
      className={`relative min-h-screen bg-black flex items-center justify-center transition-opacity duration-500 ${
        isSplashVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={banner} alt="Splash Screen Banner" />
    </div>
  );
};

export default Splash;
