import { Outlet } from "react-router-dom";
import SearchLayoutNavBar from "../components/SearchLayoutNavBar";

const SearchLayout = () => {
  return (
    <>
      <SearchLayoutNavBar />
      <main className="flex flex-col flex-grow bg-[#080808] text-[#FFFFFF] font-family-inter pt-[70px] pb-[6vh]">
        <Outlet />
      </main>
    </>
  );
};

export default SearchLayout;