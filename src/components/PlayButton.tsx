import { useEffect, useState } from "react";
import Redirect from "./Redirect";

const PlayButton: React.FC<{ playIcon: string }> = ({ playIcon }) => {
  const PLAY_MEDIA_SCREEN_URL = "/streamflix/play";
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const handleClick = (url: string) => {
    setRedirectUrl(url);
  };

  useEffect(() => {
    setRedirectUrl(null);
  }, [redirectUrl]);

  return (
    <>
      <button
        className="bg-[#FFFFFF] flex-grow p-3 text-[#141414] rounded-md hover:bg-[#efe6e6e6] cursor-pointer max-w-[50%] flex items-center justify-center"
        onClick={() => handleClick(`${PLAY_MEDIA_SCREEN_URL}`)}
      >
        <span className="inline-flex items-center gap-2">
          <img src={playIcon} alt="Play Media Icon" />
          Play
        </span>
      </button>
      {redirectUrl && <Redirect url={redirectUrl} />}
    </>
  );
};

export default PlayButton;
