import React from "react";
import './Navbar.css';
import PetLogo from "../../assets/LogoTopo.gif";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    return(
        <>
           <div className="bar">
                <a href="/"> <img  className="logo-topo" src={PetLogo} alt="Logo PetVerso" /></a>
                {/* <a href="/"  className="brand">Pet<b>Verso</b></a>   */}
                <div className="menus">
                    <a href="/products/all" className='menu1'> Produtos </a>
                    <a href="/iniciativa"className='menu2'> Nossa Iniciativa </a>
                    <a target="_blank" href="/"className='menu3'> PetDicas </a>
                    <a href="/homeLogin"><button className='btn-topo'>Login</button></a>
                    <IconContext.Provider value={{ color: "#03AEA2", size:"1.9em", className: "cart-icon"}}>
                        <a href="/cart"><FaShoppingCart /></a>
                    </IconContext.Provider>
                    
                    
                </div>    
            </div>
        </>
    )
}




	    
export  default Navbar;