import React from "react";
import './Navbar.css';
import PetLogo from "../../assets/petverso.png"
const Navbar = () => {
    return(
        <>
           <div className='navbar'>
                <img className="logo-topo" src={PetLogo} alt="PetVerso logo"/>
                <a href="/" className="navbar-brand">Pet<b>Verso</b></a>  
                <a target="_blank" href="#"className='menus'> Produtos </a>
                <a target="_blank" href="#"className='menus'> PetDicas </a>
                <a target="_blank" href="/cadastro"><button className='btn-topo'>Cadastre-se</button></a>
            </div>
        </>
    )
}




	    
export  default Navbar;