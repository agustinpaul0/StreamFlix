import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RedirectProps from "../types/RedirectProps";
import { useRedirect } from "../context/RedirectContext";

const Redirect = ({ url }: RedirectProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { redirectUrl, setRedirectUrl } = useRedirect();


  useEffect(() => {
    console.log("ANTES:",redirectUrl);
    setRedirectUrl(url);
    console.log("DESPUES:",redirectUrl);
    navigate(url, { replace: location.pathname === "/" });
  }, [url]);

  return null;
};

export default Redirect;