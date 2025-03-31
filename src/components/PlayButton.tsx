import { motion } from "framer-motion";

const PlayButton = ({ playIcon, url }: { playIcon: string; url: string }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 items-center justify-center !bg-[#FFFFFF] p-4 text-[#000000] border-2 border-[#000000] font-medium rounded-md cursor-pointer"
      aria-label="Play Media"
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center justify-center gap-3">
        <img src={playIcon} alt="" className="w-6 h-6" />
        <span className="text-xl font-medium">Play</span>
      </div>
    </motion.a>
  );
};

export default PlayButton;