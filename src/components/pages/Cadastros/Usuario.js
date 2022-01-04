import React from 'react';
import './Cadastros.css';
import Cadastro from '../../assets/cadastro.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CadastroUser = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [cep, setCep] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    

    const handleSubmit = event =>{
        event.preventDefault();

        const user = {
            nome: nome,
            email: email,
            username: username,
            password: password,
            passwordConfirmation: passwordConfirmation,
            cep: cep,
            cpf: cpf,
            phone: phone,
            address1: address1,
            address2: address2
        }

        axios.post('/user/registrar', user)
        .then(response => console.log(response))
    }



    return (
        <>
            <div class="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group"> 
                        <img className="imgcad" src= { Cadastro } />
                    </div>
                    <div class="form-group">
                        <input type="text" require onChange={event => setNome(event.target.value)}  class="form-control item" id="nome" placeholder="Nome Completo"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="username" placeholder="Usuário"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control item" id="password" placeholder="Senha"/>
                    </div>  
                    <div class="form-group">
                        <input type="password" class="form-control item" id="passwordConfirmation" placeholder="Confirmação de Senha"/>
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
                        <input type="text" class="form-control" id="address1" placeholder="Dog Street, nº 0"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Complemento</label>
                        <input type="text" class="form-control" id="address2" placeholder="Casa, Apto, etc."/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputCity">Estado</label>
                        <input type="text" class="form-control" id="inputCity"/>
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