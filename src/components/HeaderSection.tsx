import useRedirect from "../hooks/useRedirect";

const HeaderSection = () => {
  const handleRedirect = useRedirect();

  return (
    <>
      <section className="flex justify-between px-4 gap-3 mt-4">
        {["MOVIES", "SERIES"].map((label) => (
          <button
            type="button"
            key={label}
            className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer"
            onClick={() => handleRedirect(`/streamflix/search/${label.toLowerCase()}`)}
          >
            {label}
          </button>
        ))}
      </section>
    </>
  );
};

export default HeaderSection;