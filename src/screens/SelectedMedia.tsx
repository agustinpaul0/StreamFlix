import Footer from "../components/Footer";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import logo from "../assets/img/logo.svg";
import Movie from "../types/Movie";
import Media from "../types/Media";
import { getMediaTrailer } from "../utils/mediaUtils";

const isMovie = (media: Media): media is Movie => {
  return "video" in media;
};

const SelectedMedia: React.FC = () => {
  const { selectedMedia } = useSelectedMedia();

  if (!selectedMedia) return <></>;

  const BANNER_URL = `https://image.tmdb.org/t/p/w500${selectedMedia.poster_path}`;
  const mediaTitle = isMovie(selectedMedia)
    ? selectedMedia.title
    : selectedMedia.name;

  const { data: trailer } = getMediaTrailer(selectedMedia);

  return (
    <>
      <section className="h-full w-full max-h-[50vh]">
        <img src={BANNER_URL} alt="Backdrop" className="max-h-[50vh] w-full h-full object-fill" />
      </section>
      <h3 className="text-2xl font-medium mb-2">{mediaTitle}</h3>
      <img src={logo} alt="App Logo" />
      {trailer ? (
        <a href={trailer} target="_blank" rel="noopener noreferrer">
          Ver Trailer
        </a>
      ) : (
        <p>No hay trailer disponible</p>
      )}
      <Footer />
    </>
  );
};

export default SelectedMedia;
