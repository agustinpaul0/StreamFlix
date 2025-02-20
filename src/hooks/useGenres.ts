import { useEffect, useState } from "react";
import fetchGenres from "../utils/fetchGenres";

const useGenres = () => {
  const [movieGenres, setMovieGenres] = useState<Record<number, string>>({});
  const [tvGenres, setTvGenres] = useState<Record<number, string>>({});

  useEffect(() => {
    const loadGenres = async () => {
      setMovieGenres(await fetchGenres("movie"));
      setTvGenres(await fetchGenres("tv"));
    };

    loadGenres();
  }, []);

  return { movieGenres, tvGenres };
};

export default useGenres;