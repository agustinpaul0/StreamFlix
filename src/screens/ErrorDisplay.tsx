// Error.tsx
import { FallbackProps } from "react-error-boundary";

const ErrorDisplay = ({ error }: FallbackProps) => {
  console.log(error);
  return (
    <div className="flex items-center justify-center h-screen bg-[#080808] text-red-500 flex-col overflow-hidden">
      <h1 className="text-6xl">Ups!</h1>
      <h2 className="text-2xl">Something went wrong</h2>
    </div>
  );
};

export default ErrorDisplay;
