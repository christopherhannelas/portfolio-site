import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Blockquote } from '@mantine/core';

import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import './kanye.styles.css';

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
    <div className='kanyeCall'>
      <Box className='specsBox'>
        <Paper elevation={6}>
          <h3>Kanye West Quote Generator</h3>
          <div className='specs'>
            <span>API call to https://api.kanye.rest via Axios</span>
          </div>
        </Paper>
      </Box>

      <Blockquote className='quotebox' cite='– Kanye West' icon={null}>
        💬"{kanyeQuote && kanyeQuote.quote}"
      </Blockquote>
      <button className='fctBtn' onClick={refetchKanye}>
        <span>Call Ye again</span>
        <PermPhoneMsgOutlinedIcon sx={{ fontSize: 15 }} />
      </button>
    </div>
  );
}

export default CallKanye;
