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
                    <img src={props.image} alt={props.title} />
                    <div className="product-title">
                        {props.title}
                    </div>
                    <div className="product-company">
                        {props.company}
                    </div>
                    <div className="product-price">
                        {'R$ ' + props.price}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;