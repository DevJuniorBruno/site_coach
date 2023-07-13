import './sobre.css';
import SobreMim from '../../img/sobremim.jpg';

function Sobre(){
    return(
        <div className="container">
            <h1>Sobre Alexandra</h1>
            <div className="containerSection" >

                <div className='divisionleft'>
                    <img src={SobreMim}  alt='mulher-com-mike'/>
                </div>

                <div className='sobreText'  >
                    <p>
                    Desde cedo, sempre tive uma forte inclinação para ajudar os outros a superarem obstáculos e descobrirem seu propósito de vida. Aos 16 anos, percebi meu interesse pelo coaching enquanto lia um livro motivacional que mudou minha perspectiva e me inspirou a buscar uma carreira nessa área fascinante.
                    Determinada a adquirir conhecimentos sólidos e habilidades práticas, mergulhei em cursos de coaching, psicologia positiva e desenvolvimento pessoal. Essa combinação de conhecimento teórico e experiência prática me proporcionou as ferramentas necessárias para ajudar meus clientes a se tornarem protagonistas de suas próprias jornadas.
                    </p>
                </div>
           
            </div>

            <section className='sectionText'  >
                <p>
            Ao longo dos anos, tive a oportunidade de trabalhar com uma ampla gama de pessoas, incluindo profissionais em busca de crescimento de carreira, empreendedores que desejavam impulsionar seus negócios e indivíduos que buscavam melhorar sua qualidade de vida. A cada sessão de coaching, experimentei uma imensa gratidão ao ver meus clientes se transformarem, encontrando clareza, confiança e motivação para atingir seus objetivos.
                </p>

            <p>
            Além do trabalho individual com meus clientes, também descobri uma paixão pelas palestras motivacionais. Acredito que o compartilhamento de conhecimento e experiências pode ter um impacto poderoso e inspirador nas vidas das pessoas. Ao longo dos anos, tive a oportunidade de palestrar em eventos corporativos, conferências e instituições de ensino, compartilhando insights valiosos sobre autoconhecimento, liderança, resiliência e desenvolvimento pessoal.    
            </p>

            
            <p>
            Minhas palestras são marcadas pela minha abordagem empática e inspiradora, combinada com histórias pessoais de superação e aprendizado. Tenho o compromisso de ajudar o público a despertar seu potencial, incentivando-os a abraçar a mudança, enfrentar desafios de cabeça erguida e criar vidas significativas e autênticas.
            </p>

            <p>
            Acredito que o coaching vai além de uma profissão; é uma verdadeira vocação. Sinto-me honrada e privilegiada por ter a oportunidade de guiar, apoiar e inspirar aqueles que buscam o crescimento pessoal e profissional. Meu objetivo é capacitar as pessoas a descobrirem seu propósito, superarem limitações e criarem uma vida repleta de realização e felicidade.
            </p>

            
            </section>

        </div>
    )
}

export default Sobre;