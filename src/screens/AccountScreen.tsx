import { clearSessionDataService } from "../services/sessionStorageServices";

const AccountScreen = () => {
  return (
    <>
      <h1>ACCOUNT SCREEN</h1>
      <button onClick={() => clearSessionDataService()}>CERRAR SESION</button>
    </>
  );
};

export default AccountScreen;
