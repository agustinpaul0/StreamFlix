import Media from "../types/Media";

const MediaBanner: React.FC<{media: Media}> = ({ media }) => {
  const BANNER_URL = (media.backdrop_path)
    ? (`https://image.tmdb.org/t/p/w500${media.backdrop_path}`)
    : (`https://image.tmdb.org/t/p/w500${media.poster_path}`)

  return (
    <section className="h-100 w-full">
      <img src={BANNER_URL} alt="Backdrop" className="w-full h-full object-fill" />
    </section>
  );
};

export default MediaBanner;
