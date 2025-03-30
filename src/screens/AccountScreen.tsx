import useRedirect from "../hooks/useRedirect";
import { 
  clearCurrentUserAccountIdService, 
  clearCurrentUserSessionIdService 
} from "../services/sessionStorageServices";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { LOGIN_SCREEN_URL, MY_LIST_URL, MY_RATINGS_URL } from "../data/app-routes";
import AccountButton from "../components/AccountButton";
import myListIcon from "../assets/img/my-list-icon.svg";
import ratingIcon from "../assets/img/rating-icon.svg";
import { useEffect } from "react";

const AccountScreen = () => {
  const handleRedirect = useRedirect();

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const logout = () => {
    handleRedirect(LOGIN_SCREEN_URL); 
    clearCurrentUserAccountIdService();
    clearCurrentUserSessionIdService();
  };

  return (
    <section className="flex flex-col h-full justify-center items-center text-xl p-4 gap-2">
      <AccountButton icon={myListIcon} title={"My List"} onClick={() => handleRedirect(MY_LIST_URL)} />
      <AccountButton icon={ratingIcon} title={"My Ratings"} onClick={() => handleRedirect(MY_RATINGS_URL)} />
      <AlertDialog>
        <AlertDialogTrigger className="text-[#FF0000] p-8 font-medium">Log out</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to log out?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Logging out will prevent access to your account until you sign in again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={logout}>Log out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default AccountScreen;