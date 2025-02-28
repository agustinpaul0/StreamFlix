import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import OperationFailed from "./OperationFailed";
import Splash from "./Splash";

const FooterLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={OperationFailed}>
      <Suspense fallback={<Splash />}>
        <Outlet />
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
};

export default FooterLayout;
