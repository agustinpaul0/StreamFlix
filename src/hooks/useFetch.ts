import { useState, useEffect } from "react";

const useFetch = <T>(serviceFunction: (url: string) => Promise<T>, url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await serviceFunction(url);
        setData(result);
      } catch (e: any) {
        setError(e?.message || "Unknown error while fetching data");
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useFetch;