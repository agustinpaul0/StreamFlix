import { Outlet } from "react-router-dom";
import logo from "../assets/img/logo.svg";

// Layout.tsx
const Layout = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex p-4 gap-4 bg-[#080808] z-50">
        <img src={ logo } alt="App Logo" />
        <input
          type="text"
          placeholder="Type a title, genre, or actor..."
          className="rounded-full bg-[#1E1E1E] text-[#827E7E] flex-grow pl-3"
        />
      </nav>

      <main className="min-h-screen bg-[#080808] text-white font-family-inter pt-[70px]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
