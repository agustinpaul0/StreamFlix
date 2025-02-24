import AppRoute from "../types/AppRoute";
import { lazy } from "react";
import Redirect from "../components/Redirect";
import Layout from "../screens/Layout";
import Movies from "../screens/Movies";
import Series from "../screens/Series";
import SelectedMedia from "../screens/SelectedMedia"; 

const Home = lazy(() => import("../screens/Home"));

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Redirect url="streamflix/home"/>
  },
  {
    path: "/streamflix",
    element: <Layout />,
    children: [
      {
        path: "home", 
        element: <Home />
      },
      {
        path: "movies",
        element: <Movies />
      },
      {
        path: "series",
        element: <Series />
      }
    ]
  },
  {
    path: "/streamflix/media", 
    element: <SelectedMedia /> 
  }
];

export default appRoutes;
