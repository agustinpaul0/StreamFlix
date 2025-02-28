import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Redirect = ({ url }: {url: string}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (url === "../") {
      navigate(-1); 
    } else {
      navigate(url, { replace: location.pathname === "/" });
    }
  }, [url]);

  return null;
};

export default Redirect;