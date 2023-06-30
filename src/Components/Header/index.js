import './header.css'
import { Link } from "react-router-dom";
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
            <Link>Home</Link>
            <Link>Sobre</Link>
            <Link>Meu Propósito</Link>
            <Link className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            >
                <Link onClick={handleDropDownToggle} >Serviços</Link>
                {isDropdownOpen &&(
                    <div className='dropdown-menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >
                        <li>
                            <Link>Coaching Executivo</Link>
                        </li>
                        <li>
                            <Link>Mentoria de Carreira</Link>
                        </li>
                        <li>
                            <Link>Coaching Vocacional</Link>
                        </li>
                        <li>
                            <Link>Mentoria de Negócios</Link>
                        </li>
                    </div>
                )}
                </Link>
            <Link>Depoimentos</Link>
            <Link>Eventos e Parcerias</Link>
            <Link>Certificações</Link>
            <Link>Contato</Link>
            <Link>Blog</Link>
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