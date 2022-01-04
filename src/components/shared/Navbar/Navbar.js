import React from "react";
import './Navbar.css';
import PetLogo from "../../assets/LogoTopo.gif";


const Navbar = () => {
    return(
        <>
           <div className="bar">
                <a href="/"> <img  className="logo-topo" src={PetLogo} alt="Logo PetVerso" /></a>
                {/* <a href="/"  className="brand">Pet<b>Verso</b></a>   */}
                <div className="menus">
                    <a href="/products/all" className='menu1'> Produtos </a>
                    <a href="/iniciativa"className='menu2'> Nossa Iniciativa </a>
                    <a target="_blank" href="#"className='menu3'> PetDicas </a>
                    <a href="/Login"><button className='btn-topo'>Login</button></a>
                    
                </div>    
            </div>
        </>
    )
}




	    
export  default Navbar;