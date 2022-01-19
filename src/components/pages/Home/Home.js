import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Carousel from './Carousel';
import SilDog from '../../assets/sildog.png';
import SilCat from '../../assets/silcat.png';
import SilBird from '../../assets/silbird.png';
import SilFish from '../../assets/silfish.png';
import SilHabit from '../../assets/silhabit.png';
import SilRep from '../../assets/silrep.png';
import SilMouse from '../../assets/silmouse.png';
import HomeText from '../../assets/hometext.png';
import { FaCartPlus } from "react-icons/fa";
import { IconContext } from "react-icons";


const Home = () => {

    const [products, setProducts] = useState([]);
    const [mounted, setMounted] = useState(false);


    
    useEffect(() => {
        
        const getData = async () => {
            await axios.get('/product/cat/13')
                .then(response => {
                    if (mounted) {
                        setProducts(response.data)
                    }
                })
        }
        setMounted(true)
        getData()
    }, [ mounted])

    console.log(products)



    return (
        <>
            <div className="animals">
                <div>
                    <img className="Sil" src = {SilDog}/>
                    <img className="Sil" src = {SilMouse}/>
                    <img className="Sil" src = {SilRep}/>
                    <img className="Sil" src = {SilHabit}/>
                    <img className="Sil" src = {SilFish}/>
                    <img className="Sil" src = {SilBird}/>
                    <img className="Sil" src = {SilCat}/>
                </div>
                <br />
                <img className="Sil2" src = {HomeText}/>
                <h5 className="destaque">Ajudando pequenas empresas e produtores a dar o suporte que todo tutor de pet precisa nessa incrivel jornada!</h5>
                <br />
                <br />
                

            </div>
            <Carousel/>
            <br/>
            <h1 className="destaque">Produtos em Destaque</h1>
            <div>
                {/* <div className="card-itens">
                        <div className="product">
                            <img src={products.} alt={products.nome} />
                            <div className="details">
                                <span>{products.company}</span>
                                <h5>{products.nome}</h5>
                                <h4>R$ {products.preco}</h4>
                                <span>{products.restrictions}</span>
                                <span>{products.quantity}</span>
                            </div>
                            <div className="cart">
                                <IconContext.Provider value={{ color: "#03AEA2", size:"1.4em", className: "cart-icon"}}>
                                <a href="/"><FaCartPlus /></a>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div> */}
            </div>
        </>
    )
}
export default Home;