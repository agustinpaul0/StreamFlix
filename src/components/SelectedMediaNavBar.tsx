import buttonBackIcon from "../assets/img/button-back-icon.svg";

interface SelectedMediaNavProps {
  onBack: () => void;
}

const SelectedMediaNavBar: React.FC<SelectedMediaNavProps> = ({ onBack }) => {
  return (
    <nav className="fixed top-0 left-0 flex gap-3 items-center z-40 w-full  bg-[#080808] h-15">
      <button
        type="button"
        className="flex items-center flex-1 p-4"
        onClick={onBack}
      >
        <img src={buttonBackIcon} alt="Back" className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default SelectedMediaNavBar;
