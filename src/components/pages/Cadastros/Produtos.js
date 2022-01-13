import { useState, React } from "react";
import "./Cadastros.css";
import CadastroProd from "../../assets/cadastroproduto.png";
import { FaCat } from "react-icons/fa";
import {
    GiHummingbird,
    GiRabbit,
    GiSandSnake,
    GiSeatedMouse,
} from "react-icons/gi";
import axios from 'axios';
import { SiDatadog } from "react-icons/si";
import { IoFish } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'


const CadastroProduto = () => {

    const navigate = useNavigate();

    const [nomeProduto, setNomeProduto] = useState('')
    const [tipoPet, setTipoPet] = useState('')
    const [imagemUrl, setImagemUrl] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [restricao, setRestricao] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [categoryID, setCategoryID] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();
        const companyID = localStorage.getItem('companyID')
        const token = localStorage.getItem('token')

        const newProduct = {
            name: nomeProduto,
            animalType: tipoPet,
            imgUrl: imagemUrl,
            price: preco,
            description: descricao,
            contains: conteudo,
            restrictions: restricao,
            quantity: quantidade,
            companyID: companyID,
            categoryID: parseInt(categoryID),
        }


        const response = await axios
            .post("/product", newProduct, {"Authorization" : `Bearer ${token}`})
            .then((res) => {
                console.log(res);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        navigate("/dashseller");
    };
    return (
        <>
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <img className="imgcad2" alt="" src={CadastroProd} />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            require onChange={event => setNomeProduto(event.target.value)}
                            className="form-control item"
                            id="nomeProduto"
                            placeholder="Nome do Produto"
                        />
                    </div>
                    <div className="tipoPet">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setTipoPet(event.target.value)}
                                id="inlineCheckbox1"
                                value="Aves"
                            />
                            <GiHummingbird />
                            <label className="form-check-label" for="inlineCheck1">
                                Aves
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setTipoPet(event.target.value)}
                                id="inlineCheckbox2"
                                value="Cachorro"
                            />
                            <SiDatadog />
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Cachorro
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setTipoPet(event.target.value)}
                                id="inlineCheckbox3"
                                value="Coelho"
                            />
                            <GiRabbit />
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Coelho
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setTipoPet(event.target.value)}
                                id="inlineCheckbox4"
                                value="Gato"
                            />
                            <FaCat />
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Gato
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setTipoPet(event.target.value)}
                                id="inlineCheckbox5"
                                value="Peixe"
                            />
                            <IoFish />
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Peixe
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setTipoPet(event.target.value)}
                                id="inlineCheckbox6"
                                value="Réptil"
                            />
                            <GiSandSnake />
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Réptil
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setTipoPet(event.target.value)}
                                id="inlineCheckbox7"
                                value="Roedor"
                            />
                            <GiSeatedMouse />
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Roedor
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            require onChange={event => setImagemUrl(event.target.value)}
                            className="form-control item"
                            id="img"
                            placeholder="Imagem (Url)"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control item"
                            type='number'
                            step={
                                0.1
                            }
                            require onChange={event => setPreco(event.target.value)}
                            placeholder="R$ 9.99"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            require onChange={event => setDescricao(event.target.value)}
                            className="form-control item"
                            id="descricao"
                            placeholder="Descrição"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            require onChange={event => setConteudo(event.target.value)}
                            className="form-control item"
                            id="conteudo"
                            placeholder="Conteúdo"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            require onChange={event => setRestricao(event.target.value)}
                            className="form-control item"
                            id="restricao"
                            placeholder="Restrição"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            require onChange={event => setQuantidade(event.target.value)}
                            className="form-control item"
                            id="quantidade"
                            placeholder="Quantidade em estoque"
                        />
                    </div>
                    <div className="form-group">
                        <div className="dropdown"> <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"> <span>Categorias</span> <i className="fa fa-caret-down"></i> </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><input className="dropdown-item" value="1" onChange={event => setCategoryID(event.target.value)} placeholder="Acessórios"></input></li>
                                <li><input className="dropdown-item" value="2" onChange={event => setCategoryID(event.target.value)}placeholder="Brinquedos"></input></li>
                                <li><input className="dropdown-item" value="3" onChange={event => setCategoryID(event.target.value)}placeholder="Comida Natural"></input></li>
                                <li><input className="dropdown-item" value="4" onChange={event => setCategoryID(event.target.value)}placeholder="Brinquedos"></input></li>
                                <li><input className="dropdown-item" value="5" onChange={event => setCategoryID(event.target.value)}placeholder="Higiene e Beleza"></input></li>
                                <li><input className="dropdown-item" value="6" onChange={event => setCategoryID(event.target.value)}placeholder="Medicamentos"></input></li>
                                <li><input className="dropdown-item" value="7" onChange={event => setCategoryID(event.target.value)}placeholder="Petiscos"></input></li>
                                <li><input className="dropdown-item" value="8" onChange={event => setCategoryID(event.target.value)}placeholder="Ração em Flocos"></input></li>
                                <li><input className="dropdown-item" value="9" onChange={event => setCategoryID(event.target.value)}placeholder="Ração Medicamentosa"></li></input></li>
                                <li><input className="dropdown-item" value="10" onChange={event => setCategoryID(event.target.value)}placeholder="Ração Seca"></input></li>
                                <li><input className="dropdown-item" value="11" onChange={event => setCategoryID(event.target.value)}placeholder="Ração Úmida"></input></li>
                                <li><input type={text} className="dropdown-item" value="12" onChange={event => setCategoryID(event.target.value)}placeholder="Roupas"></input></li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block  create-account">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CadastroProduto;