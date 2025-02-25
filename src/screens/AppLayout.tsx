import { Outlet } from "react-router-dom";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import OperationFailed from "./OperationFailed";
import Splash from "./Splash";

const AppLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={OperationFailed}>
      <Suspense fallback={<Splash />}>
        <MainNavBar />
        <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter pt-[70px] mb-[7vh]">
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppLayout;