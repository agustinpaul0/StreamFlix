import { motion } from "framer-motion";

interface AccountButtonProps {
  icon: string;
  title: string;
  onClick: () => void;
}

const AccountButton = ({ icon, title, onClick }: AccountButtonProps) => {
  return (
    <motion.button
      className="w-full h-16 bg-[#1E1E1E] flex items-center justify-start px-4 py-2 text-xl font-medium rounded-md text-[#FFFFFF]"
      whileTap={{ scale: 0.95 }}
      onClick={onClick} 
    >
      <img src={icon} alt={title} className="mr-3 w-8 h-8" />
      <span>{title}</span>
    </motion.button>
  );
};

export default AccountButton;