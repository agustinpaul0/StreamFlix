const AddToMyListButton: React.FC<{ addToMyListIcon: string }> = ({ addToMyListIcon }) => {
  return (
    <button className="relative px-3 flex-grow text-[#FFFFFF] rounded-md overflow-hidden hover:bg-[#6F6F6F] cursor-pointer max-w-[50%] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#868181] opacity-75 rounded-md"></div>
      <span className="inline-flex items-center gap-2 relative">
        <img src={addToMyListIcon} alt="Add To My List Icon" />
        My List
      </span>
    </button>
  );
};

export default AddToMyListButton;