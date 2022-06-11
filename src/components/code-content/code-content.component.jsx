import React from 'react';
// import useFetch from '../fetch/fetch.component';
import useFetchKanye from '../fetch/fetchKanye.component';
import { Blockquote, Button } from '@mantine/core';
import './code-content.style.css';

function CodeContent() {
  /*KanyeWest API -start-*/
  const { kanyeQuote, loadingKanye, errorKanye, refetchKanye } = useFetchKanye(
    'https://api.kanye.rest'
  );

  if (loadingKanye) console.log('Calling Kanye');

  if (errorKanye) console.log('Kanye was busy');
  /*KanyeWest API -end-*/
  return (
    <div className=' codeBox'>
      <div className=''>
        {/* Kanye API -output- */}
        {kanyeQuote && (
          <Blockquote cite='–Kanye West' icon=''>
            💬"{kanyeQuote.quote}"
          </Blockquote>
        )}

        <Button
          variant='subtle'
          radius='lg'
          color='gray'
          compact
          onClick={refetchKanye}
          leftIcon=''
        >
          Another one?
        </Button>
        {/* Kany API -output- */}
      </div>

      <div className=''>
        <p>
          Dapibus ultrices in iaculis nunc sed augue. Vitae auctor eu augue ut.
          Tempor nec feugiat nisl pretium fusce id velit ut. Purus faucibus
          ornare suspendisse sed nisi lacus sed viverra. Integer feugiat
          scelerisque varius morbi enim. Tellus pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras. Amet facilisis magna etiam tempor orci eu
          lobortis elementum nibh. Integer vitae justo eget magna fermentum
          iaculis eu. Eu consequat ac felis donec. Egestas fringilla phasellus
          faucibus scelerisque. Vestibulum lorem sed risus ultricies tristique
          nulla. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus
          urna neque. Pharetra convallis posuere morbi leo. Ullamcorper sit amet
          risus nullam eget felis. Et magnis dis parturient montes nascetur
          ridiculus mus. Aliquet porttitor lacus luctus accumsan tortor. Aliquam
          sem et tortor consequat id porta nibh venenatis cras. Posuere lorem
          ipsum dolor sit amet. Tempor nec feugiat nisl pretium. Venenatis cras
          sed felis eget velit aliquet. Tortor at risus viverra adipiscing at in
          tellus. Arcu dictum varius duis at consectetur lorem donec. Massa
          tempor nec feugiat nisl pretium fusce id velit. Erat pellentesque
          adipiscing commodo elit at imperdiet dui. Feugiat nibh sed pulvinar
          proin gravida hendrerit. Massa vitae tortor condimentum lacinia quis
          vel eros. Penatibus et magnis dis parturient montes nascetur ridiculus
          mus. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare.
        </p>
      </div>
      <div className=''>
        <p>
          Volutpat blandit aliquam etiam erat. Feugiat scelerisque varius morbi
          enim nunc faucibus. Ultrices sagittis orci a scelerisque purus semper.
          Platea dictumst quisque sagittis purus sit amet volutpat consequat
          mauris. Sapien nec sagittis aliquam malesuada bibendum arcu vitae.
          Cursus sit amet dictum sit amet justo donec enim diam. Nisl tincidunt
          eget nullam non nisi est sit. Sapien eget mi proin sed libero enim sed
          faucibus. At tellus at urna condimentum mattis. Dictum fusce ut
          placerat orci nulla pellentesque dignissim enim. Nisl nunc mi ipsum
          faucibus. Proin sagittis nisl rhoncus mattis rhoncus urna neque
          viverra justo. Fermentum odio eu feugiat pretium nibh ipsum consequat
          nisl vel. Sodales neque sodales ut etiam sit amet. Iaculis at erat
          pellentesque adipiscing commodo elit at.
        </p>
      </div>
    </div>
  );
}

export default CodeContent;
