import React from 'react';


const Footer = () => {
    return (
    <>
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-1">
                        <div className="row">
                            <div className="col-md-3 col-lg-1 col-xl-4 mx-auto mb-1">
                                <h6 className="text-uppercase fw-bold mb-3">
                                    <i className="fas fa-paw"></i> <i className="fas fa-heart"></i>  PetVerso  <i className="fas fa-heart"></i> <i className="fas fa-paw"></i>
                                </h6>
                                <p>
                                Um universo de produtos para o seu melhor amigo. Ajudando pequenas empresas e produtores a dar o suporte que todo tutor de pet precisa nessa incrivel jornada!
                                </p>
                            </div>
                        
                        
                            <div className="col-md-3 col-lg-1 col-xl-2 mx-auto mb-4">
                        
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Links Úteis
                                </h6>
                                <p>
                                    <i className="fab fa-android"></i><a href="/devs" className="text-reset"> Devs</a>
                                </p>
                                <p>
                                    <i className="fas fa-headset"></i> <a href="/suport" className="text-reset">Suporte</a>
                                </p>
                                <p>
                                    <i className="fas fa-hands-helping"></i> <a href="https://google.com" target="_blank" className="text-reset">Ajuda</a>
                                </p>
                            </div>
                        
                            <div className="col-md-4 col-lg-1 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contato
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Brasil</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    suporte@petverso.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 55 21 9 9999-9999</p>
                                <p><i className="fas fa-print me-3"></i> + 55 21 9 9999-9999</p>
                            </div>
                        
                        </div>
                    </div>
                </section>
                
                <div className="text-center p-1">
                    <div className="text-center p-1">
                        <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.</p>
                    </div>
                    <div className="text-center p-1">
                        <p className="copyright"> <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="/">PetVerso</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </>
    )
}
export default Footer;