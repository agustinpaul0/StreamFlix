import logo from "../assets/img/logo.svg";
import playIcon from "../assets/img/play-icon.svg";
import addToMyListAIcon from "../assets/img/add-icon.svg";
import AddToMyListButton from "../components/AddToMyListButton";
import PlayButton from "../components/PlayButton";
import Movie from "../types/Movie";
import Media from "../types/Media";
import { getMediaTrailer } from "../utils/mediaUtils";

interface MediaDetailsProps {
  media: Media;
  onShowMore: () => void;
}

const isMovie = (media: Media): media is Movie => {
  return "video" in media;
};

const MediaDetails: React.FC<MediaDetailsProps> = ({ media, onShowMore }) => {
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
        <AddToMyListButton addToMyListIcon={addToMyListAIcon} />
      </div>
      <p className="text-base py-4">{media.overview}</p>
      <button type="button" className="py-4" onClick={onShowMore}>
        Show more...
      </button>
    </section>
  );
};

export default MediaDetails;
