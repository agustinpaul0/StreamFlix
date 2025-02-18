import home from "../assets/img/home-icon.svg";
import user from "../assets/img/user-account-icon.svg";
import settings from "../assets/img/settings-icon.svg";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full flex justify-center gap-[10vw] bg-[#080808] p-4">
      <button className="cursor-pointer">
        <img src={home} alt="Home Icon" className="w-8 h-8" />
      </button>
      <button className="cursor-pointer">
        <img src={user} alt="User Account Icon" className="w-8 h-8" />
      </button>
      <button className="cursor-pointer">
        <img src={settings} alt="Settings Icon" className="w-8 h-8" />
      </button>
    </footer>
  );
};

export default Footer;
