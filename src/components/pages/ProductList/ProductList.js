import Card from "../../structure/Card/Card";
import axios from "axios";
import { useEffect, useState } from 'react';
import './ProductList.css';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [company, setCompany] = useState([]);


    const getData = async () => {
        await axios.get('/product/todos')
            .then(response => {
                if (mounted) {
                    setProducts(response.data)
                }
            })
    }

    const getCompany = async () => {
        await axios.get(`/company/${getData.companyID}`)
            .then((response) => {
                    setCompany(response.data)
            })
    }

    useEffect(() => {
        setMounted(true)
        getData()
        getCompany();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted])

    return (
        <div className="list-container">
            {
                products.map(product => (
                    <Card
                    key={product.id}
                        id={product.id}
                        nome={product.name}
                        company={company.corporateName}
                        preco={product.price}
                        imgUrl={product.imgUrl}
                    />
                ))
            }
        </div>
    )
}

export default ProductList;
