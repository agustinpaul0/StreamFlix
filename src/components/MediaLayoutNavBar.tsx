import buttonBackIcon from "../assets/img/button-back-icon.svg";
import logo from "../assets/img/logo.svg";
import useRedirect from "../hooks/useRedirect";

const MediaLayoutNavBar = () => {
  const handleRedirect = useRedirect();

  return (
    <nav className="fixed top-0 left-0 flex gap-3 items-center z-40 w-full  bg-[#080808] h-15">
      <button
        type="button"
        className="flex items-center p-4"
        onClick={() => handleRedirect("../")}
      >
        <img src={buttonBackIcon} alt="Back" className="w-6 h-6" />
      </button>
      <img src={logo} className="w-7 h-7 mr-4 ml-auto flex items-center" alt="App Logo" />
    </nav>
  );
};

export default MediaLayoutNavBar;