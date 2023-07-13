import './footer.css';
import {Link}  from 'react-router-dom';
import React, { useRef, useLayoutEffect } from 'react';


function Footer(){

    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const scrollToFooter = () => {
          if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        };
    
        const hash = window.location.hash;
    
        if (hash === '#footer') {
          scrollToFooter();
        }
      }, []);

    return(
        <section className='footer' ref={footerRef} id="footer" >
        <div className="footerContainer" >
            <div className='footerInfo' >
                <ul>
                    <li>Experiência e Confiana</li>
                    <li>Compromisso com Resultados</li>
                    <li>
                        Atendimento Online
                    </li>
                    <li>
                        Ebook Personaizado
                    </li>
                </ul>
                <p>
                Para mais informações sobre como o coaching e a mentoria podem ajudar você ou a sua empresa a avançar mais rápido, preencha seus dados, ou envie um e-mail, que em breve retornarei o contato. Será um prazer falar com você!
                </p>
            </div>
            <div className="contactForm" >
                <input placeholder="Nome" >
                </input>
                <input placeholder='email' ></input>
                <input placeholder='assunto' ></input>
                <input placeholder='telefone' ></input>
                <textarea   placeholder="Assunto" ></textarea>
                <Link>Enviar</Link>
            </div>
        </div>
        <section>
        <section className='copyright' >
        © 2023 by Bruno Rosa. Todos os direitos reservados.
        </section>
        </section>
        
        </section>
                
    )
}

export default Footer;