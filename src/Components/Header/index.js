import './header.css'
import { Link } from "react-router-dom";

import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import MeuProposito from '../../pages/Meu-Propósito';
import CoachingExecutivo from '../../pages/Coaching-Executivo';
import MentoriaCarreira from '../../pages/Mentoria-Carreira';

import { useState,useRef } from "react";

function Header(){

    const [isOpen, setIsOpen]=useState(false);
    const navLinksRef = useRef(null);
    let timeoutId = null;

    const [isDropdownOpen, setIsDropdownOpen]= useState(false);

    const handleDropDownToggle = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    }


    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {

        timeoutId = setTimeout(() => {
            setIsDropdownOpen(false);
          }, 200);
      };
    
    return(
        <div className="navbar" >
          <div className={`navlinks ${isOpen && 'open'}`} ref={navLinksRef} >
            <Link to='/' element = { <Home/> }  >Home</Link>
            <Link to='/sobre' element={<Sobre />} >Sobre</Link>
            <Link to='/meu-proposito' element={<MeuProposito/>} >Meu Propósito</Link>
            <Link className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            >
                <Link onClick={handleDropDownToggle} >Serviços</Link>
                {isDropdownOpen &&(
                    <div className='dropdown-menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >
                        <li>
                            <Link to="/coaching-executivo" element={<CoachingExecutivo/>} >Coaching Executivo</Link>
                        </li>
                        <li>
                            <Link to="/mentoria-de-carreira" element={<MentoriaCarreira/>} >Mentoria de Carreira</Link>
                        </li>
                        <li>
                            <Link to="/coaching-vocacional"  >Coaching Vocacional</Link>
                        </li>
                        <li>
                            <Link to="/mentoria-de-negocios" >Mentoria de Negócios</Link>
                        </li>
                    </div>
                )}
                </Link>
            <Link to="/depoimentos" >Depoimentos</Link>
            <Link to="/contato" >Contato</Link>
          </div>

            <div className={`nav_toggle ${isOpen && 'open'}`}
            onClick={() =>setIsOpen(!isOpen)}
            >
                <div className='bar'></div>
            </div>
        </div>
    );
}

export default Header;