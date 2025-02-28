import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import appRoutes from "../data/app-routes";
import AppRoute from "../types/AppRoute";

const renderRoutes = (routes: AppRoute[]) => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/streamflix/search/home", { replace: true });
    }
  }, []);

  return <Routes>{renderRoutes(appRoutes)}</Routes>;
};

export default AppRouter;
