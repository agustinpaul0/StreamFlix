import React from "react";
import useGenres from "../hooks/useGenres";
import play from "../assets/img/play-icon.svg";
import add from "../assets/img/add-icon.svg";
import mediaBannerAppLogo from "../assets/img/media-banner-app-logo.svg";
import Media from "../types/Media";

const FeaturedMediaCard: React.FC<{ media: Media }> = ({ media }) => {
  const { movieGenres, tvGenres } = useGenres();
  
  const getMediaGenres = (media: Media): string => {
    const genresMap = media.media_type === "movie" ? movieGenres : tvGenres;
    return media.genre_ids
      .map((genreId) => genresMap[genreId] || "Unknown")
      .join(" | ");
  };

  const BANNER_URL = `https://image.tmdb.org/t/p/w500${media.poster_path}`;

  return (
    <section className="relative flex flex-col justify-center p-4">
      <div className="shadow-[0_4px_10px_rgba(255,255,255,0.1)] w-full h-full border-t-2 border-l-3 border-r-3 rounded-tl-md rounded-tr-md border-[#FFFFFF]">
        <img
          src={BANNER_URL}
          alt="Banner Popular Media"
          className="object-fill max-h-[450px] w-full p-1"
        />
      </div>

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

        <h3 className="text-lg text-white text-center p-2">
          {getMediaGenres(media)}
        </h3>

        <div className="flex gap-4 w-full">
          <button className="bg-[#FFFFFF] flex-grow p-3 text-[#141414] rounded-md hover:bg-[#efe6e6e6] cursor-pointer max-w-[50%] flex items-center justify-center">
            <span className="inline-flex items-center gap-2">
              <img src={play} alt="Play Media Icon" />
              Play
            </span>
          </button>
          <button className="relative px-3 flex-grow text-[#FFFFFF] rounded-md overflow-hidden hover:bg-[#6F6F6F] cursor-pointer max-w-[50%] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#868181] opacity-75 rounded-md"></div>
            <span className="inline-flex items-center gap-2 relative">
              <img src={add} alt="Add To My List Icon" />
              My List
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMediaCard;
