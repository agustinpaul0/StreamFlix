const HeaderNav = () => {
  return (
    <section className="flex justify-between px-4 gap-3 mt-4">
      {["CATEGORIES", "MOVIES", "SERIES"].map((label) => (
        <button
          key={label}
          className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer"
        >
          {label}
        </button>
      ))}
    </section>
  );
};

export default HeaderNav;