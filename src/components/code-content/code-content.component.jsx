import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Modal, useMantineTheme, Code } from '@mantine/core';
import CallKanye from '../fetch/fetchKanye.component';
import KhaledQuotes from '../quotes/khaledQuotes.component';
import Davidgoggins from '../davidgoggins/davidgoggins.component';
import { AccordionItem } from '../accordion/accordion.component';
import { Accordion } from '../accordion/accordion.component';
import todolistpic from '../../assets/toDoList.png';
import websiteLogo from '../../assets/websiteLogo.png';
import './code-content.style.css';

function CodeContent(props) {
  const { codeTitleAnimation } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const codeForKanye = `function CallKanye() {
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
      <Blockquote cite='– Kanye West' icon={null}>
        💬"{kanyeQuote && kanyeQuote.quote}"
      </Blockquote>
      <button>
        Call Ye again
      </button>
    </div>
  );
}`;

  return (
    <div className=' codeBox'>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: false, amount: 0.2 }}
        variants={codeTitleAnimation}
      >
        <h1 className='codetitle'>MyCode.</h1>
      </motion.div>
      <h3 className='codesubTitle'>&gt;Projects and code practice.</h3>

      <u>Quote generaters and embed social media feed:</u>

      <div id='' className='accordionBox effect'>
        <Accordion defaultIndex='1' onItemClick={console.log}>
          <AccordionItem label='Kanye West' index='1'>
            <CallKanye />

            <Modal
              size='auto'
              opened={opened}
              onClose={() => setOpened(false)}
              withCloseButton={false}
              overlayColor={theme.colors.dark[9]}
              overlayOpacity={0.55}
              overlayBlur={1}
              overflow='outside'
              padding='0'
              transition='fade'
              transitionDuration='800'
            >
              <div>
                <Code className='screen' block>
                  <p>{codeForKanye}</p>
                </Code>
              </div>
            </Modal>
            <Button compact color='green' onClick={() => setOpened(true)}>
              Want to break the code?
            </Button>
          </AccordionItem>
          <AccordionItem label='Dj Khaled' index='2'>
            <KhaledQuotes />
          </AccordionItem>
          <AccordionItem label='David Goggins' index='3'>
            <Davidgoggins />
          </AccordionItem>
        </Accordion>
      </div>

      <div id='cardbox' className='effect'>
        <div className='todoTitle'>
          <h3 className='todosubTitle'>To do list 📋</h3>
        </div>
        <div className='todoPicture'>
          <img src={todolistpic} alt='ToDo Pic'></img>
        </div>
        <div className='projectdescription'>
          <p>
            🎯 It's a fully operational application which stores each task in a
            database (MangoDb/Mangoose) until it is done/delete by the user.
          </p>
          <p>
            💪 The user is able to create infinite new custom list via Express
            route parameter and is fully responsive.
          </p>
          <p>🤝 It was built in EJS and deploy on Heroku via Git commands.</p>
        </div>
        <div className='projectStack'>
          <div className='stackTitle'>
            <p>
              <u>Stack used :</u>
            </p>
          </div>
          <div className='stackdiv'>
            <p>
              ⤜NodeJs<br></br>
              ⤜Express<br></br>
              ⤜Body-parser <br></br>
              ⤜Ejs
            </p>
          </div>
          <div className='stackdiv'>
            <p>
              ⤞Lodash<br></br>
              ⤞Mongodb<br></br>
              ⤞Mongoose <br></br>
            </p>
          </div>
        </div>
        <div className='projectLink'>
          <p>
            <u>Here is the link to the application:</u>
          </p>

          <a
            href='https://arcane-bastion-35389.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='linkLogo'
              src={`${websiteLogo}`}
              alt='webSitelogo'
            ></img>
          </a>
        </div>
      </div>
      <div id='cardbox' className='effect'>
        <div className='projectTitle'>title</div>
        <div className='projectPicture'>Pic</div>
        <div className='projectdescription'>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className='projectStack'>stack</div>
        <div className='projectLink'>Link</div>
      </div>
    </div>
  );
}

export default CodeContent;
