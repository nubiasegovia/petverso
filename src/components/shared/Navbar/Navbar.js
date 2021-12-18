import React from "react";
import './Navbar.css';
import PetLogo from "../../assets/LogoTopo.gif";
import Login from "../../pages/Login/Login";


const Navbar = () => {
    return(
        <>
           <div className="bar">
                <a href="/"> <img  className="logo-topo" src={PetLogo}/></a>
                {/* <a href="/"  className="brand">Pet<b>Verso</b></a>   */}
                <div className="menus">
                    <a href="/products" className='menu1'> Produtos </a>
                    <a href="#"className='menu2'> Nossa Iniciativa </a>
                    <a target="_blank" href="#"className='menu3'> PetDicas </a>
                    <a href="/Login"><button className='btn-topo'>Login</button></a>
                    
                </div>    
            </div>
        </>
    )
}




	    
export  default Navbar;