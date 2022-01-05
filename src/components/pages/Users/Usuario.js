import React, { Component, useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import './Usuario.css';
import Cadastro from '../../assets/cadastro.png';
import apiUrl from '../../services/auth.service';
import axios from 'axios';
import { event } from 'jquery';


export default class CadastroUser extends React.Component {
    
    constructor(props){
      super(props)
      this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            passwordConfirmation: '',
            cep: '',
            cpf: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            birthday:''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation,
            cep: this.state.cep,
            cpf: this.state.cpf,
            phone: this.state.phone,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            birthday: this.state.birthday
        };
            axios.post(`${apiUrl}/user/registrar`, { user })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                
        
    }

    render() {
        return (
            <>
                <div class="registration-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group"> 
                            <img className="imgcad" src= { Cadastro } />
                        </div>
                        <div class="form-group">
                            <input type="text" value={this.state.name} onChange={e => this.setState({name : e.target.value})}  class="form-control item" id="name" placeholder="Nome Completo"/>
                        </div>
                        <div class="form-group">
                            <input type="text" value={this.state.username} onChange={e => this.setState({username : e.target.value})} class="form-control item" id="username" placeholder="Usuário"/>
                        </div>
                        <div class="form-group">
                            <input type="password" value={this.state.password} onChange={e => this.setState({password : e.target.value})} class="form-control item" id="password" placeholder="Senha"/>
                        </div>  
                        <div class="form-group">
                            <input type="password" value={this.state.passwordConfirmation} onChange={e => this.setState({passwordConfirmation : e.target.value})} class="form-control item" id="passwordConfirmation" placeholder="Confirmação de Senha"/>
                        </div>                  
                        <div class="form-group">
                            <input type="text" value={this.state.email} onChange={e => this.setState({email : e.target.value})} class="form-control item" id="email" placeholder="E-mail"/>
                        </div>
                        <div class="form-group">
                            <input type="text" value={this.state.phone} onChange={e => this.setState({phone : e.target.value})} class="form-control item" id="phone" placeholder="Nº de Telefone/Whatsapp"/>
                        </div>
                        
                        <div class="form-group">
                            <input type="text"  value={this.state.birthday} onChange={e => this.setState({birthday : e.target.value})}class="form-control item" id="birthday" placeholder="Data de Nascimento"/>
                        </div>
                        <div class="form-group">
                            <input type="text" value={this.state.cpf} onChange={e => this.setState({cpf : e.target.value})} class="form-control item" id="CPF" placeholder="CPF"/>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Endereço</label>
                            <input type="text" value={this.state.address1} onChange={e => this.setState({address1 : e.target.value})} class="form-control" id="address1" placeholder="Dog Street, nº 0"/>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Complemento</label>
                            <input type="text" value={this.state.address2} onChange={e => this.setState({address2 : e.target.value})} class="form-control" id="address2" placeholder="Casa, Apto, etc."/>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputCity">Cidade</label>
                            <input type="text"  value={this.state.city} onChange={e => this.setState({city : e.target.value})}class="form-control" id="inputCity"/>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="inputCity">Estado</label>
                            <input type="text" value={this.state.state} onChange={e => this.setState({state : e.target.value})}class="form-control" id="inputCity"/>
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputCEP">CEP</label>
                            <input type="text" value={this.state.cep} onChange={e => this.setState({cep : e.target.value})} class="form-control" id="inputCEP"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit"  value='Enviar' class="btn btn-block create-account">Criar Conta</button>
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
}