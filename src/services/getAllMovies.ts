import axios from "axios";
import Movie from "../types/Movie";

const getAllMovies = async (url: string) => {
  const TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const MAX_PAGES = 3;
  const allMoviesMap = new Map<number, Movie>();
  let page = 1;

  try {
    while (page <= MAX_PAGES) {
      const res = await axios.get(`${url}&page=${page}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          accept: "application/json",
        },
      });

      res.data.results.forEach((movie: Movie) => {
        allMoviesMap.set(movie.id, movie);
      });

      page++;
    }

    return Array.from(allMoviesMap.values());
  } catch (e) {
    console.error("Unexpected error while fetching all movies: ", e);
    throw e;
  }
};

export default getAllMovies;
