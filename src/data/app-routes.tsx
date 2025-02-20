import AppRoute from "../types/AppRoute";
import { lazy } from "react";
import Redirect from "../components/Redirect";
import Layout from "../screens/Layout";

const Home = lazy(() => import("../screens/Home"));

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Redirect />
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
