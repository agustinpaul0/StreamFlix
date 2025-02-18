import useFetch from "../hooks/useFetch";
import getTrendingMovies from "../services/getTrendingMovies";

const TrendingMovies = () => {
  const apiUrl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const { data, loading, error } = useFetch(getTrendingMovies, apiUrl);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data?.results ? (
        data.results.map((movie: any) => <li key={movie.id} className="p-4">{movie.title}</li>)
      ) : (
        <div>No movies found.</div>
      )}
    </ul>
  );
};

export default TrendingMovies;
