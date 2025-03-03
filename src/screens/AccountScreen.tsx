import useRedirect from "../hooks/useRedirect";
import { clearCurrentUserService } from "../services/sessionStorageServices";

const AccountScreen = () => {

  const handleRedirect = useRedirect();

  const logout = () => {
    handleRedirect("/auth");
    clearCurrentUserService();
  }

  return (
    <>
      <h1>ACCOUNT SCREEN</h1>
      <button onClick={() => logout()}>CERRAR SESION</button>
    </>
  );
};

export default AccountScreen;