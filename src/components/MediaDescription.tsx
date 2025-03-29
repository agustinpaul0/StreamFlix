import logo from "../assets/img/logo.svg";
import playIcon from "../assets/img/play-icon.svg";
import MyListButton from "./MyListButton";
import PlayButton from "./PlayButton";
import Media from "../types/Media";
import { 
  getMediaTrailer, 
  isMovie 
} from "../utils/mediaUtils";
import useRedirect from "../hooks/useRedirect";
import { useEffect } from "react";
import { SELECTED_MEDIA_DETAILS_SCREEN_URL } from "../data/app-routes";

const MediaDescription = ({ media }: { media: Media }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when first mounted
  }, []);

  const handleRedirect = useRedirect();

  const [mediaTitle, mediaReleaseDate] = isMovie(media)
    ? [media.title, media.release_date]
    : [media.name, media.first_air_date];
  const mediaReleaseYear = mediaReleaseDate.split("-")[0];

  const { data: trailer } = getMediaTrailer(media);

  return (
    <section className="p-2">
      <div className="flex items-center gap-2 py-1">
        <img src={logo} alt="Media Banner App logo" className="w-6 h-6" />
        <p className="text-[#FFFFFF] font-medium tracking-[0.2rem]">
          {media.media_type.toUpperCase()}
        </p>
      </div>
      <h2 className="text-4xl font-medium py-2">{mediaTitle}</h2>
      <h3 className="text-xl font-medium mb-2">{mediaReleaseYear}</h3>
      <div className="flex flex-col gap-2 w-full justify-center py-4">
        {trailer ? (
          <PlayButton playIcon={playIcon} url={trailer} />
        ) : (
          <h3 className="text-lg font-medium mb-2 text-[#FF0000] text-center">
            Sorry, we can't play this media right now.
          </h3>
        )}
        <MyListButton key="Media Description My List Button" />
      </div>
      <p className="text-base py-4">{media.overview}</p>
      <button type="button" className="py-4 text-[#827E7E]" onClick={() => handleRedirect(SELECTED_MEDIA_DETAILS_SCREEN_URL)}>
        Show more...
      </button>
    </section>
  );
};

export default MediaDescription;