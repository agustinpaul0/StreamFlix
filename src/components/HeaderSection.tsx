import Redirect from "./Redirect";
import { useState } from "react";

const HeaderSection = () => {
  const BASE_URL = "/streamflix/";
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  return (
    <>
      <section className="flex justify-between px-4 gap-3 mt-4">
        {["MOVIES", "SERIES"].map((label) => (
          <button
            type="button"
            key={label}
            className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer"
            onClick={() => setRedirectUrl(`${BASE_URL}${label.toLowerCase()}`)}
          >
            {label}
          </button>
        ))}
      </section>
      {redirectUrl && <Redirect url={redirectUrl} />}
    </>
  );
};

export default HeaderSection;
