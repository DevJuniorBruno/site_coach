import './home.css';
import logo from "../../img/logo.svg";
import Mulher from '../../img/mulherIA.png';
import JovemEngenheira from '../../img/jovem_engenheira.png';
import Pessoaum from '../../img/pessoaum.png';
import Pessoadois from '../../img/pessoadois.png';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="container" >
            <section className="identity" >
                <div className="logo" >
                    <img src={logo} alt="imagem_logo"/>
                </div>
                <div className="name_identity" >
                    <h1>Fabiana Choraes</h1>
                    <p>Coaching e mentoria</p>
                    <Link to='/sobre' ><button className="buttonPersuasive" >
                        Vamos Conversar?
                    </button></Link>
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
                <div className="services pilha " style={{backgroundColor: "#e3d6d2"}} >
                    <h1>Mentoria de Carreira</h1>
                    <p>
                    Apoia o profissional em busca de desenvolvimento ou na transição da sua carreira, promovendo autoconhecimento, clareza, foco e direcionamento. Através de um planejamento sob medida, metas e objetivos são definidos e validados, como também as principais etapas do caminho. Assim, você será capaz de ampliar a sua perspectiva e assumir o protagonismo da sua carreira, trabalhando também a sua empregabilidade. 
                    </p>
                    <Link>Saiba mais</Link>
                </div>
                <div className="services pilha " style={{backgroundColor: "#948e99"}} >
                    <h1>Coaching Vocacional</h1>
                    <p>
                    Destinado a jovens e adultos, em diferentes momentos da vida, seja na escolha, transição ou reinvenção de carreira, visa ampliar o autoconhecimento e explorar o leque de possibilidades, apoiando a busca de novos caminhos e oportunidades. A partir daí, você terá mais autoconfiança para uma tomada de decisão e para fazer o planejamento da sua carreira, de forma mais consciente e segura, reduzindo riscos e incertezas. 
                    </p>
                    <Link>Saiba mais</Link>
                </div>
                <div className='services pilha 'style={{backgroundColor: "#e8eff1"}} >
                    <h1>Mentoria de Negócios</h1>
                    <p>
                    Apoia e orienta o empreendedor ou empresário no planejamento e na gestão do seu projeto ou negócio. Um processo de reflexão sobre os objetivos, as estratégias e as competências necessárias para lidar com os desafios e ter sucesso. A partir daí, criamos um planejamento estruturado, estabelecendo prioridades e metas para aproveitar as oportunidades e mitigar as fraquezas, com foco e organização, enquanto  você entra em ação. 
                    </p>
                    <Link>Saiba Mais</Link>
                </div>
            </section>
            <section className="purpose" >
                <div className='myPurpose' >
                    <h1>
                        Meu Propósito
                    </h1>
                    <p>
                        Fazer diferença na vida
                        das pessoas, apoiando-as em
                        uma jornada de autoconhecimento,
                        na potencialização dos seus talentos e
                        no desenvolvimento de suas habilidades.
                        Contribuir positivamente para uma
                        mudança desejada, uma importante
                        tomada de decisão
                        ou para a realização de um sonhado projeto, pensando em conjunto os possíveis
                        caminhos e as etapas necessárias ao sucesso.  
                        Gerar resultados sustentáveis por meio do aprendizado e da melhoria contínua.
                        Atuar com excelência e respeito,
                        aliando conhecimento especializado,
                        experiência qualificada e ética.
                    </p>
                </div>
                <div>
                    <img src={Mulher} alt="woman_business" />
                </div>
                <div className="about_me" >
                    <h1>Sobre mim</h1>
                    <p>
                    Psicóloga e mestre em Administração, construí minha carreira no mundo corporativo, nas áreas de recursos humanos e marketing. Apaixonada pelo conhecimento e comportamento humano, descobri no coaching uma poderosa metodologia de autodesenvolvimento e transformação, que gera excelentes resultados, comprovados por dezenas de clientes em busca de uma vida equilibrada e uma carreira com propósito e bem-sucedida. 
                    </p>
                </div>
            </section>
            <section className="results"  >
                <div className="texts" >
                    <h1>
                        Resultados
                    </h1>
                    <p>
                    Os benefícios do coaching e da mentoria são muitos e podem variar em função das necessidades individuais e dos desafios enfrentados no momento, sendo acima de tudo um processo de aprendizagem. Posso destacar como os principais resultados, relatados com maior frequência pelos meus clientes:
                    </p>
                </div>
               <section className="organization" >
                        <div className="numbers" >
                            <div className="number1" >
                                1.
                            </div>
                            <p>Autoconhecimento</p>
                        </div>
                        <div className="numbers" >
                            <div className="number2" >
                                2.
                            </div>
                            <p>Clareza e Foco</p>
                        </div>
                        <div className="numbers" >
                            <div className="number3" >
                                3.
                            </div>
                            <p>Planejamento e Ação</p>
                        </div>
                        <div className="numbers" >
                            <div className="number4" >
                                4.
                            </div>
                            <p>Desenvolvimento Pessoal</p>
                        </div>
                        <div className="numbers" >
                            <div className="number5" >
                                5.
                            </div>
                            <p>Autoestima e Autoconfiança</p>
                        </div>
               </section>
               <div>
                    <button className="buttonPersuasive" >
                    Vamos conversar?
                    </button>
               </div>
            </section>
            <section className="depoimentSection" >
                <h1>Depoimentos</h1>
                <div className="depoimentsContainer" >
                    <div className="depoiments" >
                        <div className="depoimentsImg" >
                            <img src={JovemEngenheira} alt="engenheira"  />
                        </div>
                        <div className="depoimentText" >
                            <h1>
                                SIBELY ROUSE
                            </h1>
                            <h2>
                                Engenheira, Inglaterra
                            </h2>
                            <p>
                                "O processo de coaching me surpreendeu positivamente. Foi possível desenvolver o autoconhecimento, ter clareza dos meus objetivos e traçar metas. E afirmo que esse resultado só foi possível devido à competência e à paciência da Alexandra durante as sessões. A experiência profissional dela é inspiradora também. Desde o nosso primeiro encontro eu percebi que ela tinha muito para me ensinar e, como sou engenheira, afirmo com dados e fatos que acertei na escolha! A minha maneira de enxergar e lidar com os desafios evoluiu. Mudei de país recentemente e, além de me direcionar profissionalmente, ela me ajudou na adaptação com a cultura e o novo ambiente de trabalho. Muito obrigada, Alexandra!" 
                            </p>
                        </div>
                    </div>
                     
                </div>
                <div className="depoimentsContainer" >
                    <div className="depoiments" >
                        <div className="depoimentsImg" >
                            <img src={Pessoaum} alt="engenheira"  />
                        </div>
                        <div className="depoimentText" >
                            <h1>
                                DIEGO COLOMBO
                            </h1>
                            <h2>
                                Engenheiro, Suiça
                            </h2>
                            <p>
                            "A Fabiana é uma profissional excelente. Muito alegre e atenta aos mínimos detalhes que são discutidos. Ela sempre busca algo novo para suportar as sessões com base no que foi conversado. Além disso, possui um grande conhecimento teórico dos assuntos e muitas ferramentas que suportam o processo. O Coaching me ajudou muito na identificação das minhas fortalezas e quais pontos preciso me desenvolver. Porém, o mais importante foi trabalharmos com o propósito e valores e, com base nisso, construir o meu futuro. Descobrir essa fundação é essencial para trilharmos o caminho para o nosso sucesso e felicidade profissional."
                            </p>
                        </div>
                    </div>
                     
                </div>

                <div className="depoimentsContainer" >
                    <div className="depoiments" >
                        <div className="depoimentsImg" >
                            <img src={Pessoadois} alt="engenheira"  />
                        </div>
                        <div className="depoimentText" >
                            <h1>
                                VANESSA LIMA
                            </h1>
                            <h2>
                                Jornalista, Alemanha
                            </h2>
                            <p>
                            "O coaching com a Alexandra foi fundamental para o meu momento de vida. Estava me sentindo perdida, havia dezenas de perguntas e não conseguia chegar às respostas. A principal delas era se eu estava na profissão certa. Tinha três áreas de interesse e, com a orientação da Alexandra, das ferramentas aplicadas e das pesquisas realizadas, eu tive clareza e segurança para escolher a área profissional a seguir. Também me orientou em relação aos próximos passos para a minha recolocação no mercado de trabalho e durante todo o processo Alexandra demonstrou paciência, dedicação, compreensão e seriedade. Estou agradecida por ter escolhido ela para ser minha coach e com os resultados do processo."
                            </p>
                        </div>
                    </div>
                </div>
                <Link to="/depoimentos">
                    <button className="buttonPersuasive" >
                            Veja Mais Clientes
                    </button>
                </Link>
            </section>
        </div>
       
    )
}
export default Home;