<div className="container-fluid">
                <div className="form-head page-titles d-flex  align-items-center">
                    <div className="mr-auto  d-lg-block">
                        <h2 className="topo">Cadastros</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active "><a >Empresa PetVerso</a></li>
                            <li className="breadcrumb-item"><a href="#">Produtos</a></li>
                        </ol>
                    </div>
                    <a href="/cadastro/product"  className="btn btn-primary rounded"> Novo Produto</a>
                </div>

                <div className="cardDashB row">
                    <div className="col-xl-10">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row border-bottom mx-0 pt-4 px-2 align-items-center">
                                    <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                                        <img className="mr-sm-4 mr-3 img-fluid rounded" width="200"alt="DexignZone" src = { Dogfood }/>
                                        <div className="media-body">
                                            <h3 className="fs-20 text-black font-w600 mb-2"> DogFood</h3>
                                            <span className="d-block mb-lg-0 mb-3">Comidas Saudáveis e Saborosas Para Cães Feitas Sem Adições de Conservantes ou Corantes. Trabalhamos Apenas Com Ingredientes Saudáveis e de Alto Valor Nutricional. Confira! Comidas Super Saborosas. Seu Pet Mais Saudável. </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                                        <small className="mb-2 d-block">Categoria</small>
                                        <span className="text-black font-w600">Cães</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Valor</small>
                                        <span className="text-black font-w600">R$ 50,00</span>
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
                
                <div className="cardDashB row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row border-bottom mx-0 pt-4 px-2 align-items-center">
                                    <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                                        <img className="mr-sm-4 mr-3 img-fluid rounded" width="90"alt="DexignZone" src = { Food }/>
                                        <div className="media-body">
                                            <h3 className="fs-20 text-black font-w600 mb-1"> PetFood</h3>
                                            <span className="d-block mb-lg-0 mb-0">AComidas Saudáveis e Saborosas Para Pets Feitas Sem Adições de Conservantes ou Corantes. Trabalhamos Apenas Com Ingredientes Saudáveis e de Alto Valor Nutricional.  </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                                        <small className="mb-2 d-block">Categoria</small>
                                        <span className="text-black font-w600">Cães / Gatos</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Valor</small>
                                        <span className="text-black font-w600">R$ 60,00</span>
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

                <div className="cardDashB row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row border-bottom mx-0 pt-4 px-2 align-items-center">
                                    <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                                        <img className="mr-sm-4 mr-3 img-fluid rounded" width="90"alt="DexignZone" src = { Casinha }/>
                                        <div className="media-body">
                                            <h3 className="fs-20 text-black font-w600 mb-1"> Casinha Transporte</h3>
                                            <span className="d-block mb-lg-0 mb-0">A caixa de transporte para cachorro é muito importante para manter o animal seguro em viagens de carro, idas ao veterinário, além de ser obrigatória para viagens aéreas. A caixa de transporte para cachorro garante a segurança do animal e a tranquilidade do tutor.  </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                                        <small className="mb-2 d-block">Categoria</small>
                                        <span className="text-black font-w600">Cães / Gatos</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Valor</small>
                                        <span className="text-black font-w600">R$ 280,00</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Estoque</small>
                                        <span className="text-black font-w600">8 Unid</span>
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

                <div className="cardDashB row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row border-bottom mx-0 pt-4 px-2 align-items-center">
                                    <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                                        <img className="mr-sm-4 mr-3 img-fluid rounded" width="90"alt="DexignZone" src = { Catfood }/>
                                        <div className="media-body">
                                            <h3 className="fs-20 text-black font-w600 mb-1"> CatFood</h3>
                                            <span className="d-block mb-lg-0 mb-0">Gatos são animais carinhosos, divertidos e geralmente comilões, pois não dispensam uma alimentação de qualidade e diferentes opções de petiscos. A fim de oferecer uma ração para gato com todos os nutrientes essenciais, é importante escolher alimentos que ofereçam energia ao pet.</span>
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

                <div className="cardDashB row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row border-bottom mx-0 pt-4 px-2 align-items-center">
                                    <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media">
                                        <img className="mr-sm-4 mr-3 img-fluid rounded" width="90"alt="DexignZone" src = { DogHouse }/>
                                        <div className="media-body">
                                            <h3 className="fs-20 text-black font-w600 mb-1"> DogHouse </h3>
                                            <span className="d-block mb-lg-0 mb-0">A casinha de cachorro é um artigo muito importante para nossos amigos peludos. Eles a vem como uma toca que os deixa seguros e confortáveis. A escolha da casinha de cachorro deve ser feita de acordo com o ambiente em que será colocada e o tamanho do animal. O cachorro precisa ficar de pé e girar em torno do próprio corpo com facilidade. Entretanto, se a casinha de cachorro for muito grande para o porte do animal, ele pode não se sentir seguro e até rejeitá-la. </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3 text-lg-center">
                                        <small className="mb-2 d-block">Categoria</small>
                                        <span className="text-black font-w600">Cães / Gatos</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Valor</small>
                                        <span className="text-black font-w600">R$ 240,00</span>
                                    </div>
                                    <div className="col-xl-2 col-xxl-3 col-lg-6 col-sm-4 mb-sm-4 mb-3">
                                        <small className="mb-2 d-block">Estoque</small>
                                        <span className="text-black font-w600">5 Unid</span>
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

                <br />

            </div>