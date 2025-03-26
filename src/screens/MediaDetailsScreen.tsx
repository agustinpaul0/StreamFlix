import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { 
  getMediaGenres, 
  isMovie, 
  getMediaCredits 
} from "../utils/mediaUtils";
import Media from "../types/Media";
import CrewMember from "../types/CrewMember";
import MediaGenresList from "../components/MediaGenresList";
import MediaCastList from "../components/MediaCastList";
import MediaDirectorList from "../components/MediaDirectorList";

const MediaDetailsScreen = () => {
  const { selectedMedia } = useOutletContext<{ selectedMedia: Media }>();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when first mounted
  }, []);

  const { data: mediaGenres } = getMediaGenres(selectedMedia);
  const genresToDisplay = mediaGenres.split("|").map((genre) => genre.trim());
  const { data: credits } = getMediaCredits(selectedMedia);

  const { cast, crew } = credits;
  const directors = crew.filter(
    (member: CrewMember) => member.job === "Director"
  );

  return (
    <>
      <h1 className="text-center pt-10">
        {isMovie(selectedMedia) ? selectedMedia.title : selectedMedia.name}
      </h1>
      <MediaDirectorList directors={directors} />
      <MediaGenresList genres={genresToDisplay || []} />
      <MediaCastList cast={cast} />
    </>
  );
};

export default MediaDetailsScreen;