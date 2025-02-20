import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import appRoutes from "../data/app-routes";

const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/streamflix/home", { replace: true });
    }
  }, []);

  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children &&
            route.children.map((childRoute) => (
              <Route
                key={childRoute.path}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export default AppRouter;