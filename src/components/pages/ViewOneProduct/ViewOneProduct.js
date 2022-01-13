import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewOneProduct.css";
import { FaCartPlus } from "react-icons/fa";


const Product = () => {
  const state = useLocation();
  const id = state.state;

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState([])
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/product/${id}`)
      .then((response) => {
        if (mounted) {
          setProduct(response.data);
          console.log(response.data)
        }
      });
  };

  const userID = localStorage.getItem('userID');

  let order = { userID: userID,
  productID: product.id,
  productQnty: parseInt(quantity)}


  const addToCart = async (event) => {
    event.preventDefault()
    await axios.post(`/cart/addtocart`, order).then((res) =>
      console.log(res))
  }
  useEffect(() => {
    setMounted(true);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  return (
    <div className="single-product">
      <div className="sproduct-img">
        <img src={product.imgUrl} width="100%" alt={product.name} />
      </div>
      <div className="sproduct-details">
        <h4>{product.name}</h4>
        <h6>Vendido e entregue por {product.company?.corporateName}</h6>
        <p>{product.description}</p>
        <div className="wrapper-pi">
          <h2>R$ {product.price}</h2>
          <span>{product.quantity}</span>
          <input type="number" required onChange={event => setQuantity(event.target.value)}/>
        </div>
        <div className="wrapper-shopbtn">
          <button className="addcart shopbtn" onClick={addToCart}><FaCartPlus /> Adicionar ao carrinho</button>
          <button className="buy shopbtn">Comprar</button>
        </div>

      </div>
    </div>

  );
};

export default Product;
