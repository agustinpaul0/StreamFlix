import AppRoute from "../types/AppRoute";
import { lazy } from "react";
import Redirect from "../components/Redirect";

const Movies = lazy(() => import("../screens/MoviesScreen"));
const Series = lazy(() => import("../screens/SeriesScreen"));
const SelectedMediaDisplay = lazy(() => import("../screens/SelectedMediaScreen"));
const MediaDetails = lazy(() => import("../screens/MediaDetailsScreen"));
const SearchLayout = lazy(() => import("../screens/SearchLayout"));
const MediaRouteLayout = lazy(() => import("../screens/MediaLayout"));
const FooterLayout = lazy(() => import("../screens/FooterLayout"));
const UserLayout = lazy(() => import("../screens/UserLayout"));
const Home = lazy(() => import("../screens/HomeScreen"));
const Account = lazy(() => import("../screens/AccountScreen"));
const Settings = lazy(() => import("../screens/SettingsScreen"));

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Redirect url="/streamflix/search/home" />,
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
          { path: "series", element: <Series /> },
        ],
      },
      {
        path: "media",
        element: <MediaRouteLayout />,
        children: [
          { path: "selected", element: <SelectedMediaDisplay /> },
          { path: "details", element: <MediaDetails /> },
        ],
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          { path: "account", element: <Account /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
];

export default appRoutes;
