import axios from 'axios';

const getTrendingMovies = async (url: string) => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: 'application/json'
    }
  });
  return response.data;
};

export default getTrendingMovies;