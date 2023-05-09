import 'animate.css';

import ConfettiGenerator from "confetti-js";
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { PrimeraParte } from './components/PrimeraParte';
function App() {
  useEffect(() => {
    const confettiSettings = {
      target: 'my-canvas'
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    return () => confetti.clear();

  }, []) // add the var dependencies or not
  return (
    <>

      <section className='principal'>
        <canvas id="my-canvas"></canvas>
        <article>
          <Typewriter
            options={{
              strings: ['Feliz Aniversario Amor', 'Te amo demasiado', "Gracias por llegar a mi Vida"],
              autoStart: true,
              loop: true,
            }}
          />
          <img src="https://i.pinimg.com/originals/3c/4c/9b/3c4c9bbafbb68491e8e785e0029d9ba9.gif" alt="" style={{ width: "100%" }} />
          <a href="#page2" className='axd'> Da Clik Aqui</a>
        </article>
        <PrimeraParte />
      </section>
    </>



  )
}

export default App


