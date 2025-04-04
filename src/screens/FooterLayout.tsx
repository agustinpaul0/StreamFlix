import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "../components/Footer";
import OperationFailedScreen from "./OperationFailedScreen";
import SplashScreen from "./SplashScreen";

const FooterLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={OperationFailedScreen}>
      <Suspense fallback={<SplashScreen />}>
        <div className="h-screen w-screen flex flex-col">
          <Outlet />
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default FooterLayout;