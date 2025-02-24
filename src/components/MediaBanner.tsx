import Media from "../types/Media";

interface MediaBannerProps {
  media: Media;
}

const MediaBanner: React.FC<MediaBannerProps> = ({ media }) => {
  const BANNER_URL = `https://image.tmdb.org/t/p/w500${media.backdrop_path}`;

  return (
    <section className="h-full w-full max-h-[30vh]">
      <img src={BANNER_URL} alt="Backdrop" className="max-h-[50vh] w-full h-full object-fill" />
    </section>
  );
};

export default MediaBanner;
