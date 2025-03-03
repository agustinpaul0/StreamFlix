import { Routes, Route } from "react-router-dom";
import appRoutes from "../data/app-routes";
import AppRoute from "../types/AppRoute";
import { useEffect } from "react";
import useRedirect from "../hooks/useRedirect";
import { getCurrentUserService } from "../services/sessionStorageServices";
import { getAllUsersFromLocalStorageService } from "../services/localStorageServices";

const renderRoutes = (routes: AppRoute[]) => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const AppRouter = () => {
  const HOME_SCREEN_URL = "/streamflix/search/home";
  const AUTH_SCREEN_URL = "/auth";
  const handleRedirect = useRedirect();

  useEffect(() => {
    if (getCurrentUserService() >= 0) {
      handleRedirect(HOME_SCREEN_URL);
    } else if (getAllUsersFromLocalStorageService().size > 0) {
      handleRedirect(AUTH_SCREEN_URL);
    }
  }, []);

  return <Routes>{renderRoutes(appRoutes)}</Routes>;
};

export default AppRouter;