import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/streamflix/home", { replace: true });
  }, [navigate]);

  return null;
};

export default Redirect;
