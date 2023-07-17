import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

import Home from '../../pages/Home';
import Sobre from  '../../pages/Sobre';
import MeuProposito from '../../pages/Meu-Propósito';
import CoachingExecutivo from '../../pages/Coaching-Executivo';
import CoachingVocacional from '../../pages/Coaching-Vocacional';
import MentoriaCarreira from '../../pages/Mentoria-Carreira';
import MentoriaNegocios from '../../pages/Mentoria-de-Negocios';
import Depoimentos from "../../pages/Depoimentos";

function Header() {
	const navRef = useRef();
	
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<nav ref={navRef}  >

       <Link to="/" element={<Home/>} onClick={showNavbar} >Home</Link>
       <Link to="/sobre" element={<Sobre/>} onClick={showNavbar}>Sobre</Link>
       <Link to="/meu-proposito" element={<MeuProposito/>} onClick={showNavbar} >Meu Propósito</Link>
       <Link to="/coaching-executivo" element={<CoachingExecutivo/>} onClick={showNavbar}>Coaching Executivo</Link>
       <Link to="/mentoria-de-carreira" element={<MentoriaCarreira/>}onClick={showNavbar} >Mentoria Carreira</Link>
       <Link to="/coaching-vocacional" element={<CoachingVocacional/>} onClick={showNavbar} >Coaching Executivo</Link>
       <Link to="/mentoria-de-negocios" element={<MentoriaNegocios/>} onClick={showNavbar} >Mentoria Negócios</Link>
       <Link to="/depoimentos" element={<Depoimentos/>} onClick={showNavbar} >Depoimentos</Link>
       

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;