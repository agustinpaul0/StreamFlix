import homeIcon from "../assets/img/home-icon.svg";
import userIcon from "../assets/img/user-account-icon.svg";
import settingsIcon from "../assets/img/settings-icon.svg";
import useRedirect from "../hooks/useRedirect";
import FooterButton from "./FooterButton";
import { ACCOUNT_SCREEN_URL, HOME_SCREEN_URL, SETTINGS_SCREEN_URL } from "../data/app-routes";

const Footer = () => {
  const handleRedirect = useRedirect();

  const footerIcons = [
    { label: "HOME", path: HOME_SCREEN_URL, icon: homeIcon, alt: "Home Icon" },
    { label: "ACCOUNT", path: ACCOUNT_SCREEN_URL, icon: userIcon, alt: "User Account Icon" },
    { label: "SETTINGS", path: SETTINGS_SCREEN_URL, icon: settingsIcon, alt: "Settings Icon" },
  ];

  return (
    <footer className="fixed bottom-0 flex justify-center gap-[10vw] bg-[#080808] w-screen p-4 flex-grow">
      {footerIcons.map((props) => (
        <FooterButton key={props.label} {...props} onClick={handleRedirect} />
      ))}
    </footer>
  );
};

export default Footer;