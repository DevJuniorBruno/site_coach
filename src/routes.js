import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from  './pages/Sobre';
import MeuProposito from './pages/Meu-Propósito';
import CoachingExecutivo from './pages/Coaching-Executivo';
import CoachingVocacional from './pages/Coaching-Vocacional';
import MentoriaCarreira from './pages/Mentoria-Carreira';
import MentoriaNegocios from './pages/Mentoria-de-Negocios';
import Depoimentos from './pages/Depoimentos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';

function RoutesApp(){
    
    return(
    <BrowserRouter>

        <Header/>

        <WhatsAppButton/>

        <Routes>
           <Route  path='/' element={<Home/>} />
            <Route path='/sobre' element={<Sobre/>}  />
            <Route path="/meu-proposito" element={<MeuProposito/>} />
            <Route path="/coaching-executivo" element={<CoachingExecutivo/>}  />
            <Route path="/coaching-vocacional" element={<CoachingVocacional/>} />
            <Route path="/mentoria-de-carreira" element={<MentoriaCarreira/>} />
            <Route path="/mentoria-de-negocios" element={<MentoriaNegocios/>} />
            <Route path="/depoimentos" element={<Depoimentos/>} />
        </Routes>

        <Footer id="footer" />

    </BrowserRouter>
    )

}


export default RoutesApp;
