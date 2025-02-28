import { Outlet } from "react-router-dom";
import MainNavBar from "../components/MainNavBar";

const SearchLayout = () => {
  return (
    <>
      <MainNavBar />
      <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter pt-[70px] mb-[7vh]">
        <Outlet />
      </main>
    </>
  );
};

export default SearchLayout;
