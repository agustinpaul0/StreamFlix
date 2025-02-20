// Layout.tsx
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Splash from "./Splash";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorDisplay from "./ErrorDisplay"; 

const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorDisplay}>
      <Suspense fallback={<Splash />}>
        <NavBar />
        <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter pt-[70px] mb-[7vh]">
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Layout;
