import {useState, useEffect} from 'react';

const useFetchURL = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useFetchURL;
