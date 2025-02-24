const PlayButton: React.FC<{ playIcon: string; url: string }> = ({ playIcon, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="!bg-[#FFFFFF] p-4 text-black font-medium rounded-md hover:bg-gray-200 cursor-pointer flex flex-1 items-center justify-center"
      aria-label="Play Media"
    >
      <div className="flex items-center justify-center gap-3">
        <img src={playIcon} alt="" className="w-6 h-6" />
        <span>Play</span>
      </div>
    </a>
  );
};

export default PlayButton;
