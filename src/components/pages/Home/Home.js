import React from 'react';
import './Home.css';
import Carousel from './Carousel';
import ProductList from '../../pages/ProductList/ProductList';



const Home = () => {
    return (
        <>
           <Carousel/>

           <ProductList/>
        </>
    )
}
export default Home;