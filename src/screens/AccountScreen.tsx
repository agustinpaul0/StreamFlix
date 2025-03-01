import useRedirect from "../hooks/useRedirect";
import { clearSessionDataService } from "../services/sessionStorageServices";

const AccountScreen = () => {

  const handleRedirect = useRedirect();

  const logout = () => {
    handleRedirect("/");
    clearSessionDataService();
  }

  return (
    <>
      <h1>ACCOUNT SCREEN</h1>
      <button onClick={() => logout()}>CERRAR SESION</button>
    </>
  );
};

export default AccountScreen;