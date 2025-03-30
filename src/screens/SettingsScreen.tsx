import { useEffect } from "react";
import ToggleButton from "../components/ToggleButton";

const SettingsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex justify-between items-center bg-[#080808] text-white gap-4 p-4">
      <span className="text-2xl font-medium">Dark Mode</span>
      <ToggleButton />
    </div>
  );
};

export default SettingsScreen;
