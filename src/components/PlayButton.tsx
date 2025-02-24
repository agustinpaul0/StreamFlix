const PlayButton: React.FC<{ playIcon: string; url: string }> = ({ playIcon, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="!bg-[#FFFFFF] p-3 text-black font-medium rounded-md hover:bg-gray-200 cursor-pointer flex flex-1 items-center justify-center"
      aria-label="Play Media"
    >
      <img src={playIcon} alt="" className="w-6 h-6" /> 
      <span>Play</span>
    </a>
  );
};

export default PlayButton;
