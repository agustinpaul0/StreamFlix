import AppRoute from "../types/AppRoute";
import { lazy } from "react";
import Redirect from "../components/Redirect";
import Layout from "../screens/Layout";
import Categories from "../screens/Categories";
import Movies from "../screens/Movies";
import Series from "../screens/Series";

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
        path: "categories",
        element: <Categories />
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
  }
];

export default appRoutes;