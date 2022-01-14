import React, { useContext } from "react";
import './Navbar.css';
import PetLogo from "../../assets/LogoTopo.gif";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { GlobalContext } from "../Providers/Providers";


const Navbar = () => {
    // const [token, setToken] = useState(false);
    // useEffect(() =>{
    //     if (localStorage.getItem("token")) {
    //         setToken(true);
    //     }
    // },[localStorage.getItem("token")])
    
    const {user, setUser} = useContext(GlobalContext)
    function logout() {
        setUser(false);
        localStorage.removeItem("token")
    }
    
    return(
        <>
            <div className="bar">
                <a href="/"> <img  className="logo-topo" src={PetLogo} alt="Logo PetVerso" /></a>
                
                <div className="menus">
                    <a href="/products/all" className='menu1'> Produtos </a>
                    <a href="/iniciativa"className='menu2'> Nossa Iniciativa </a>
                    <a href="/petdicas"className='menu3'> PetDicas </a>
                </div>    
                { 
                    user
                    ? <a href="/"><button className='btn-topo' onClick={()=> logout()}>Logout</button></a>
                    : <a href="/homeLogin"><button className='btn-topo'>Login</button></a>
                }
                <IconContext.Provider value={{ color: "#03AEA2", size:"1.9em", className: "cart-icon"}}>
                    <a href="/cart"><FaShoppingCart /></a>
                </IconContext.Provider>
                    
            </div>
        </>
    )
}




	    
export  default Navbar;