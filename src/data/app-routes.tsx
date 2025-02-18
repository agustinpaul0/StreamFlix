import AppRoute from "../types/AppRoute";
import Splash from "../screens/Splash";
import Layout from "../screens/Layout";
import Home from "../screens/Home";

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Splash />
  },
  {
    path: "/streamflix",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      }
    ]
  }
];

export default appRoutes;
