import search from "../assets/img/search-icon.svg";
import logo from "../assets/img/logo.svg";

const SearchLayoutNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex p-4 gap-4 bg-[#080808] z-40 h-21">
      <img src={logo} alt="App Logo" />
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Type a title, genre, or actor..."
          className="rounded-full bg-[#1E1E1E] text-[#827E7E] pl-3 w-full h-full border-2 flex-grow border-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-[#1E1E1E] text-white rounded-full focus:outline-none cursor-pointer"
        >
          <img src={search} alt="Search Icon" className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default SearchLayoutNavBar;