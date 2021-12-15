import React from 'react';
import './Cadastros.css';
import Cadastro from '../../assets/cadastro.png';

const CadastroUser = () => {
    return (
        <>
            <div class="registration-form">
                <form>
                    <div className="form-group"> 
                        <img className="imgcad" src= { Cadastro } />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" class="form-control item" id="username" placeholder="Usuário"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control item" id="password" placeholder="Senha"/>
                    </div>                    
                    <div class="form-group">
                        <input type="text" class="form-control item" id="email" placeholder="E-mail"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="phone-number" placeholder="Nº de Telefone/Whatsapp"/>
                    </div>
                    
                    <div class="form-group">
                        <input type="text" class="form-control item" id="birth-date" placeholder="Data de Nascimento"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="CPF" placeholder="CPF"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Dog Street, nº 0"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Complemento</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Casa, Apto, etc."/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputEstado">Estado</label>
                        <select id="inputEstado" class="form-control">
                            <option selected>Escolher...</option>
                            <option>...</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputCEP">CEP</label>
                        <input type="text" class="form-control" id="inputCEP"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-block create-account">Criar Conta</button>
                    </div>
                </form>
                <div class="social-media">
                    <h5>Cadastre-se com sua mídia social</h5>
                    <div class="social-icons">
                            <a href="#"><i class="icon-social-google" title="Google"></i></a>
                    </div>
                </div>
            </div>
                
        </>
    )
}

export default CadastroUser;