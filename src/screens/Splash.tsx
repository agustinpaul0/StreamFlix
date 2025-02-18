import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/img/banner.svg";

const Splash = () => {
  const navigate = useNavigate();
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  const startHomeTransition = () => {
    import("./Home").then(() => {
      setIsHomeVisible(true); 
      setTimeout(() => {
        setIsSplashVisible(false);
        setTimeout(() => {
          navigate("/streamflix/home");
        }, 500);
      }, 500);
    });
  };

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      startHomeTransition();
    }, 2000);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808]">
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
          isHomeVisible ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <section
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
          isSplashVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={banner} alt="Splash Screen Banner" />
      </section>
    </div>
  );
};

export default Splash;
