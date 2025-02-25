import AppRoute from "../types/AppRoute";
import { lazy } from "react";
import Redirect from "../components/Redirect";
import AppLayout from "../screens/AppLayout";
import Movies from "../screens/Movies";
import Series from "../screens/Series";
import SelectedMediaDisplay from "../screens/SelectedMediaDisplay"; 
import MediaDetails from "../screens/MediaDetails";
import SelectedMediaLayout from "../screens/SelectedMediaLayout";

const Home = lazy(() => import("../screens/Home"));

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Redirect url="streamflix/home"/>
  },
  {
    path: "/streamflix",
    element: <AppLayout />,
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
    element: <SelectedMediaLayout />,
    children: [
      {
        path: "selectedMedia",
        element: <SelectedMediaDisplay />
      },
      {
        path: "details",
        element: <MediaDetails />
      }
    ]
  }
];

export default appRoutes;
