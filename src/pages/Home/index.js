import logo from "../../img/logo.svg";
import './home.css';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="container" >
            <section className="identity" >
                <div className="logo" >
                    <img src={logo} alt="imagem_logo"/>
                </div>
                <div className="name_identity" >
                    <h1>Fábrício Choraes</h1>
                    <p>Coaching e mentoria</p>
                    <button>
                        Vamos Conversar?
                    </button>
                </div>
            </section>
            <section className="services" >
                <div className="services pilha " style={{backgroundColor: "#4db09e"}}  >
                    <h1>Executivo ou Empresarial</h1>
                    <p>
                    Dirigido às lideranças, visa dar apoio e orientação em um processo de desenvolvimento ou mudança. Através da busca de clareza, repensando e alinhando objetivos, é possível atingir uma visão mais estratégica e focar nas prioridades, para maior equilíbrio e melhoria dos resultados. Pode incluir o desenvolvimento de habilidades, como a liderança e a comunicação, melhor gestão do tempo e senso de propósito, entre outros
                    </p>
                    <Link>Saiba Mais</Link>
                </div>
                <div className="services pilha " >
                    <h1>Mentoria de Carreira</h1>
                    <p>
                    Apoia o profissional em busca de desenvolvimento ou na transição da sua carreira, promovendo autoconhecimento, clareza, foco e direcionamento. Através de um planejamento sob medida, metas e objetivos são definidos e validados, como também as principais etapas do caminho. Assim, você será capaz de ampliar a sua perspectiva e assumir o protagonismo da sua carreira, trabalhando também a sua empregabilidade. 
                    </p>
                    <Link>Saiba mais</Link>
                </div>
                <div className="services pilha " >
                    <h1>Coaching Vocacional</h1>
                    <p>
                    Destinado a jovens e adultos, em diferentes momentos da vida, seja na escolha, transição ou reinvenção de carreira, visa ampliar o autoconhecimento e explorar o leque de possibilidades, apoiando a busca de novos caminhos e oportunidades. A partir daí, você terá mais autoconfiança para uma tomada de decisão e para fazer o planejamento da sua carreira, de forma mais consciente e segura, reduzindo riscos e incertezas. 
                    </p>
                    <Link>Saiba mais</Link>
                </div>
                <div className='services pilha ' >
                    <h1>Mentoria de Negócios</h1>
                    <p>
                    Apoia e orienta o empreendedor ou empresário no planejamento e na gestão do seu projeto ou negócio. Um processo de reflexão sobre os objetivos, as estratégias e as competências necessárias para lidar com os desafios e ter sucesso. A partir daí, criamos um planejamento estruturado, estabelecendo prioridades e metas para aproveitar as oportunidades e mitigar as fraquezas, com foco e organização, enquanto  você entra em ação. 
                    </p>
                    <Link>Saiba Mais</Link>
                </div>
            </section>
        </div>
       
    )
}
export default Home;