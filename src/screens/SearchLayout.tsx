import { Outlet } from "react-router-dom";
import SearchLayoutNavBar from "../components/SearchLayoutNavBar";

const SearchLayout = () => {
  return (
    <>
      <SearchLayoutNavBar />
      <main className="flex flex-col flex-grow bg-[#FFFFFF] text-[#000000] dark:bg-[#080808] dark:text-[#FFFFFF] font-family-inter pt-[70px] pb-[6vh]">
        <Outlet />
      </main>
    </>
  );
};

export default SearchLayout;