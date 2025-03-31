import { useEffect } from "react";
import ToggleButton from "../components/ToggleButton";

const SettingsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="flex justify-between items-center gap-4 p-4 bg-[#FFFFFF] text-[#000000] dark:bg-[#080808] dark:text-white">
      <span className="text-2xl font-medium">Dark Mode</span>
      <ToggleButton />
    </section>
  );
};

export default SettingsScreen;
