import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/img/banner.svg";

const Splash = () => {
  // Code to show the Splash Screen for 3 seconds (minimum)
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="flex items-center justify-center bg-[#080808] min-h-screen">
      <img src={banner} alt="Splash Screen Banner" />
    </section>
  );
};

export default Splash;
