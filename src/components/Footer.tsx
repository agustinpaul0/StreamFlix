import Redirect from "./Redirect";
import homeIcon from "../assets/img/home-icon.svg";
import userIcon from "../assets/img/user-account-icon.svg";
import settingsIcon from "../assets/img/settings-icon.svg";
import { useRedirect } from "../context/RedirectContext";

const Footer = () => {
  const BASE_URL = "/streamflix/";
  const { redirectUrl, setRedirectUrl } = useRedirect();

  const handleClick = (url: string) => {
    setRedirectUrl(url);
  };

  const footerIcons = [
    { label: "HOME", src: homeIcon, alt: "Home Icon" },
    { label: "ACCOUNT", src: userIcon, alt: "User Account Icon" },
    { label: "SETTINGS", src: settingsIcon, alt: "Settings Icon" },
  ];

  return (
    <footer className="fixed bottom-0 w-full flex justify-center gap-[10vw] bg-[#080808] p-4 h-[7vh]">
      {footerIcons.map(({ label, src, alt }) => (
        <button
          key={label}
          className="cursor-pointer"
          onClick={() => handleClick(`${BASE_URL}${label.toLowerCase()}`)}
        >
          <img src={src} alt={alt} className="w-8 h-8" />
        </button>
      ))}

      {redirectUrl && <Redirect url={redirectUrl} />}
    </footer>
  );
};

export default Footer;
