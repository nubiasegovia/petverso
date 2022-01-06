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



const Home = () => {
    return (
        <>
            <div className="animals">
                <img className="Sil" src = {SilDog}/>
                <img className="Sil" src = {SilMouse}/>
                <img className="Sil" src = {SilRep}/>
                <img className="Sil" src = {SilHabit}/>
                <img className="Sil" src = {SilFish}/>
                <img className="Sil" src = {SilBird}/>
                <img className="Sil" src = {SilCat}/>
                <br />
                <img className="Sil2" src = {HomeText}/>
                <br />
                <h5 className="destaque">Ajudando pequenas empresas e produtores a dar o suporte que todo tutor de pet precisa nessa incrivel jornada!</h5>
                <br />
                <br />
                

            </div>
           <Carousel/>
            <br/>
            <h1 className="destaque">Podutos em Destaque</h1>
            
            
           <ProductList/>
        </>
    )
}
export default Home;