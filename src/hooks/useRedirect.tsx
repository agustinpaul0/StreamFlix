import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();

  const handleRedirect = (url: string, replace?: boolean) => {
    (url === "../")
      ? navigate(-1)
      : navigate(url, { replace: replace ?? false }); // If `replace` is not provided, it defaults to `false`
  };

  return handleRedirect;
};

export default useRedirect;
