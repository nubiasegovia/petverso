import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./ShopCart.css";
import { FaShoppingCart } from "react-icons/fa";
import { GlobalContext } from "../../shared/Providers/Providers";


function ShopCart() {

    const {user} = useContext(GlobalContext);
    console.log(user)
    const [mounted, setMounted] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState(false);
    
    
    useEffect(() => {
        const userID = localStorage.getItem('userID');
        const getCart = async () => axios.get(`/cart/user/${userID}`)
        .then(response => {
            
            console.log('oi vei', response)
            setLoaded(true)
            setProducts(response.data.productList)
        })
        if(mounted){
            getCart();
        }
        if (localStorage.getItem("token")) {
            setToken(true);
        }
            setMounted(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem("token"), token]);




    return (

        <div className="shopwrapper">
            <div className="shopcart-container">
                <div className="shopcart-title">
                    <h2><FaShoppingCart /> Carrinho de compras</h2>
                </div>
                {loaded ?
                    products.length && products.map((product) => (

                        <div className="products">
                            <img src='' alt="Foto de NomeProduto" />
                            <div className="product-name">{product.productName}</div>
                            <div className="product-price">R$ {product.totalPrice}</div>
                            <div className={product.productQnty}>
                                <div className="add-remove"></div>
                                <div className="delete-btn">Excluir</div>
                            </div>
                        </div>
                    )) : <span>carregando</span>
                }



                <div className="purchase-details">
                    <div className="subtotal-details">
                        <div className="subtotal-label">Subtotal</div>
                        <div className="subtotal-price">R$ 0,00</div>
                    </div>
                    <div className="shipping-price">
                        <div className="shipping-label">Entrega</div>
                        <div className="price">R$ 0,00</div>
                    </div>
                    <div className="total">
                        <div className="label-total">Total: </div>
                        <div className="total-price">R$ 0,00</div>
                    </div>
                </div>
                <div className="checkout">
                    <div className="cupom">
                        <div className="add-cupom">Inserir cupom</div>
                        <div className="input-wrapper">
                            <input type="text" id="cupom" name="cupom"></input>
                            <button type="submit" value="Inserir" className="btn-cupom">Inserir</button>
                        </div>


                    </div>
                    <div className="shipping">
                        <div className="cal-shipping">Calcular frete</div>
                        <div className="input-wrapper">
                            <input type="text" id="cupom" name="cupom"></input>
                            <button type="submit" value="Inserir" className="btn-cep">Calcular</button>
                        </div>
                    </div>
                    <div className="checkout-btn">
                        <button className="btn-checkout">Finalizar compra</button>
                    </div>
                </div>
                <div className="recommendation">
                    <h4>Itens que você pode gostar</h4>
                    <div className="product-cards"></div>
                </div>
            </div>

        </div>

    )
}

export default ShopCart;



//https://cdn.breeds.com.br/media/catalog/product/cache/1/image/1540x1540/9df78eab33525d08d6e5fb8d27136e95/a/r/arranhador-para-gato-sisal-em-madeira-simba-ferplast.jpg