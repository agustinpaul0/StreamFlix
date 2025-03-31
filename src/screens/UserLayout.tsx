import { Outlet } from "react-router-dom";
import MediaLayoutNavBar from "../components/MediaLayoutNavBar";

const UserLayout = () => {
  return (
    <>
      <MediaLayoutNavBar />
      <main className="flex flex-col flex-grow bg-[#FFFFFF] text-[#000000] dark:bg-[#080808] dark:text-[#FFFFFF] font-family-inter pt-[70px] mb-[7vh]">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;