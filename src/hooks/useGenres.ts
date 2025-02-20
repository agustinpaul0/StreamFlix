import { useEffect, useState } from "react";
import { fetchGenres } from "../utils/fetchUtils";

const useGenres = () => {
  const [movieGenres, setMovieGenres] = useState<Record<number, string>>({});
  const [seriesGenres, setSeriesGenres] = useState<Record<number, string>>({});

  useEffect(() => {
    const loadGenres = async () => {
      setMovieGenres(await fetchGenres("movie"));
      setSeriesGenres(await fetchGenres("tv"));
    };

    loadGenres();
  }, []);

  return { movieGenres, seriesGenres };
};

export default useGenres;