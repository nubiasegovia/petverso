import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewOneProduct.css";
import { FaCartPlus } from "react-icons/fa";


const Product = () => {
  const state = useLocation();
  const id = state.state;

  const [product, setProduct] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/product/${id}`)
    .then((response) => {
      if (mounted) {
        setProduct(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  return (
    <div className="single-product">
      <div className="sproduct-img">
        <img src={product.imgUrl}  width="100%" alt={product.nome} />
      </div>
      <div className="sproduct-details">
        <h4>{product.nome}</h4>
        <h6>Vendido e entregue por NomeEmpresa</h6>
        <p>{product.descricao}</p>
        <div className="wrapper-pi">
          <h2>R$ {product.preco}</h2>
          <input type="number" value="1" />  
        </div>
        <div className="wrapper-shopbtn">
          <button className="addcart shopbtn"><FaCartPlus /> Adicionar ao carrinho</button>
          <button className="buy shopbtn">Comprar</button>
        </div>
        
      </div>
    </div>
    
  );
};

export default Product;
