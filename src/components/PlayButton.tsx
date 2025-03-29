import { motion } from "framer-motion";

const PlayButton = ({ playIcon, url }: { playIcon: string; url: string }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="!bg-[#FFFFFF] p-4 text-black font-medium rounded-md hover:bg-gray-200 cursor-pointer flex flex-1 items-center justify-center"
      aria-label="Play Media"
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center justify-center gap-3">
        <img src={playIcon} alt="" className="w-6 h-6" />
        <span className="text-xl">Play</span>
      </div>
    </motion.a>
  );
};

export default PlayButton;