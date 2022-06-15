import React, { useState } from 'react';
import Iframe from './fbIframe.component';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Modal, useMantineTheme, Code } from '@mantine/core';

export default function Davidgoggins() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const codeForGoggins = `function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
    />
  );
}
  export default function Davidgoggins() {
    const ref = {
    goggins:
      '<iframe src="https://www.facebook.com/plugins/page.php?href=...pId" width=... web-share"></iframe>',
  };
  return (
    <div>
      <Iframe iframe={ref['goggins']} />
      </div>)}`;
  const ref = {
    goggins:
      '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiamdavidgoggins&tabs=timeline&width=350&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
  };
  return (
    <div className='kanyeCall'>
      <Box className='specsBox'>
        <Paper elevation={6}>
          <h3>David Goggins Official Facebook Page Live Feed</h3>
          <div className='specs'>
            <span>
              Embed David Goggins facebook page live feed via an Iframe
              component.<br></br> If you don't know who David Goggins is then
              you are only using 20% of your full potential!
            </span>
          </div>
        </Paper>
      </Box>

      <Iframe iframe={ref['goggins']} />
      <br></br>
      <h6>
        The facebook live feed may not appear on some smartphone click{' '}
        <Button
          radius={10}
          size='xsm'
          color='dark'
          compact
          variant='subtle'
          href='https://www.facebook.com/iamdavidgoggins/'
        >
          here
        </Button>{' '}
        to see the page.
      </h6>
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
            <p>{codeForGoggins}</p>
          </Code>
        </div>
      </Modal>
      <div className='codebtn'>
        <Button compact color='green' onClick={() => setOpened(true)}>
          Want to see the code?
        </Button>
      </div>
    </div>
  );
}
