import React from 'react';
import './Cadastros.css';
import CadastroProd from '../../assets/cadastroproduto.png';
import { FaCat } from 'react-icons/fa';
import { GiHummingbird, GiRabbit, GiSandSnake, GiSeatedMouse } from 'react-icons/gi';
import { SiDatadog } from 'react-icons/si';
import { IoFish } from 'react-icons/io5';
import CurrencyInput from "react-currency-input";

const CadastroProduto = () => {
    return (
        <>
            <div class="registration-form">
                <form>
                    <div className="form-group"> 
                        <img className="imgcad2" src= { CadastroProd } />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" class="form-control item" id="nomeProduto" placeholder="Nome do Produto"/>
                    </div>
                    <div className = "tipoPet">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="opcao1"/>
                            <GiHummingbird />
                            <label class="form-check-label" for="inlineCheck1">Aves</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="opcao2"/>
                            <SiDatadog />
                            <label class="form-check-label" for="inlineCheckbox1"> Cachorro</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="opcao3"/>
                            <GiRabbit />
                            <label class="form-check-label" for="inlineCheckbox1"> Coelho</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="opcao4"/>
                            <FaCat />
                            <label class="form-check-label" for="inlineCheckbox1"> Gato</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="opcao5"/>
                            <IoFish />
                            <label class="form-check-label" for="inlineCheckbox1"> Peixe</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="opcao6"/>
                            <GiSandSnake />
                            <label class="form-check-label" for="inlineCheckbox1"> Réptil</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="opcao7"/>
                            <GiSeatedMouse />
                            <label class="form-check-label" for="inlineCheckbox1"> Roedor</label>
                        </div>
                    </div>    

                    <div class="form-group">
                        <input type="text" class="form-control item" id="img" placeholder="Imagem (Url)"/>
                    </div>
                    <div class="form-group">
                        <CurrencyInput class="form-control item"
                            decimalSeparator="," 
                            thousandSeparator="."
                            prefix="R$"
                            value={"00.00"}
                        />
                    </div>                    
                    <div class="form-group">
                        <input type="text" class="form-control item" id="descricao" placeholder="Descrição"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="conteudo" placeholder="Conteúdo"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="restricao" placeholder="Restrição"/>
                    </div>
                    
                    <div class="form-group">
                        <button type="button" class="btn btn-block  create-account">Cadastrar</button>
                    </div>
                </form>
                
            </div>
                
        </>
    )
}

export default CadastroProduto;