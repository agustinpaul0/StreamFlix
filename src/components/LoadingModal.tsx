import { motion } from "motion/react";

const LoadingModal = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center z-50"
  >
    <motion.div
      className="bg-[#FF0000] text-white p-8 rounded-2xl shadow-lg text-center"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <h2 className="text-3xl font-bold mb-4">Loading...</h2>
    </motion.div>
  </motion.div>
);

export default LoadingModal;