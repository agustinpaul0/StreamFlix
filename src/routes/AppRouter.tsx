import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Splash from "../screens/Splash";

// Lazy Loading of Home Screen
const Home = lazy(() => import("../screens/Home"));

const AppRouter = () => {
  // Code to show the splash screen on every reload
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
