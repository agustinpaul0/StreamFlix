const MediaGenresList = ({ genres }: { genres: string[] }) => {
  return (
    <>
      <h2 className="text-center mt-10 text-2xl">Genres</h2>
      <ul className="flex flex-col flex-wrap justify-center items-center gap-2 pt-2">
        {genres.map((genre, index) => (
          <li key={index} className="text-[#827E7E] rounded-md text-xl">
            {genre}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MediaGenresList;
