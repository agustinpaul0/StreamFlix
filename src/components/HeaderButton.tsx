import { motion } from "framer-motion";
import HeaderButtonProps from "../types/HeaderButtonProps";

const HeaderButton = ({ label, onClick }: HeaderButtonProps) => {
  return (
    <motion.button
      type="button"
      className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

export default HeaderButton;