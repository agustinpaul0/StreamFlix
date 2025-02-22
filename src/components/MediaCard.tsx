import React, { useEffect, useState } from "react";
import Redirect from "./Redirect";
import Media from "../types/Media";
import { useSelectedMedia } from "../context/SelectedMediaContext";

const MediaCard: React.FC<{ media: Media }> = ({ media }) => {
  const MEDIA_SCREEN_URL = "/streamflix/media";
  const BANNER_URL = `https://image.tmdb.org/t/p/w500${media.poster_path}`;
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const { setSelectedMedia } = useSelectedMedia();

  const displayMediaScreen = (url: string, mediaToDisplay: Media) => {
    setSelectedMedia(mediaToDisplay);
    setRedirectUrl(url);
  };

  useEffect(() => {
    setRedirectUrl(null);
  }, [redirectUrl]);

  return (
    <>
      <button
        className="w-32 h-48 overflow-hidden rounded-md shadow-md flex-none hover:cursor-pointer"
        onClick={() => displayMediaScreen(`${MEDIA_SCREEN_URL}`, media)}
      >
        <img
          src={BANNER_URL}
          alt="Movie Banner"
          className="w-full h-full object-fill rounded-md"
        />
      </button>
      {redirectUrl && <Redirect url={redirectUrl} />}
    </>
  );
};

export default MediaCard;
