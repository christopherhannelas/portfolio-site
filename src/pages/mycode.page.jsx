import React from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';
import { motion } from 'framer-motion';

import CodeContent from '../components/code-content/code-content.component';

function MyCode() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <CodeContent />
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

export default MyCode;
