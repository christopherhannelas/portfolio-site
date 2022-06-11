import React from 'react';

import HomeContent from '../components/home-content/home-content.component';
import Footer from '../components/footer/footer.component';

import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';
import { motion } from 'framer-motion';

function Home() {
  const titleAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,

      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.8,

        duration: 0.8,
      },
    },
  };
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <HomeContent titleAnimation={titleAnimation} />
      <Footer titleAnimation={titleAnimation} />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition='slide-up' mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              variant='light'
              color='gray'
              radius='lg'
              size='xs'
              rightIcon='👆'
              style={transitionStyles}
              onClick={() => scrollTo({ y: 950 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </motion.div>
  );
}

export default Home;
