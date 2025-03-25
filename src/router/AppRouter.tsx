import { 
  Routes, 
  Route, 
  useLocation 
} from "react-router-dom";
import appRoutes from "../data/app-routes";
import AppRoute from "../types/AppRoute";
import { useEffect } from "react";
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
  const location = useLocation();
  const LOGIN_SCREEN_URL = "/";

  useEffect(() => {
    if(location.pathname !== "/" && location.pathname !== "/auth") {
      handleRedirect(LOGIN_SCREEN_URL, true);
    }
  },[]);

  return <Routes>{renderRoutes(appRoutes)}</Routes>;
};

export default AppRouter;