import Card from "../../structure/Card/Card";
import axios from "axios";
import { useEffect, useState } from 'react';
import './ProductList.css';


function ProductList() {

    const [products, setProducts] = useState([]);
    const [mounted, setMounted] = useState(false);


    
    useEffect(() => {
        
        const getData = async () => {
            await axios.get('/product/all')
                .then(response => {
                    if (mounted) {
                        setProducts(response.data)
                    }
                })
        }
        setMounted(true)
        getData()
    }, [ mounted])

    return (
        <>
            <br />
            <h1 className='destaque'>Nossos Produtos</h1>
            <br />
            <div className="list-container">
                
                {
                    products.map(product => (
                        <Card
                        key={product.id}
                            id={product.id}
                            nome={product.name}
                            company={product.company.corporateName}
                            preco={product.price}
                            imgUrl={product.imgUrl}
                        />
                    ))
                }
            </div>
            <br />
        </>    
    )
}

export default ProductList;
