import CrewMember from "../types/CrewMember";

const MediaDirectorList = ({ directors }: { directors: CrewMember[] }) => {
  if (directors.length === 0) return null;

  return (
    <>
      <h2 className="text-center mt-10 text-2xl">Director</h2>
      <ul className="text-center">
        {directors.map((director) => (
          <li
            key={director.id}
            className="font-semibold text-[#827E7E] text-xl"
          >
            {director.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MediaDirectorList;