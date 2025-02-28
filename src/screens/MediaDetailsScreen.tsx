import { useOutletContext } from "react-router-dom";
import { getMediaGenres, isMovie } from "../utils/mediaUtils";
import { useEffect, useState } from "react";
import Media from "../types/Media";
import { getMediaCredits } from "../utils/mediaUtils";
import CrewMember from "../types/CrewMember";
import CastMember from "../types/CastMember";
import noProfilePictureIcon from "../assets/img/no-profile-picture-icon.svg";

const MediaDetailsScreen = () => {
  const { selectedMedia } = useOutletContext<{ selectedMedia: Media }>();
  const [genres, setGenres] = useState<string[] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    getMediaGenres(selectedMedia).then((genresString) => {
      setGenres(genresString.split("|").map((genre) => genre.trim()));
    });
  }, []);

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

      {directors.length > 0 && (
        <>
          <h2 className="text-center mt-15 text-2xl">Director</h2>
          <ul className="text-center">
            {directors.map((director: CrewMember) => (
              <li
                key={director.id}
                className="font-semibold text-[#827E7E] text-xl"
              >
                {director.name}
              </li>
            ))}
          </ul>
        </>
      )}

      <h2 className="text-center mt-15 text-2xl">Genres</h2>
      {genres && (
        <ul className="flex flex-col flex-wrap justify-center items-center gap-2 p-2">
          {genres.map((genre, index) => (
            <li
              key={index}
              className="text-[#827E7E] rounded-md text-xl"
            >
              {genre}
            </li>
          ))}
        </ul>
      )}

      <h2 className="text-center mt-15 text-2xl">Cast</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cast.map((actor: CastMember) => (
          <li key={actor.id} className="text-center flex flex-col items-center">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : noProfilePictureIcon
              }
              alt={actor.name}
              className="w-full h-auto aspect-[2/3] object-cover rounded-md"
            />
            <p className="font-semibold text-lg">{actor.name}</p>
            <p className="text-base text-[#827E7E]">{actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MediaDetailsScreen;
