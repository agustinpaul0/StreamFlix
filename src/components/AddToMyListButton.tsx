const AddToMyListButton = ({ addToMyListIcon }: { addToMyListIcon: string }) => {
  return (
    <button
      type="button"
      className="relative p-4 text-[#FFFFFF] rounded-md overflow-hidden hover:bg-[#6F6F6F] cursor-pointer flex flex-1 items-center justify-center"
    >
      <div className="absolute inset-0 bg-[#868181] opacity-75 rounded-md"></div>
      <span className="inline-flex items-center gap-3 relative">
        <img
          src={addToMyListIcon}
          alt="Add To My List Icon"
          className="w-6 h-6"
        />
        My List
      </span>
    </button>
  );
};

export default AddToMyListButton;
