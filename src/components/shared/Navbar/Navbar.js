import React from "react";
import './Navbar.css';
const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#" className="navbar-brand">Pet<b>Verso</b></a>  		
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                    <div className="navbar-nav">
                        <div className="nav-item dropdown">
                            <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Produtos</a>
                            <div className="dropdown-menu">					
                                <a href="#" className="dropdown-item">Produtos 1</a>
                                <a href="#" className="dropdown-item">Produtos 2</a>
                                <a href="#" className="dropdown-item">Produtos 3</a>
                                <a href="#" className="dropdown-item">Produtos 4</a>
                            </div>
                        </div>
                        {/* <div className="nav-item dropdown">
                            <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Serviços</a>
                            <div className="dropdown-menu">					
                                <a href="#" className="dropdown-item">Serviços 1</a>
                                <a href="#" className="dropdown-item">Serviços 2</a>
                                <a href="#" className="dropdown-item">Serviços 3</a>
                                <a href="#" className="dropdown-item">Serviços 4</a>
                            </div>
                        </div> */}
                        <a href="#" className="nav-item nav-link">Aprenda Mais</a>
                        
                    </div>
                    
                    <div className="navbar-nav ml-auto action-buttons">
                        <div className="nav-item dropdown">
                            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle mr-4">Login</a>
                            <div className="dropdown-menu action-form">
                                <form action="/examples/actions/confirmation.php" method="post">
                                    <p className="hint-text">Entre com sua conta de mídia social</p>
                                    <div className="form-group social-btn clearfix">
                                        <a href="#" className="btn btn-secondary facebook-btn float-left"><i className="fa fa-facebook"></i> Facebook</a>
                                    </div>
                                    <div className="or-seperator"><b>ou</b></div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" required="required" />
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block" value="Login" />
                                    <div className="text-center mt-2">
                                        <a href="#">Esqueceu sua senha?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle sign-up-btn">Entre</a>
                            <div className="dropdown-menu action-form">
                                <form action="/examples/actions/confirmation.php" method="post">
                                    <p className="hint-text">Preencha este formulário para criar sua conta!</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Usuário" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Senha" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirme a Senha" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check-label"><input type="checkbox" required="required" /> Li, aceito e concordo <a href="#">Termos &amp; Condições</a></label>
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block" value="Inscrever-se" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export  default Navbar;