import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Splash from "./Splash";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter pt-[70px] mb-[7vh]">
        <Suspense fallback={<Splash />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
