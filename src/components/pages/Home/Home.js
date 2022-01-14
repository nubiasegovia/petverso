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
import Card from "../../structure/Card/Card";



const Home = () => {

    const [products, setProducts] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [loaded, setLoaded] = useState(false);




    useEffect(() => {

        const getData = async () => {
            await axios.get('/product/cat/13')
                .then(response => {
                    if (mounted) {
                        setProducts(response.data)
                        setLoaded(true)

                    }
                })
        }
        setMounted(true)
        getData()
    }, [mounted])

    console.log(products)




    return (
        <>
            <div className="animals">
                <div>
                    <img className="Sil" src={SilDog} />
                    <img className="Sil" src={SilMouse} />
                    <img className="Sil" src={SilRep} />
                    <img className="Sil" src={SilHabit} />
                    <img className="Sil" src={SilFish} />
                    <img className="Sil" src={SilBird} />
                    <img className="Sil" src={SilCat} />
                </div>
                <br />
                <img className="Sil2" src={HomeText} />
                <h5 className="destaque">Ajudando pequenas empresas e produtores a dar o suporte que todo tutor de pet precisa nessa incrivel jornada!</h5>
                <br />
                <br />


            </div>
            <Carousel />
            <br />
            {/* <h1 className="destaque">Produtos em Destaque</h1>
            <div>
                <div className="card-itens">

                    <div className="list-container">
                        {

                            loaded ?
                                products.length && products.map(product => (
                                    <Card
                                        key={product.id}
                                        id={product.id}
                                        nome={product.name}
                                        preco={product.price}
                                        imgUrl={product.imgUrl}
                                    />
                                )) : <span>carregando</span>
                        }
                        <div className="cart">
                            <IconContext.Provider value={{ color: "#03AEA2", size: "1.4em", className: "cart-icon" }}>
                                <a href="/"><FaCartPlus /></a>
                            </IconContext.Provider>
                        </div>
                    </div> */}
                    {/* <div className="product"> */}
                    {/* <img src={products.products.imgUrl} alt={products.products.name} />
                            <div className="details">
                                <span>{products.products.company}</span>
                                <h5>{products.products.name}</h5>
                                <h4>R$ {products.products.price}</h4>
                                <span>{products.products.restrictions}</span>
                                <span>{products.products.quantity}</span>
                            </div> */}

                    {/* </div> */}
                {/* </div>
            </div> */}
        </>
    )
}
export default Home;