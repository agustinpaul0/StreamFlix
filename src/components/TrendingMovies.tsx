import useFetch from "../hooks/useFetch";
import getTrendingMovies from "../services/getTrendingMovies";
import MovieCard from "./MovieCard";

const TrendingMovies = () => {
  const apiUrl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const { data, loading, error } = useFetch(getTrendingMovies, apiUrl);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data.results.map((movie: any) => (
        <MovieCard
          key={movie.id}
          posterPath={movie.poster_path} 
        />
      ))}
    </>
  );
};

export default TrendingMovies;
