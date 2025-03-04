import { motion } from "framer-motion";

const LoadingModal = () => (
  <div className="flex justify-center items-center w-full h-full">
    <motion.div
      className="w-30 h-30 border-5 border-[#FF0000] border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  </div>
);

export default LoadingModal;