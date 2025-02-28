import { FallbackProps } from "react-error-boundary";

const OperationFailedScreen = ({ error }: FallbackProps) => {
  console.log("Caught error: ", error);
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#080808] overflow-hidden">
      <div className="flex items-center justify-center gap-1 text-[#FF0000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        <h1 className="text-6xl">Ups!</h1>
      </div>
      <h2 className="text-2xl text-[#FFFFFF]">Something went wrong</h2>
      <h3 className="text-lg text-[#FFFFFF]">Check error on console</h3>
    </section>
  );
};

export default OperationFailedScreen;