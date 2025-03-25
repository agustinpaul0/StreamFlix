import Media from "../types/Media";
import noMediaPoster from "../assets/img/no-media-poster.svg";

const MediaBanner = ({ media }: { media: Media }) => {
  let bannerUrl = (media.backdrop_path)
    ? (`https://image.tmdb.org/t/p/w500${media.backdrop_path}`)
    : (`https://image.tmdb.org/t/p/w500${media.poster_path}`)

  if (!media.backdrop_path && !media.poster_path) bannerUrl = noMediaPoster;

  return (
    <section className="h-100 w-full">
      <img src={bannerUrl} alt="Media Banner" className="w-full h-full object-cover" />
    </section>
  );
};

export default MediaBanner;