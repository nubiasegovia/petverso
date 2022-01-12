import React from 'react';
import './Devs.css';
import steffany from '../../assets/steffany.jpeg';
import nubia from '../../assets/nubia.jpeg';
import jaqueline from '../../assets/jaqueline.jpeg';
import fellipe from '../../assets/fellipe.jpeg';

const Devs = () => {
    return (
        <>
            <h1 className='destaque'>Desenvolvedores</h1>
                <div class="container mx-auto mt-4">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="carddev">
                    <img src="https://i.imgur.com/ZTkt4I5.jpg" class="carddev-img-top" alt="..."/>
                    <div class="carddev-body">
                        <h5 class="carddev-title">Juno</h5>
                            <h6 class="carddev-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="carddev-text">Pequeno resumo sobre o juno...."</p>
                            <a href="#" target="_blank" class="btndev mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/amorajuno" target="_blank" class="btndev "><i class="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                        <div class="col-md-4">
                    <div class="carddev">
                    <img src={ nubia } class="carddev-img-top" alt="..."/>
                    <div class="carddev-body">
                        <h5 class="carddev-title">Nubia Segovia</h5>
                            <h6 class="carddev-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="carddev-text">Pequeno resumo da Nubs...</p>
                        <a href="https://www.linkedin.com/in/nubiasegovia/" target="_blank" class="btndev  mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/niasegovia" target="_blank" class="btndev"><i class="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                            <div class="col-md-4">
                    <div class="carddev">
                    <img src={ steffany } class="carddev-img-top" alt="..."/>
                    <div class="carddev-body">
                        <h5 class="carddev-title">Steffany Sympson</h5>
                            <h6 class="carddev-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="carddev-text">Dev com sede de aprendizado e apaixonada pelo mundo da programação, pronta para explorar o que esse o universo Tech tem a oferecer. Mãe do Zeus, Billy, Horus, Thor e Urubuzinho.</p>
                        <a href="https://www.linkedin.com/in/steffany-sympson/" target="_blank" class="btndev mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/SteffanySympson" target="_blank" class="btndev "><i class="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                    </div>
                        
                        <div class="col-md-4">
                        <div class="carddev">
                    <img src={fellipe} class="carddev-img-top" alt="..."/>
                    <div class="carddev-body">
                        <h5 class="carddev-title">Fellipe Leal</h5>
                            <h6 class="carddev-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="carddev-text">Pequeno resumo do Lipe....</p>
                        <a href="#" target="_blank" class="btndev mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="#" target="_blank" class="btndev"><i class="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                        <div class="col-md-4">
                    <div class="carddev">
                    <img src={ jaqueline } class="carddev-img-top" alt="..."/>
                    <div class="carddev-body">
                        <h5 class="carddev-title">Jaqueline Pauxis</h5>
                            <h6 class="carddev-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="carddev-text">Paraense, Teacher Coding, analista devops FullStack - Amante do direito e antropologia.</p>
                        <a href="https://www.linkedin.com/in/jaquelinepauxis/" target="_blank" class="btndev mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/JaquelinePauxis" target="_blank" class="btndev"><i class="fab fa-github"></i> Github</a>
                    </div>
                    
                </div>
                    </div>
                    </div>
                    </div>
        </>
    )
}

export default Devs;