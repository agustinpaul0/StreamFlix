import MyListScreen from "../screens/MyListScreen";
import MyRatingsScreen from "../screens/MyRatingsScreen";
import AppRoute from "../types/AppRoute";
import { lazy } from "react";

export const MEDIA_SCREEN_URL = "/streamflix/media/selected";
export const SELECTED_MEDIA_DETAILS_SCREEN_URL = "/streamflix/media/details";
export const HOME_SCREEN_URL = "/streamflix/search/home";
export const ACCOUNT_SCREEN_URL = "/streamflix/user/account";
export const SETTINGS_SCREEN_URL = "/streamflix/user/settings";
export const LOGIN_SCREEN_URL = "/";
export const AUTH_SCREEN_URL = "/auth";
export const MY_LIST_URL = "/streamflix/user/my-list";
export const MY_RATINGS_URL = "/streamflix/user/my-ratings";

const SearchMedia = lazy(() => import("../screens/SearchMediaScreen"));
const AuthCallbackScreen = lazy(() => import("../screens/AuthCallbackScreen"));
const LoginScreen = lazy(() => import("../screens/LoginScreen"));
const SelectedMediaScreen = lazy(() => import("../screens/SelectedMediaScreen"));
const MediaDetailsScreen = lazy(() => import("../screens/MediaDetailsScreen"));
const SearchLayout = lazy(() => import("../screens/SearchLayout"));
const MediaLayout = lazy(() => import("../screens/MediaLayout"));
const FooterLayout = lazy(() => import("../screens/FooterLayout"));
const UserLayout = lazy(() => import("../screens/UserLayout"));
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const MoviesScreen = lazy(() => import("../screens/MoviesScreen"));
const SeriesScreen = lazy(() => import("../screens/SeriesScreen"));
const AccountScreen = lazy(() => import("../screens/AccountScreen"));
const SettingsScreen = lazy(() => import("../screens/SettingsScreen"));

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/auth",
    element: <AuthCallbackScreen />
  },
  {
    path: "/streamflix",
    element: <FooterLayout />,
    children: [
      {
        path: "search",
        element: <SearchLayout />,
        children: [
          { path: "media", element: <SearchMedia />},
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
          { path: "my-list", element: <MyListScreen /> },
          { path: "my-ratings", element: <MyRatingsScreen /> },
          { path: "settings", element: <SettingsScreen /> },
        ],
      },
    ],
  },
];

export default appRoutes;