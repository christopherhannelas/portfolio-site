import React from 'react';

import { motion } from 'framer-motion';
import ContactContent from '../components/contact-content/contact-content-component';

import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';

function Contact() {
  const contactTitleAnimation = {
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
      <ContactContent contactTitleAnimation={contactTitleAnimation} />
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
              onClick={() => scrollTo({ y: 500 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </motion.div>
  );
}

export default Contact;
