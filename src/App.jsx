import 'animate.css';
import { useEffect, useRef, useState } from 'react';
function App() {

  const [unicoBtn, setUnicoBtn] = useState(true)
  const [mostrar, setMostrar] = useState({
    estado1: false,
    estado2: false,
    estado3: false,
    estado4: false,
    estado5: false,
    estado6: false,
  })

  const cambiar = () => {
    setUnicoBtn(false)
    setMostrar({
      ...mostrar,
      estado1: true
    })
  }

  const comoestas = (valor) => {
    setMostrar({
      ...mostrar,
      ["estado" + (Number(valor) - 1)]: false,
      ["estado" + valor]: true
    })
  }

  return (

    <section className='contenedor'>
      {
        unicoBtn && <button onClick={cambiar} className='boton-Ini'>UNA HISTORIA 😊</button>
      }

      {
        mostrar.estado1 ? (
          <div className='animate__animated animate__backInLeft caja'>
            <div>
              "Érase una vez una chica hermosa que cambió mi vida para siempre."
            </div>
            <button onClick={() => comoestas("2")} className='hola'>SIGUIENTE</button>
          </div>
        ) : mostrar.estado2 ? (
          <div className='animate__animated animate__fadeInDownBig caja'>
            <div>"Desde el momento en que te vi, supe que serías alguien especial para mí."</div>
            <button onClick={() => comoestas("3")} className='hola'>SIGUIENTE</button>
          </div>
        ) : mostrar.estado3 ? (
          <div className='animate__animated animate__backInLeft caja'>
            <div>"Y así comenzó nuestra historia de amor, llena de risas, aventuras y mucho cariño."</div>
            <button onClick={() => comoestas("4")} className='hola'>SIGUIENTE</button>
          </div>
        ) : mostrar.estado4 ? (
          <div className='animate__animated animate__bounceInDown caja'>
            <div>"Cada día que pasa me enamoro más de ti y estoy agradecido por cada momento que compartimos juntos."</div>
            <button onClick={() => comoestas("5")} className='hola'>SIGUIENTE</button>
          </div>
        ) : mostrar.estado5 ? (
          <div className='animate__animated animate__fadeInDown caja'>
            <div>"Y sé que nuestro amor continuará creciendo y floreciendo a lo largo del tiempo, porque juntos podemos enfrentar cualquier desafío."</div>
            <button onClick={() => comoestas("6")} className='hola'>SIGUIENTE</button>
          </div>
        ) : mostrar.estado6 ? (
          <div className='animate__animated animate__lightSpeedInRight caja'>
            <div>"Te amo Angie y siempre te voy amar ❤️"</div>
            <img src="/img/FOTO.jpeg" alt="" height={400} style={{borderRadius: "20px", marginTop: "20px"}} />
          </div>
        ) : ("")
          
      }


    </section>


  )
}

export default App


