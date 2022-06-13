import React from 'react';
import { motion } from 'framer-motion';
import CallKanye from '../fetch/fetchKanye.component';
import KhaledQuotes from '../quotes/khaledQuotes.component';

import { Blockquote, Button, Collapse } from '@mantine/core';

import './code-content.style.css';

function CodeContent(props) {
  const { codeTitleAnimation } = props;
  return (
    <div className=' codeBox'>
      <div className=''></div>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: false, amount: 0.2 }}
        variants={codeTitleAnimation}
      >
        <h1 className='codetitle'>MyCode.</h1>
      </motion.div>
      <h3 className='codesubTitle'>&gt;Get to know me through my code.</h3>

      <div>
        <div class='screen'>
          <p>
            function CallKanye❪❫ ❴ <br></br> const ⟦kanyeQuote, setKanyeQuote⟧ =
            useState❪null❫;<br></br>const ⟦loadingKanye, setLoadingKanye⟧ =
            useState❪false❫; const ⟦errorKanye, setErrorKanye⟧ = useState❪null❫;
            <br></br>
            useEffect❪❪❫ => ❴<br></br>
            setLoadingKanye❪true❫;<br></br>
            axios<br></br>
            .get❪url❫<br></br>
            .then❪❪response❫ ⇒ ❴<br></br>
            setKanyeQuote❪response.data❫;<br></br>
            }❫<br></br>
            .catch❪❪err❫ ⇒ ❴<br></br>
            setErrorKanye❪err❫;<br></br>
            ❵❫<br></br>
            .finally❪❪❫ ⇒ ❴<br></br>
            setLoadingKanye❪false❫;<br></br>
            ❵❫;<br></br>
            ❵, ⟦⟧❫;<br></br>
            <br></br>
            const refetchKanye = ❪❫ => ❴<br></br>
            setLoadingKanye❪true❫;<br></br>
            axios<br></br>
            .get❪url❫<br></br>
            .then❪❪response❫ ⇒ ❴<br></br>
            setKanyeQuote❪response.data❫;<br></br>
            ❵❫<br></br>
            .catch❪❪err❫ ⇒ ❴<br></br>
            setErrorKanye❪err❫;<br></br>
            ❵❫<br></br>
            .finally❪❪❫ ⇒ ❴<br></br>
            setLoadingKanye❪false❫;<br></br>
            ❵❫;<br></br>
            ❵;<br></br>
            <br></br>
            if ❪loadingKanye❫ console.log❪'Calling Kanye'❫;<br></br>
            if ❪errorKanye❫ console.log❪'Kanye was busy'❫;
          </p>
        </div>
      </div>

      <CallKanye />
      <KhaledQuotes />
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
