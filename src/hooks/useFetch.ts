import { useState, useEffect } from "react";

const useFetch = <T>(serviceFunction: (url: string) => Promise<T>, url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await serviceFunction(url);
        setData(result);
      } catch (e: any) {
        setError(e?.message || "Unknown error while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [serviceFunction, url]);

  return { data, loading, error };
};

export default useFetch;
