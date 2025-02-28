import Redirect from "./Redirect";
import homeIcon from "../assets/img/home-icon.svg";
import userIcon from "../assets/img/user-account-icon.svg";
import settingsIcon from "../assets/img/settings-icon.svg";
import { useEffect, useState } from "react";

const Footer = () => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    setRedirectUrl(null);
  }, [redirectUrl]);

  const footerIcons = [
    { label: "HOME", path: "/streamflix/search/home",src: homeIcon, alt: "Home Icon" },
    { label: "ACCOUNT", path: "/streamflix/user/account", src: userIcon, alt: "User Account Icon" },
    { label: "SETTINGS", path: "/streamflix/user/settings", src: settingsIcon, alt: "Settings Icon" },
  ];

  return (
    <>
      <footer className="fixed bottom-0 w-full flex justify-center gap-[10vw] bg-[#080808] p-4 h-[7vh]">
        {footerIcons.map(({ label, path, src, alt }) => (
          <button
            type="button"
            key={label}
            className="cursor-pointer"
            onClick={() => setRedirectUrl(path)}
          >
            <img src={src} alt={alt} className="w-8 h-8" />
          </button>
        ))}
      </footer>
      {redirectUrl && <Redirect url={redirectUrl} />}
    </>
  );
};

export default Footer;
