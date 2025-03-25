import useRedirect from "../hooks/useRedirect";
import { 
  clearCurrentUserService, 
  getCurrentUserAccountIdService 
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
import { removeUserFromLocalStorageService } from "../services/localStorageServices";

const AccountScreen = () => {
  const handleRedirect = useRedirect();

  const logout = () => {
    handleRedirect("/"); 
    removeUserFromLocalStorageService(getCurrentUserAccountIdService());
    clearCurrentUserService();
  };

  return (
    <section className="flex flex-1">
      <AlertDialog>
        <AlertDialogTrigger className="text-[#FF0000] p-8">Log out</AlertDialogTrigger>
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