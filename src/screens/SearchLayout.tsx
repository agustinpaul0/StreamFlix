import { Outlet } from "react-router-dom";
import SearchLayoutNavBar from "../components/SearchLayoutNavBar";

const SearchLayout = () => {
  return (
    <>
      <SearchLayoutNavBar />
      <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter pt-[70px] mb-[7vh]">
        <Outlet />
      </main>
    </>
  );
};

export default SearchLayout;
