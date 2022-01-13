import React, { useContext } from 'react';
import './Login.css';
import LogoLogin from '../../assets/Login.png';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../shared/Providers/Providers';


const Login = () => {
    window.localStorage.removeItem("companyID");
    window.localStorage.removeItem("token");

    const[cnpj, setCnpj] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setUser} = useContext(GlobalContext)


    const handleSubmit = event =>{
        event.preventDefault();
        setUser(true);

        const login = {
            cnpj: cnpj,
            password: password
        }

        axios.post(`/auth/login-company`, login)
        .then(response =>{
                const token = response.data.token;
                const companyID = response.data.company.id;
                console.log(companyID)
                localStorage.setItem('companyID', companyID)
                localStorage.setItem('token', token)
                console.log(response)
        })
        navigate("/dashseller");

    }

    return (
        <>
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group"> 
                        <img className="imglog" alt="" src= { LogoLogin } />
                    </div>
                    
                    <div className="form-group">
                        <input type="text" required onChange={event => setCnpj(event.target.value)} className="form-control item" id="Cnpj" placeholder="CNPJ da Empresa"/>
                    </div>
                    <div className="form-group">
                        <input type="password" required onChange={event => setPassword(event.target.value)} className="form-control item" id="password" placeholder="Senha"/>
                    </div>                    
                                        
                    <div className="form-group">
                        <button type='submit' value='Entrar' className="btn btn-block create-account">Login</button>
                    </div>
                    <div className="form-group">
                       <a href="/" className="forgot">Esqueceu Sua Senha?</a>
                    </div>
                    <div className="form-group">
                       <a href="/cadastro/pj" className="forgot">Cadastre-se</a>
                    </div>
                </form>
                <div className="social-media">
                    <h5>Cadastre-se com sua mídia social</h5>
                    <div className="social-icons">
                            <a href="/"><i className="icon-social-google" title="Google"></i></a>
                    </div>
                </div>
            </div>
                
        </>
    )
}

export default Login;