import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchKanye(url) {
  const [kanyeQuote, setKanyeQuote] = useState(null);
  const [loadingKanye, setLoadingKanye] = useState(false);
  const [errorKanye, setErrorKanye] = useState(null);

  useEffect(() => {
    setLoadingKanye(true);
    axios
      .get(url)
      .then((response) => {
        setKanyeQuote(response.data);
      })
      .catch((err) => {
        setErrorKanye(err);
      })
      .finally(() => {
        setLoadingKanye(false);
      });
  }, [url]);

  const refetchKanye = () => {
    setLoadingKanye(true);
    axios
      .get(url)
      .then((response) => {
        setKanyeQuote(response.data);
      })
      .catch((err) => {
        setErrorKanye(err);
      })
      .finally(() => {
        setLoadingKanye(false);
      });
  };

  return { kanyeQuote, loadingKanye, errorKanye, refetchKanye };
}

export default useFetchKanye;
