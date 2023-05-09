import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

export const PrimeraParte = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div id="page2" style={{ padding: "20px", marginTop: "20px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px" }} data-aos="fade-right">HOLA MI AMOR ❤️</h1>
                <p data-aos="fade-right">En cada página de esta web encontrarás un pedacito de mi corazón que te pertenece desde hace 5 meses.

                    En este aniversario, mi regalo para ti es esta web, donde te demostraré cada día lo mucho que te amo.

                    Es mi forma de decirte que eres la persona más importante en mi vida desde que llegaste.

                </p>


                <img src="https://i.pinimg.com/originals/2d/13/97/2d139750db1e955f541629abedff550e.gif" alt="" style={{ width: "100%", marginTop: "50px" }} />
                <a href="#page3" className='axd'> Da Clik Aqui</a>
            </div>
            <div id="page3" style={{ padding: "20px", marginTop: "20px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px" }} data-aos="fade-right">Desde que llegaste a mi vida, todo es más bonito y tiene más sentido</h1>
                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "20px" }}>
                    <img src="./img/foto12.jpeg" alt="" style={{ width: "150px", borderRadius: "20px", height: "250px" }} />
                    <p>Eres mi sol en los días más oscuros, mi luz en los momentos de duda y mi alegría en los días más tristes.</p>
                </article>

                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "20px", marginTop: "20px" }}>
                    <img src="./img/foto13.jpeg" alt="" style={{ width: "100%", borderRadius: "20px", height: "150px" }} />
                </article>
                <p style={{ marginTop: "10px" }}>Contigo he aprendido lo que significa el verdadero amor y gracias a ti, soy una persona más completa.</p>
                <a href="#page4" className='axd'> Da Clik Aqui</a>
            </div>
            <div id="page4" style={{ padding: "20px", marginTop: "20px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px" }} data-aos="fade-right"> Gracias por ser mi compañera, mi confidente y mi mejor amiga. No podría imaginar mi vida sin ti.</h1>
                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "20px" }}>
                    <img src="./img/foto14.jpeg" alt="" style={{ width: "100%", borderRadius: "20px", height: "150px" }} />
                </article>

                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "10px" }}>
                    <img src="./img/foto15.jpeg" alt="" style={{ width: "70%", borderRadius: "20px", height: "250px", margin: "auto", marginTop: "10px"}} />
                </article>

                <a href="#page5" className='axd'> Da Clik Aqui</a>
            </div>
            <div id="page5" style={{ padding: "20px", marginTop: "20px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px" }} data-aos="fade-right">Te amo Angie y se que aun tengo mucho que aprender del amor, pero quiero aprenderlo contigo, aun tengo  muchos defectos e inseguridad que tengo que mejorar, pero quiero mejorarlos contigo, aun no alcanzo mi mejor version, pero quiero que seas tu quien la disfrute. Aun quedan muchas cosas por vivir y quiero vivirlas contigo</h1>

<img src="https://media.tenor.com/VH7aJHXUSW0AAAAM/cute.gif" alt="" />

            </div>
        </>
    )
}