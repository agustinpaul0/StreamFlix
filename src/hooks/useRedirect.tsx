import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();

  const handleRedirect = (url: string, replace: boolean = false) => {
    console.log("navigating to: ", url);

    if (url === "../") {
      navigate(-1); 
    } else {
      navigate(url, { replace }); 
    }
  };

  return handleRedirect;
};

export default useRedirect;
