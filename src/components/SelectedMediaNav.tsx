import buttonBackIcon from "../assets/img/button-back-icon.svg";

interface SelectedMediaNavProps {
  onBack: () => void;
}

const SelectedMediaNav: React.FC<SelectedMediaNavProps> = ({ onBack }) => {
  return (
    <nav className="flex p-7 gap-3 items-center">
      <button
        type="button"
        className="fixed top-0 left-0 w-full p-4 gap-4 bg-[#080808] z-50 flex items-center"
        onClick={onBack}
      >
        <img src={buttonBackIcon} alt="Back" className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default SelectedMediaNav;
