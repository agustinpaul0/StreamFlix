import { useState } from "react";
import Redirect from "../components/Redirect";

const MediaDetails = () => {
  const [canRedirect, setCanRedirect] = useState(false);
  return (
    <div className="absolute inset-0 bg-[#080808] text-[#FFFFFF] flex flex-col items-center justify-center p-4 z-50">
      <button
        type="button"
        onClick={() => setCanRedirect(true)}>
        X
      </button>
      {canRedirect && <Redirect url={"../"}/>}
    </div>
  );
};

export default MediaDetails;
