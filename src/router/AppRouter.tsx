import { Routes, Route } from "react-router-dom";
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
  return <Routes>{renderRoutes(appRoutes)}</Routes>;
};

export default AppRouter;