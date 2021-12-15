import React from "react";
import './Navbar.css';
import PetLogo from "../../assets/petverso.png"
const Navbar = () => {
    return(
        <>
           <div className='navbar'>
                <a href="#" className="navbar-brand">Pet<b>Verso</b></a>  
                    <img className="logo-topo" src={PetLogo}/>
               
               <a target="_blank" href="#"className='menus'> Produtos </a>
               <a target="_blank" href="#"className='menus'> Aprenda Mais </a>
               <a target="_blank" href="/cadastro"><button className='btn-topo'>Cadastre-se</button></a>
               
           </div>
        </>
    )
}




	    
export  default Navbar;