import Redirect from "./Redirect";
import { useEffect, useState } from "react";

const HeaderNav = () => {
  const BASE_URL = "/streamflix/";
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const handleClick = (url: string) => {
    setRedirectUrl(url);
  };

  useEffect(() => {
    setRedirectUrl(null);
  }, [redirectUrl]);

  return (
    <>
      <section className="flex justify-between px-4 gap-3 mt-4">
        {["MOVIES", "SERIES"].map((label) => (
          <button
            key={label}
            className="p-3 flex-grow rounded-full border-2 border-[#ADADAD] hover:bg-[#151515c5] cursor-pointer"
            onClick={() => handleClick(`${BASE_URL}${label.toLowerCase()}`)}
          >
            {label}
          </button>
        ))}
      </section>
      {redirectUrl && <Redirect url={redirectUrl} />}
    </>
  );
};

export default HeaderNav;
