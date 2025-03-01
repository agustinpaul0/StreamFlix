import CastMember from "../types/CastMember";
import noProfilePictureIcon from "../assets/img/no-profile-picture-icon.svg";

const MediaCastList = ({ cast }: { cast: CastMember[] }) => {
  return (
    <>
      <h2 className="text-center mt-10 text-2xl">Cast</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cast.map((actor) => (
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

export default MediaCastList;