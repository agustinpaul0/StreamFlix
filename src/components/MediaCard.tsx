import React from "react";

const MovieCard: React.FC<{ posterPath: string }> = ({ posterPath }) => {

  const BANNER_URL = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <button className="w-32 h-48 overflow-hidden rounded-md shadow-md flex-none hover:cursor-pointer">
      <img
        src={BANNER_URL}
        alt="Movie Banner"
        className="w-full h-full object-fill rounded-md"
      />
    </button>
  );
};

export default MovieCard;
