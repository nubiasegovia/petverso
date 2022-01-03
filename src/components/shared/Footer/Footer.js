import React from 'react';


const Footer = () => {
    return (
    <>
        <div>
            <footer class="text-center text-lg-start bg-light text-muted">
                <section class="">
                    <div class="container text-center text-md-start mt-1">
                        <div class="row">
                            <div class="col-md-3 col-lg-1 col-xl-4 mx-auto mb-1">
                                <h6 class="text-uppercase fw-bold mb-3">
                                    <i class="fas fa-paw"></i> <i class="fas fa-heart"></i>  PetVerso  <i class="fas fa-heart"></i> <i class="fas fa-paw"></i>
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        
                            <div class="col-md-3 col-lg-1 col-xl-2 mx-auto mb-1">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Produtos
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Lorem ipsum</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Lorem ipsum</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Lorem ipsum</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Lorem ipsum</a>
                                </p>
                            </div>
                        
                            <div class="col-md-3 col-lg-1 col-xl-2 mx-auto mb-4">
                        
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Links Úteis
                                </h6>
                                <p>
                                    <i class="fab fa-android"></i><a href="#!" class="text-reset"> Devs</a>
                                </p>
                                <p>
                                    <i class="fas fa-headset"></i> <a href="#!" class="text-reset">Suporte</a>
                                </p>
                                <p>
                                    <i class="fas fa-hands-helping"></i> <a href="#!" class="text-reset">Ajuda</a>
                                </p>
                            </div>
                        
                            <div class="col-md-4 col-lg-1 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contato
                                </h6>
                                <p><i class="fas fa-home me-3"></i> Brasil</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    info@exemplo.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 55 21 9 9999-9999</p>
                                <p><i class="fas fa-print me-3"></i> + 55 21 9 9999-9999</p>
                            </div>
                        
                        </div>
                    </div>
                </section>
                
                <div class="text-center p-1">
                    <div class="text-center p-1">
                        <p class="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.</p>
                    </div>
                    <div class="text-center p-1">
                        <p class="copyright"> <i class="ion-ios-heart" aria-hidden="true"></i> by <a href="/">PetVerso</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </>
    )
}
export default Footer;