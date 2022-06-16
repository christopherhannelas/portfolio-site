import React, { useEffect, useState } from 'react';
import './khaledQuotes.styles.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {
  Button,
  Modal,
  useMantineTheme,
  Code,
  Blockquote,
} from '@mantine/core';

function KhaledQuotes() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const codeForKhaled = `
   function KhaledQuotes() {
  const quotes = [
    'Always have faith. ALways have hope.',
    ...,
    'Another one.']
    const [khaledQuote, setKhaledQuote] = useState(null);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    setKhaledQuote(quotes[randomNum]);
  }, []);

  const AnotherOne = () => {
    const anotherRandomNum = Math.floor(Math.random() * quotes.length);
    setKhaledQuote(quotes[anotherRandomNum]);
  };

  return (
    <div >
     <Blockquote className='quotebox' cite='– Dj Khaled' icon={null}>
        💬"{khaledQuote}"
      </Blockquote>
      <Button onClick={AnotherOne}>
        Another one
      </Button>
    </div>
  );
}`;
  const quotes = [
    'Always have faith. ALways have hope.',
    'The key is to make it.',
    'Another one.',
    'Key to more success is clean heart and clean face.',
    'Smh they get mad when you have joy.',
    'Baby, you smart. I want you to film me taking a shower.',
    "You smart! You loyal! You're a genius.",
    'We go hard. In everything we do we’re going to accomplish our victory and our goal. If it takes a day, a year, or 20 years, we’re going to win. I haven’t taken a loss because everything I’ve done has been a working process to win. From being a kid on them turntables to becoming where I am is not a loss. It’s a blessing.',
    'Before I went into the studio with Jay Z, Jigga, Hov, I wanted to go to the Marcy Projects in Brooklyn and touch the people and touch the culture.',
    'Give thanks to the most high.',
    'They will try to close the door on u, just open it.',
    'They don’t want you to win. They don’t want you to have the No. 1 record in the country. They don’t want you get healthy. They don’t want you to exercise. And they don’t want you to have that view.',
    'I don’t have no favorite rock bands. I’m a fan of rock music though.',
    'I wanted to see what type of trees is growing in Marcy Projects, what type of water Jay Z was drinking.',
    'Those that weather the storm r the great ones.',
    'The key to more success is coco butter.',
    'I changed… a lot.',
    'My fans expect me to be greater and keep being great.',
    'They don’t want you to jet ski.',
    'Congratulations, you played yourself.',
    'You want my advice? Don’t play yourself.',
    'Another one, no. Another two, drop two singles at a time.',
    'I can deal with everything. I got the answer for anything. This DJ Khaled.',
    "The other day the grass was brown, now its green cuz I ain't give up. Never surrender.",
    'The key to more success is to have a lot of pillows.',
    'The key is to have every key. The key to open every door.',
    'Halls Cough Drops- When things get real, this is a major key to success.',
    'The key to success is Dove soap, Dove coco butter soap ',
    'You want my advice? Dont play yourself.',
    'The key to success is to trust me.',
    'Almond milk + cinnamon crunch = major key to success.',
    'They’ll try to close the door on you… Just open it.',
    'In life everyone has a choice. The key is- make a right choice.',
    'We have to get money. We have no choice. It cost money to eat.',
    'The key to more success is coco butter.',
    'You smart! You loyal! Youre a genius!',
    'They dont want you to win, they dont want you to have the No. 1 record in the country, they dont want you get healthy, they dont want you to exercise and they dont want you to have that view.',
    'They never said winning was easy.',
    'I know that I’ve been put on this Earth to make people happy, to inspire people, and to uplift people. That’s a beautiful thing.',
    'I can deal with everything. I got the answer for anything.',
    'The key is- never fold.',
    'Nicki Minaj, will you marry me?',
    'In life everyone has a choice. The major key is: make a right choice.',
    'When you stop making excuses and you work hard and go hard you will be very successful.',
    'Congratulations, you played yourself.',
    'The key is to drink coconut, fresh coconut, trust me.',
    'Major key, don’t fall for the trap, stay focused.',
    'Almond milk + cinnamon crunch = major key to success.',
    'It’s the ones closest to you that want to see you fail.',
    'Watch your back, but more importantly when you get out the shower, dry your back. Its a cold world out there.',
    "The key is to be honest. Be honest, but don't play yourself.",
    "The key is to enjoy life, because they don't want you to enjoy life.",
    "You do know it cost money to put a t-shirt on your back? You do know it cost money have a house? You do know it cost money to eat? Get money, don't let these people fool you.",
    'When you stop making excuses and you work hard and go hard you will be very successful.',
    'To succeed, you must believe. When you believe, you will succeed.',
    "Bless up.🙏🏾 Don't play yourself.",
    'One of my major keys is actually the master keys: God.',
    'I remember when I aint have a jacuzzi.',
    'Baby, you smart. I want you to film me taking a shower.',
    'Another one.',
    "I remember they used to tell me, they said, 'Khaled, you can't get a Rolls-Royce; you need to get one of them small ones.' So I went and bought a Phantom.",
    "I'm definitely gaining new fans, and that's the key of any success... gain more love.",
    "That's when you know you're the greatest: when you're the greatest, and people still put odds against you.",
    "I'm an entrepreneur. I'm a young mogul. I'm blessed.",
    'I put cocoa butter all over my face and my iconic belly and my arms and legs. Why live rough? Live smooth.',
    'A major key to more success is Dove cocoa butter soap.',
    'Congratulations, you played yourself.',
    'Its so real out here right now, the only reason why you see anything is cuz I got the flash on.',
    'They will try to close the door on you, just open it.',
    "They go'n try to stop you, they go'n try. Notice how I said true. We ain't never stopping.",
    'You gotta water your plants. Nobody can water them for you.',
    'All I do is WIN, WIN, WIN no matter what',
    'They dont want you to jet ski.',
    'Congratulations, you played yourself.',
    'The key to success is to keep your head above water',
    'Key to more success is a clean heart and a clean face.',
    'There will be roadblocks but we will overcome them.',
    'Working all winter shining all summer',
    'I can deal with everything. I got the answer for anything. This DJ Khaled.',
    'Some of the guys when they play, they try to keep it reality. Nah, I need the best everything.',
    'Learning is cool, knowing is better, and I know the key',
    'Follow code...feed ur family and keep ur face clean',
    'Ride wit me through the journey of more success',
    "When you win big and you win more, they're gonna sue you. Just counter sue them tho, don't back down.",
    'All the great ones Jetski',
    'Another one ... and ... another one!',
    'My full name is Khaled Mohamed Khaled. Yeah Khaled Khaled. When my mom first named me I said... another one.',
    'I changed a lot. Let me inspire you.',
    'Wise up. Rise up. Bless up.🙏🏾',
    'Fire. When you have a clean heart and a clean soul and a clean face you can walk through anything. Fire keep blazing.',
    'Life is like an elevator. Up, down, up, down...stay focused.',
    'Life is smooth. Some people want to live life rough and crazy. Live life smooth.',
    'The major key to success is a fresh cut.',
    'The key to success is getting a pedicure and a manicure once a week.',
    "Open the door yourself. They're not gonna open it for you.",
    'Never complain. Complain is a week emotion',
    "I remember when this tree was small. Now look at it. It's call growth. It's called being great.",
    'Enjoy your life man. These are my plants. I watch them enjoy life.',
    'Another one, no. Another two, drop two singles at a time.',
    'Congratulations, you played yourself.',
    'Them doors that was always closed, I ripped the doors off, took the hinges off.',
    'Always have faith. Always have hope.',
    'The key is to make it.',
    'We the best',
    'They never said it easy to win more 🙏🏾.',
    'Those that weather the storm are the great ones.',
    'Another one. Another one. Another one. Another one.',
    "When you work for these people, and you burn bridges and you play yourself, just know they're gonna fire you and you played yourself and burned a bridge.",
    'The minute we think we went hard, go harder. We gotta work.',
    'Major 🔑 have good relationships. Keep your face clean out there.',
    'They wanna come stress me out? Heh, bye 👋',
    'So important to keep the pathway of success clean',
    'Live smooth be smooth smell like success 🙏🏾.',
    'Trust me 🙏🏾.',
    "They don't want us all the way up 👆",
    "I've made a lot of mistakes in my life and this is just. Another one.",
    'Major 🔑 alert! Dont ever burn no bridge!!',
  ];
  const [khaledQuote, setKhaledQuote] = useState(null);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    setKhaledQuote(quotes[randomNum]);
  }, ['']);

  const AnotherOne = () => {
    const anotherRandomNum = Math.floor(Math.random() * quotes.length);
    setKhaledQuote(quotes[anotherRandomNum]);
  };

  return (
    <div className='kanyeCall'>
      <Box className='specsBox'>
        <Paper elevation={6}>
          <h3>DjKhaled Custom Quote Generator</h3>
          <div className='specs'>
            <span>
              Custom-made quote generator that gives you the "major keys 🔑" to
              success!
            </span>
          </div>
        </Paper>
      </Box>

      <Blockquote className='quotebox' cite='– Dj Khaled' icon={null}>
        💬"{khaledQuote}"
      </Blockquote>
      <Button variant='outline' color='dark' onClick={AnotherOne}>
        Another one
      </Button>
      <br></br>
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
            <p>{codeForKhaled}</p>
          </Code>
        </div>
      </Modal>
      <div className='codebtn'>
        <Button compact color='green' onClick={() => setOpened(true)}>
          Here's the code
        </Button>
      </div>
    </div>
  );
}

export default KhaledQuotes;
