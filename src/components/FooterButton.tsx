import { motion } from "framer-motion";
import FooterButtonProps from "../types/FooterButtonProps";

const FooterButton = ({ label, path, icon, alt, onClick }: FooterButtonProps) => {
  return (
    <motion.button
      type="button"
      className="cursor-pointer"
      onClick={() => onClick(path)}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <img src={icon} alt={alt} className="w-8 h-8" />
    </motion.button>
  );
};

export default FooterButton;