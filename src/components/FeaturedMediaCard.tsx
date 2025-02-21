import playIcon from "../assets/img/play-icon.svg";
import addToMyListAIcon from "../assets/img/add-icon.svg";
import mediaBannerAppLogo from "../assets/img/media-banner-app-logo.svg";
import Media from "../types/Media";
import { getMediaGenres } from "../utils/mediaUtils";
import PlayButton from "./PlayButton";
import AddToMyListButton from "./AddToMyListButton";

const FeaturedMediaCard: React.FC<{ media: Media }> = ({ media }) => {
  const mediaGenres = getMediaGenres(media);
  const BANNER_URL = `https://image.tmdb.org/t/p/w500${media.poster_path}`;

  return (
    <section className="relative flex flex-col justify-center p-4">
      <button className="shadow-[0_4px_10px_rgba(255,255,255,0.1)] w-full h-full border-t-2 border-l-3 border-r-3 rounded-tl-md rounded-tr-md border-[#FFFFFF] hover:cursor-pointer">
        <img
          src={BANNER_URL}
          alt="Banner Popular Media"
          className="object-fill max-h-[450px] w-full p-1"
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

        <div className="flex gap-4 w-full">
          <PlayButton playIcon={playIcon} />
          <AddToMyListButton addToMyListIcon={addToMyListAIcon} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedMediaCard;