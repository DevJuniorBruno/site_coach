import './header.css'
import { Link, useLocation } from "react-router-dom";

import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import MeuProposito from '../../pages/Meu-Propósito';
import CoachingExecutivo from '../../pages/Coaching-Executivo';
import MentoriaCarreira from '../../pages/Mentoria-Carreira';

import { useState,useRef, useEffect} from "react";

function Header(){

    const location = useLocation()
  
    useEffect(()=>{
        const handleClickOutside = (event) =>{
            if(navLinksRef.current && !navLinksRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return() =>{
            document.removeEventListener('mousedown', handleClickOutside);
        }

    }, []);

    useEffect(()=>{
        setIsOpen(false)
    }, [location]);

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
        <div className="navbar">
          <div className={`navlinks ${isOpen && 'open'} `}    ref={navLinksRef}>
            <Link to='/' element = { <Home/> }  >Home</Link>
            <Link to='/sobre' element={<Sobre />} >Sobre</Link>
            <Link to='/meu-proposito' element={<MeuProposito/>} >Meu Propósito</Link>
            <Link className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            >
               
               <div className="dropdown-toggle" onClick={handleDropDownToggle} >
                    Serviços
               </div>
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
            <Link to="/" onClick={() => (window.location.hash = 'footer')}>
                Contato
            </Link>
          </div>

            <div className={`nav_toggle ${isOpen && 'open'}`}
            onClick={() =>setIsOpen(!false)}
            >
                <div className='bar'></div>
            </div>
        </div>
    );
}

export default Header;