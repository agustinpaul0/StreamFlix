import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import appRoutes from "../data/app-routes";
import AppRoute from "../types/AppRoute";
import { getSessionDataService } from "../services/sessionStorageServices";
import useRedirect from "../hooks/useRedirect";

const renderRoutes = (routes: AppRoute[]) => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const AppRouter = () => {
  const handleRedirect = useRedirect();

  useEffect(() => {
    const sessionData = getSessionDataService();
    
    if (sessionData !== null) {
      handleRedirect("/streamflix/search/home", true);
    } else if (location.pathname !== "/auth") {
      handleRedirect("/", true);
    }
  }, []);

  return <Routes>{renderRoutes(appRoutes)}</Routes>;
};

export default AppRouter;
