import React from 'react';
import Dogfood from '../../assets/dogfood.jpg';
import Food from '../../assets/18.jpg';
import Casinha from '../../assets/19.jpg';
import Catfood from '../../assets/20.jpg';
import DogHouse from '../../assets/21.jpg';
import './Dashboard.css';

const DashboardSeller = () => {
    id = localStorage.getItem('id')

    return (
        <>
            <div>
                {/* <ol className="breadcrumb">
                    <li className="breadcrumb-item active "><a >Empresa PetVerso</a></li>
                    <li className="breadcrumb-item"><a href="#">Produtos</a></li>
                </ol> */}
            
                <div className="cardDashboardSeller">

                        <h3 className='destaque'>Seus Produtos Cadastrados</h3>
                        <br />
                        <div class="cardDash">
                            <img src={Dogfood} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Dogfood</h5>
                                <p class="card-text">Comidas Saudáveis e Saborosas Para Cães Feitas Sem Adições de Conservantes ou Corantes. Trabalhamos Apenas Com Ingredientes Saudáveis e de Alto Valor Nutricional. Confira! Comidas Super Saborosas. Seu Pet Mais Saudável.</p>
                            </div>
                            <div class="card-body">
                                <a className='cartDash'>Valor:</a>
                                <a >R$ 50,00</a>
                            </div>
                            <div class="card-body">
                                <a  class="cartDash">Restrição:</a>
                                <a  class="cartDash">Não</a>
                            </div>
                            <div class="card-body">
                                <a href="#" class="btnDash">Editar</a>
                                <a className="btnDash2" href="#;" data-toggle="modal" data-target="#modalDeleteUser">Remover</a>
                            </div>
                        </div>
                </div>
                <br />

                <div className="modal fade" id="modalDeleteUser" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Remover Produto</h5>
                                <button type="button" className="close" data-dismiss="modal"><span>×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Tem certeza que deseja remover o produto da sua base?</p>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger light" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" >Remover</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </>
    )
}

export default DashboardSeller;