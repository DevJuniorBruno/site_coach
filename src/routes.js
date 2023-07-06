import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function RoutesApp(){
    return(
    <BrowserRouter>

        <Header/>

        <Routes>
           <Route  path='/' element={<Home/>} />
        </Routes>

        <Footer/>

    </BrowserRouter>
    )

}


export default RoutesApp;
