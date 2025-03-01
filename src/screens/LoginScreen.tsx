import Redirect from "../components/Redirect";
import useLogin from "../hooks/useLogin";

const LoginScreen = () => {
  const {
    requestToken,
    redirectUrl,
    handleLogin,
    handleSessionConfirmation,
  } = useLogin();

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin}>Iniciar sesión con TMDB</button>
      <br />
      {requestToken && <button onClick={handleSessionConfirmation}>Confirmar Login</button>}
      {redirectUrl && <Redirect url={redirectUrl} />}
    </div>
  );
};

export default LoginScreen;
