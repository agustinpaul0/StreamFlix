import { Outlet } from "react-router-dom";
import MediaLayoutNavBar from "../components/MediaLayoutNavBar";

const UserLayout = () => {
  return (
    <>
      <MediaLayoutNavBar />
      <main className="flex-1 bg-[#080808] text-[#FFFFFF] font-family-inter pt-[70px] mb-[7vh]">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;