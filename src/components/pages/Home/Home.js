import React from 'react';
import './Home.css';
import Carousel from './Carousel';
import ProductList from '../../pages/ProductList/ProductList';
import SilDog from '../../assets/sildog.png';
import SilCat from '../../assets/silcat.png';
import SilBird from '../../assets/silbird.png';
import SilFish from '../../assets/silfish.png';
import SilHabit from '../../assets/silhabit.png';
import SilRep from '../../assets/silrep.png';
import SilMouse from '../../assets/silmouse.png';
import HomeText from '../../assets/hometext.png';
import Food from '../../assets/18.jpg';
import Casinha from '../../assets/19.jpg';
import Catfood from '../../assets/20.jpg';
import DogHouse from '../../assets/21.jpg';
import { FaCartPlus } from "react-icons/fa";
import { IconContext } from "react-icons";


const Home = () => {
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
                <div className="card-itens">
                        <div className="product">
                            {/* <img src={props.imgUrl} alt={props.nome} />
                            <div className="details">
                                <span>{props.company}</span>
                                <h5>{props.nome}</h5>
                                <h4>R$ {props.preco}</h4>
                                <span>{props.restrictions}</span>
                                <span>{props.quantity}</span>
                            </div> */}
                            <div className="cart">
                                <IconContext.Provider value={{ color: "#03AEA2", size:"1.4em", className: "cart-icon"}}>
                                <a href="/"><FaCartPlus /></a>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Home;