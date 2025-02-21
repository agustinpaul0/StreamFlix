const PlayButton: React.FC<{ playIcon: string }> = ({ playIcon }) => {
  return (
    <button className="bg-[#FFFFFF] flex-grow p-3 text-[#141414] rounded-md hover:bg-[#efe6e6e6] cursor-pointer max-w-[50%] flex items-center justify-center">
      <span className="inline-flex items-center gap-2">
        <img src={playIcon} alt="Play Media Icon" />
        Play
      </span>
    </button>
  );
};

export default PlayButton;
