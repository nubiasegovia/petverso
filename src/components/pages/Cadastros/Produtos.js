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
            categoryID: categoryID,
        }


        const response = await axios
            .post("/product", newProduct)
            .then((res) => {
                console.log(res);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        navigate("/dashSeller");
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
                                value="opcao1"
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
                                value="opcao2"
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
                                value="opcao3"
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
                                value="opcao4"
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
                                value="opcao5"
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
                                value="opcao6"
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
                                value="opcao7"
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

                    <div className="categoria">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox1"
                                value="opcao1"
                            />
                            
                            <label className="form-check-label" for="inlineCheck1">
                                Acessórios
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox2"
                                value="opcao2"
                            />
                           
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Brinquedos
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox3"
                                value="opcao3"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Comida Natural
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox4"
                                value="opcao4"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Brinquedos
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox5"
                                value="opcao5"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Higiene e Beleza
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox6"
                                value="opcao6"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Medicamentos
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox7"
                                value="opcao7"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Petiscos
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox7"
                                value="opcao7"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Ração em Flocos
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox7"
                                value="opcao7"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Ração Medicamentosa
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox7"
                                value="opcao7"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Ração Seca
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox7"
                                value="opcao7"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Ração Úmida
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                require onChange={event => setCategoryID(event.target.value)}
                                id="inlineCheckbox7"
                                value="opcao7"
                            />
                            
                            <label className="form-check-label" for="inlineCheckbox1">
                                {" "}
                                Roupas
                            </label>
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