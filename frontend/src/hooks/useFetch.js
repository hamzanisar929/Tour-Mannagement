import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError("Failed to fetch!");
          alert("Failed to fetch!");
        }
        const result = await res.json();

        setData(result.data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
    setLoading(false);
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
