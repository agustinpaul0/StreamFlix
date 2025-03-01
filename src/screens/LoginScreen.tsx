import { fetchRequestToken } from "../utils/fetchUtils";

const LoginScreen = () => {

  const handleLogin = async () => {
    try {
      const token = await fetchRequestToken();
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:5173/auth`;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin}>Iniciar sesión con TMDB</button>
    </div>
  );
};

export default LoginScreen;
