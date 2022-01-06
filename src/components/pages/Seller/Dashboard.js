import React from 'react';
import Dogfood from '../../assets/dogfood.jpg';
import './Dashboard.css';

const DashboardSeller = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="form-head page-titles d-flex  align-items-center">
                    <div className="mr-auto  d-lg-block">
                        <h2 className="topo">Cadastros</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active "><a >Empresa Xyz</a></li>
                            <li className="breadcrumb-item"><a href="#">Produtos</a></li>
                        </ol>
                    </div>
                    <a href="/cadastro/product"  className="btn btn-primary rounded"> Novo Produto</a>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row border-bottom mx-0 pt-4 px-2 align-items-center">
                                    <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                                        <img className="mr-sm-4 mr-3 img-fluid rounded" width="90"alt="DexignZone" src = { Dogfood }/>
                                        <div className="media-body">
                                            <h3 className="fs-20 text-black font-w600 mb-1"> DogFood</h3>
                                            <span className="d-block mb-lg-0 mb-0">Alimento para cães, raças de pequeno porte. </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                                        <small className="mb-2 d-block">Categoria</small>
                                        <span className="text-black font-w600">Cães</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Valor</small>
                                        <span className="text-black font-w600">R$ 120,00</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Estoque</small>
                                        <span className="text-black font-w600">10 Unid</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Restrições</small>
                                        <span className="text-black font-w600">Não</span>
                                    </div>
                                    <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6 mb-sm-4 mb-4 d-flex ">
                                        <div className="dropdown ml-4 mt-auto mb-auto">
                                            <div className="btn-link" data-toggle="dropdown" aria-expanded="false">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                                            
                                                <a className="dropdown-item" href="#;"
                                                    routerLinkActive="router-link-active">Editar</a>
                                                <a className="dropdown-item" href="#;" data-toggle="modal"
                                                    data-target="#modalDeleteUser">Remover</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

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