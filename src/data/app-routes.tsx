import AppRoute from "../types/AppRoute";
import { lazy } from "react";
import Redirect from "../components/Redirect";
import Movies from "../screens/Movies";
import Series from "../screens/Series";
import SelectedMediaDisplay from "../screens/SelectedMediaDisplay"; 
import MediaDetails from "../screens/MediaDetails";
import SearchLayout from "../screens/SearchLayout";
import MediaRouteLayout from "../screens/MediaRouteLayout";
import FooterLayout from "../screens/FooterLayout";
import UserLayout from "../screens/UserLayout";

const Home = lazy(() => import("../screens/Home"));
const Account = lazy(() => import("../screens/Account"));
const Settings = lazy(() => import("../screens/Settings"));

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Redirect url="/streamflix/search/home" />
  },
  {
    path: "/streamflix",
    element: <FooterLayout />,
    children: [
      {
        path: "search",
        element: <SearchLayout />,
        children: [
          { path: "home", element: <Home /> },
          { path: "movies", element: <Movies /> },
          { path: "series", element: <Series /> }
        ]
      },
      {
        path: "media",
        element: <MediaRouteLayout />,
        children: [
          { path: "selected", element: <SelectedMediaDisplay /> },
          { path: "details", element: <MediaDetails /> }
        ]
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          { path: "account", element: <Account /> },
          { path: "settings", element: <Settings /> }
        ]
      }
    ]
  }
];

export default appRoutes;