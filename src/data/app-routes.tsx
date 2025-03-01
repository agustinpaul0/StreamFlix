import AuthCallbackScreen from "../screens/AuthCallbackScreen";
import AppRoute from "../types/AppRoute";
import { lazy } from "react";

const LoginScreen = lazy(() => import("../screens/LoginScreen"));
const MoviesScreen = lazy(() => import("../screens/MoviesScreen"));
const SeriesScreen = lazy(() => import("../screens/SeriesScreen"));
const SelectedMediaScreen = lazy(() => import("../screens/SelectedMediaScreen"));
const MediaDetailsScreen = lazy(() => import("../screens/MediaDetailsScreen"));
const SearchLayout = lazy(() => import("../screens/SearchLayout"));
const MediaLayout = lazy(() => import("../screens/MediaLayout"));
const FooterLayout = lazy(() => import("../screens/FooterLayout"));
const UserLayout = lazy(() => import("../screens/UserLayout"));
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const AccountScreen = lazy(() => import("../screens/AccountScreen"));
const SettingsScreen = lazy(() => import("../screens/SettingsScreen"));

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/auth",
    element: <AuthCallbackScreen />,
  },
  {
    path: "/streamflix",
    element: <FooterLayout />,
    children: [
      {
        path: "search",
        element: <SearchLayout />,
        children: [
          { path: "home", element: <HomeScreen /> },
          { path: "movies", element: <MoviesScreen /> },
          { path: "series", element: <SeriesScreen /> },
        ],
      },
      {
        path: "media",
        element: <MediaLayout />,
        children: [
          { path: "selected", element: <SelectedMediaScreen /> },
          { path: "details", element: <MediaDetailsScreen /> },
        ],
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          { path: "account", element: <AccountScreen /> },
          { path: "settings", element: <SettingsScreen /> },
        ],
      },
    ],
  },
];

export default appRoutes;
