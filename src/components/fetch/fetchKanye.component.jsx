import { useEffect, useState } from 'react';
import axios from 'axios';
import { Blockquote, Button, Collapse } from '@mantine/core';

function CallKanye() {
  const url = 'https://api.kanye.rest';
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
  }, []);

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

  if (loadingKanye) console.log('Calling Kanye');

  if (errorKanye) console.log('Kanye was busy');
  return (
    <div>
      <span>💬"{kanyeQuote && kanyeQuote.quote}"</span>
      <button onClick={refetchKanye}>refetchKanye</button>
    </div>
  );
}

export default CallKanye;
