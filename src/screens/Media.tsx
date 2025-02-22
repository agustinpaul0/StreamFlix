import { useSelectedMedia } from "../context/SelectedMediaContext";

const Media: React.FC = () => {
  const { selectedMedia } = useSelectedMedia();
  const BANNER_URL = selectedMedia
    ? `https://image.tmdb.org/t/p/w500${selectedMedia.poster_path}`
    : undefined;

  return (
    <>
      <section className="h-full w-full">
        {
          <img
            src={BANNER_URL}
            alt="Backdrop"
            className="w-full h-full object-fill"
          />
        }
      </section>
    </>
  );
};

export default Media;
