import "./ViewOneProduct.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


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
    <div className="container">
      <div className="product-container">
        <div className="imgs-wrapper">
          <div className="image-container">
            <div className="col img">
              <div className="row selected-img">
                <img src={product.imgUrl} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="infos-wrapper">
          <h3>{product.nome}</h3>
          <div className="company-info">
            <p>Vendido e entregue por {/* {company.nome} */}</p>
          </div>
          <div className="description">
            <p>{product.descricao}</p>
          </div>
          <div className="price">
            <p>R$ {product.preco}</p>
          </div>
        </div>
    </div>

    </div>
    
  );
};

export default Product;
