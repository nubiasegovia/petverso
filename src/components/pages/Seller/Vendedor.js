import React from 'react';
import './Vendedor.css';
import Cadastro from '../../assets/cadastropj.png';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


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
    
    const navigate = useNavigate();

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const user = {
            corporateName: username,
            email: email,
            username: corporateName,
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

        const response = await axios.post("/company/registrar", user).then((res) => {
            console.log(res);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        navigate("/inciativa");
    }

    return (
        <>
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group"> 
                        <img className="imgcad2" alt="" src= { Cadastro } />
                    </div>
                    
                    <div className="form-group">
                        <input type="text" require onChange={event => setCorporateName(event.target.value)} className="form-control item" id="razaoSocial" placeholder="Razão Social"/>
                    </div>
                    <div className="form-group">
                        <input type="text" require onChange={event => setUsername(event.target.value)} className="form-control item" id="nomeFantasia" placeholder="Nome Fantasia"/>
                    </div>
                    <div className="form-group">
                        <input type="password" require onChange={event => setPassword(event.target.value)} className="form-control item" id="password" placeholder="Senha"/>
                    </div> 
                    <div className="form-group">
                        <input type="password" require onChange={event => setPasswordConfirmation(event.target.value)} className="form-control item" id="passwordConfirmation" placeholder="Confirmação de Senha"/>
                    </div>                   
                    <div className="form-group">
                        <input type="text" require onChange={event => setEmail(event.target.value)} className="form-control item" id="email" placeholder="E-mail"/>
                    </div>
                    <div className="form-group">
                        <input type="text" require onChange={event => setPhone(event.target.value)} className="form-control item" id="phone-number" placeholder="Nº de Telefone/Whatsapp"/>
                    </div>
                    
                    <div className="form-group">
                        <input type="text"  require onChange={event => setBirthday(event.target.value)}className="form-control item" id="birth-date" placeholder="Data de Nascimento"/>
                    </div>
                    <div className="form-group">
                        <input type="text" require onChange={event => setCnpj(event.target.value)}className="form-control item" id="CNPJ" placeholder="CNPJ"/>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" require onChange={event => setAddress1(event.target.value)}className="form-control" id="inputAddress" placeholder="Dog Street, nº 0"/>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Complemento</label>
                        <input type="text" require onChange={event => setAddress2(event.target.value)}className="form-control" id="inputAddress2" placeholder="Casa, Apto, etc."/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <input type="text" require onChange={event => setCity(event.target.value)} className="form-control" id="inputCity" placeholder="Cidade"/>
                        </div>
                        <div className="form-group col-md-6">
                        <input type="text" require onChange={event => setState(event.target.value)} className="form-control" id="inputState" placeholder="Estado"/>
                        </div>
                        <div className="form-group col-md-4">
                        <input type="text" require onChange={event => setCep(event.target.value)}className="form-control" id="inputCEP" placeholder="CEP"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" value='Enviar' className="btn btn-block create-account">Criar Conta</button>
                    </div>
                </form>
                
            </div>
                
        </>
    )
}

export default CadastroVendedor;