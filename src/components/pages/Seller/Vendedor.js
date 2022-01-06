import React from 'react';
import './Vendedor.css';
import Cadastro from '../../assets/cadastropj.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CadastroVendedor = () => {

    const [corporateName, setCorporateName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [cep, setCep] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const user = {
            corporateName: corporateName,
            email: email,
            username: username,
            birthday:birthday,
            password: password,
            passwordConfirmation: passwordConfirmation,
            cep: cep,
            cnpj: cnpj,
            phone: phone,
            city: city,
            state: state,
            address1: address1,
            address2: address2
        }

        const res = await axios.post('/company/registrar', user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <>
            <div class="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group"> 
                        <img className="imgcad2" src= { Cadastro } />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" require onChange={event => setCorporateName(event.target.value)} class="form-control item" id="razaoSocial" placeholder="Razão Social"/>
                    </div>
                    <div class="form-group">
                        <input type="text" require onChange={event => setUsername(event.target.value)} class="form-control item" id="nomeFantasia" placeholder="Nome Fantasia"/>
                    </div>
                    <div class="form-group">
                        <input type="password" require onChange={event => setPassword(event.target.value)} class="form-control item" id="password" placeholder="Senha"/>
                    </div> 
                    <div class="form-group">
                        <input type="password" require onChange={event => setPasswordConfirmation(event.target.value)} class="form-control item" id="passwordConfirmation" placeholder="Confirmação de Senha"/>
                    </div>                   
                    <div class="form-group">
                        <input type="text" require onChange={event => setEmail(event.target.value)} class="form-control item" id="email" placeholder="E-mail"/>
                    </div>
                    <div class="form-group">
                        <input type="text" require onChange={event => setPhone(event.target.value)} class="form-control item" id="phone-number" placeholder="Nº de Telefone/Whatsapp"/>
                    </div>
                    
                    <div class="form-group">
                        <input type="text"  require onChange={event => setBirthday(event.target.value)}class="form-control item" id="birth-date" placeholder="Data de Nascimento"/>
                    </div>
                    <div class="form-group">
                        <input type="text" require onChange={event => setCnpj(event.target.value)}class="form-control item" id="CNPJ" placeholder="CNPJ"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" require onChange={event => setAddress1(event.target.value)}class="form-control" id="inputAddress" placeholder="Dog Street, nº 0"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Complemento</label>
                        <input type="text" require onChange={event => setAddress2(event.target.value)}class="form-control" id="inputAddress2" placeholder="Casa, Apto, etc."/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <input type="text" require onChange={event => setCity(event.target.value)} class="form-control" id="inputCity" placeholder="Cidade"/>
                        </div>
                        <div class="form-group col-md-6">
                        <input type="text" require onChange={event => setState(event.target.value)} class="form-control" id="inputState" placeholder="Estado"/>
                        </div>
                        <div class="form-group col-md-4">
                        <input type="text" require onChange={event => setCep(event.target.value)}class="form-control" id="inputCEP" placeholder="CEP"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" value='Enviar' class="btn btn-block create-account">Criar Conta</button>
                    </div>
                </form>
                
            </div>
                
        </>
    )
}

export default CadastroVendedor;