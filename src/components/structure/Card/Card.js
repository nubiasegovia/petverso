import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card(props) {

    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate('/product', { state: props.id})
    }

    return (

        <div className="container">
            <div className="card-wrapper">
                <div className="card-itens" onClick={goToProductPage}>
                    <div className="product-img">
                        <img src={props.imgUrl} alt={props.nome} />
                    </div>
                    <div className="product-title">
                        {props.nome}
                    </div>
                    <div className="product-company">
                        {props.company}
                    </div>
                    <div className="product-price">
                        {'R$ ' + props.preco}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;