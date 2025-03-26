import playIcon from "../assets/img/play-icon.svg";
import mediaBannerAppLogo from "../assets/img/media-banner-app-logo.svg";
import { 
  getMediaGenres, 
  getMediaTrailer 
} from "../utils/mediaUtils";
import Media from "../types/Media";
import useRedirect from "../hooks/useRedirect";
import MyListButton from "./MyListButton";
import PlayButton from "./PlayButton";
import noMediaPoster from "../assets/img/no-media-poster.svg";

const FeaturedMediaCard = ({ media }: { media: Media }) => {
  const MEDIA_SCREEN_URL = "/streamflix/media/selected";
  const BANNER_URL = media.poster_path
    ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
    : noMediaPoster;

  const handleRedirect = useRedirect();

  const { data: mediaGenres } = getMediaGenres(media);
  const { data: trailer } = getMediaTrailer(media);

  const imageClass = BANNER_URL === noMediaPoster ? "object-cover" : "object-fill";

  return (
    <>
      <section className="relative flex flex-col justify-center p-4">
        <button
          type="button"
          className="shadow-[0_4px_10px_rgba(255,255,255,0.1)] w-full h-full border-t-2 border-l-3 border-r-3 rounded-tl-md rounded-tr-md border-[#FFFFFF] hover:cursor-pointer"
          onClick={() => handleRedirect(`${MEDIA_SCREEN_URL}`)}
        >
          <img
            src={BANNER_URL}
            alt="Banner Popular Media"
            className={`${imageClass} max-h-[450px] w-full p-1`}
          />
        </button>

        <div className="shadow-[0_4px_10px_rgba(255,255,255,0.1)] p-3 bg-[#080808] border-b-3 border-l-3 border-r-3 rounded-bl-md rounded-br-md border-[#FFFFFF]">
          <div className="flex justify-center items-center gap-2">
            <img
              src={mediaBannerAppLogo}
              alt="Media Banner App logo"
              className="w-5 h-6"
            />
            <p className="text-[#FFFFFF] font-medium tracking-[0.2rem]">
              {media.media_type.toUpperCase()}
            </p>
          </div>

          <h3 className="text-lg text-white text-center p-2">{mediaGenres}</h3>

          {trailer ? (
            <div className="flex gap-2 w-full">
              <PlayButton playIcon={playIcon} url={trailer} />
              <MyListButton />
            </div>
          ) : (
            <div className="flex flex-col ">
              <h3 className="text-lg font-medium mb-2 text-[#FF0000] text-center">
                Sorry, we can't play this media right now.
              </h3>
              <MyListButton />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedMediaCard;