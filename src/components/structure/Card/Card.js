import { useNavigate } from "react-router-dom";
import "./Card.css"; 
import { IconContext } from "react-icons";
import { FaCartPlus } from "react-icons/fa";

function Card(props) {

    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate('/product', { state: props.id})
    }

    return (
                <div className="card-itens" onClick={goToProductPage}>
                    <div className="product">
                        <img className="imgCard" src={props.imgUrl} alt={props.nome} />
                        <div className="details">
                            <span>{props.company}</span>
                            <h5>{props.nome}</h5>
                            <h4>R$ {props.preco}</h4>
                            <span>{props.restrictions}</span>
                            <span>{props.quantity}</span>
                        </div>
                        <div className="cart">
                            <IconContext.Provider value={{ color: "#03AEA2", size:"1.4em", className: "cart-icon"}}>
                            <a href="/cart"><FaCartPlus /></a>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
    )
}

export default Card;