import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter pt-[70px] mb-[7vh]">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;