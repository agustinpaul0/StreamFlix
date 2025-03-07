import { useEffect, useState } from "react";
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
  const [genres, setGenres] = useState<string[] | null>(null);

  useEffect(() => {
    // This is because when the user clicks the show more button the scrollbar does not update itself
    window.scrollTo(0, 0);

    getMediaGenres(selectedMedia).then((genresString) => {
      setGenres(genresString.split("|").map((genre) => genre.trim()));
    });

  }, [selectedMedia]);

  const { data: credits } = getMediaCredits(selectedMedia);

  if (!credits) return <></>;

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
      <MediaGenresList genres={genres || []} />
      <MediaCastList cast={cast} />
    </>
  );
};

export default MediaDetailsScreen;