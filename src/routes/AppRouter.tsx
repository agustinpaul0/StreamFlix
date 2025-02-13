import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Splash from "../screens/Splash";
import Layout from "../screens/Layout";
import Home from "../screens/Home";

const AppRouter = () => {
  // Code to navigate to splash screen on every app reload
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/streamflix" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
