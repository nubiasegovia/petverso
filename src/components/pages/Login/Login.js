import React from 'react';
import './Login.css';
import LogoLogin from '../../assets/Login.png';

const Login = () => {
    return (
        <>
            <div class="registration-form">
                <form>
                    <div className="form-group"> 
                        <img className="imglog" src= { LogoLogin } />
                    </div>
                    
                    <div class="form-group">
                        <input type="text" class="form-control item" id="email" placeholder="E-mail"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control item" id="password" placeholder="Senha"/>
                    </div>                    
                                        
                    <div class="form-group">
                        <button type="button" class="btn btn-block create-account">Login</button>
                    </div>
                    <div class="form-group">
                       <a href="#" class="forgot">Esqueceu Sua Senha?</a>
                    </div>
                    <div class="form-group">
                       <a href="/cadastro" class="forgot">Cadastre-se</a>
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

export default Login;