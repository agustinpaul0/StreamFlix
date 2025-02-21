import Redirect from './Redirect';
import { useRedirect } from '../context/RedirectContext';

const HeaderNav = () => {
  const BASE_URL = "/streamflix/";
  const { redirectUrl, setRedirectUrl } = useRedirect();

  const handleClick = (url: string) => {
    setRedirectUrl(url);
  };

  return (
    <section className="flex justify-between px-4 gap-3 mt-4">
      {["CATEGORIES", "MOVIES", "SERIES"].map((label) => (
        <button
          key={label}
          className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer"
          onClick={() => handleClick(`${BASE_URL}${label.toLowerCase()}`)} 
        >
          {label}
        </button>
      ))}

      {redirectUrl && <Redirect url={redirectUrl} />}
    </section>
  );
};

export default HeaderNav;
