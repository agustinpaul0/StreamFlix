import { motion } from "framer-motion";
import HeaderButtonProps from "../types/HeaderButtonProps";

const HeaderButton = ({ label, onClick }: HeaderButtonProps) => {
  return (
    <motion.button
      type="button"
      className="p-3 flex-grow rounded-full border-2 border-[#000000] dark:border-[#ADADAD] cursor-pointer text-[#000000] dark:text-[#FFFFFF] font-medium"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

export default HeaderButton;