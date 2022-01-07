import React from 'react';
import './Login.css';
import LogoLogin from '../../assets/Login.png';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const[cnpj, setCnpj] = useState('')
    const[password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = event =>{
        event.preventDefault();

        const login = {
            cnpj: cnpj,
            password: password
        }

        axios.post(`/auth/login-company`, login)
        .then(response =>{
            const token = response.data.token;
            localStorage.setItem('token', token)
        })
        navigate("/DashSeller");

    }

    return (
        <>
            <div class="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group"> 
                        <img className="imglog" alt="" src= { LogoLogin } />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" required onChange={event => setCnpj(event.target.value)} class="form-control item" id="Cnpj" placeholder="CNPJ da Empresa"/>
                    </div>
                    <div class="form-group">
                        <input type="password" required onChange={event => setPassword(event.target.value)} class="form-control item" id="password" placeholder="Senha"/>
                    </div>                    
                                        
                    <div class="form-group">
                        <button type='submit' value='Entrar' class="btn btn-block create-account">Login</button>
                    </div>
                    <div class="form-group">
                       <a href="/" class="forgot">Esqueceu Sua Senha?</a>
                    </div>
                    <div class="form-group">
                       <a href="/cadastro/pj" class="forgot">Cadastre-se</a>
                    </div>
                </form>
                <div class="social-media">
                    <h5>Cadastre-se com sua mídia social</h5>
                    <div class="social-icons">
                            <a href="/"><i class="icon-social-google" title="Google"></i></a>
                    </div>
                </div>
            </div>
                
        </>
    )
}

export default Login;