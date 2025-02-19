import React from 'react';

const MovieCard: React.FC<{ posterPath: string }> = ({ posterPath }) => {
  const bannerUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
  return (
    <div className="w-32 h-48 overflow-hidden rounded-md shadow-md flex-none">
      <img
        src={bannerUrl}
        alt="Movie Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
