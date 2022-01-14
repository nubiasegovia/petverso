import React, { useContext } from 'react';
import './Login.css';
import LogoLogin from '../../assets/13.png';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../shared/Providers/Providers';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(GlobalContext);
    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault();
        
        const login = {
            email: email,
            password: password
        }
        
        axios.post(`/auth/login`, login)
        .then(response => {
            const token = response.data.token;
            const id = response.data.user.id;
            console.log(id)
            localStorage.setItem('userID', id)
            localStorage.setItem('token', token)
            console.log(response)
            setUser(true);
        })
        navigate("/products/all");
    }

    return (
        <>
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <img className="imglog" alt="" src={LogoLogin} />
                    </div>

                    <div className="form-group">
                        <input type="text" required onChange={event => setEmail(event.target.value)} className="form-control item" id="email" placeholder="E-mail" />
                    </div>
                    <div className="form-group">
                        <input type="password" required onChange={event => setPassword(event.target.value)} className="form-control item" id="password" placeholder="Senha" />
                    </div>

                    <div className="form-group">
                        <button type='submit' value='Entrar' className="btn btn-block create-account">Login</button>
                    </div>
                    <div className="form-group">
                        <a href="/" className="forgot">Esqueceu Sua Senha?</a>
                    </div>
                    <div className="form-group">
                        <a href="/cadastro/pf" className="forgot">Cadastre-se</a>
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