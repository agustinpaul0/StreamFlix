import Media from "../types/Media";
import noMediaPoster from "../assets/img/no-media-poster.svg";

const MediaBanner = ({ media }: { media: Media }) => {
  const BANNER_URL = media.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${media.backdrop_path}`
    : media.poster_path
    ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
    : noMediaPoster;

  const imageClass = BANNER_URL === noMediaPoster ? "object-cover" : "object-fill";

  return (
    <section className="h-100 w-full">
      <img
        src={BANNER_URL}
        alt="Media Banner"
        className={`w-full h-full ${imageClass}`}
      />
    </section>
  );
};

export default MediaBanner;