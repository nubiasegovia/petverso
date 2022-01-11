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
                            <div class="card">
                    <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Juno</h5>
                            <h6 class="card-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="card-text">Pequeno resumo sobre o juno...."</p>
                            <a href="#" target="_blank" class="btn mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/amorajuno" target="_blank" class="btn "><i class="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                        <div class="col-md-4">
                    <div class="card">
                    <img src={ nubia } class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Nubia Segovia</h5>
                            <h6 class="card-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="card-text">Pequeno resumo da Nubs...</p>
                        <a href="https://www.linkedin.com/in/nubiasegovia/" target="_blank" class="btn  mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/niasegovia" target="_blank" class="btn"><i class="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                            <div class="col-md-4">
                    <div class="card">
                    <img src={ steffany } class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Steffany Sympson</h5>
                            <h6 class="card-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="card-text">Dev com sede de aprendizado e apaixonada pelo mundo da programação, pronta para explorar o que esse o universo Tech tem a oferecer. Mãe do Zeus, Billy, Horus, Thor e Urubuzinho.</p>
                        <a href="https://www.linkedin.com/in/steffany-sympson/" target="_blank" class="btn mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/SteffanySympson" target="_blank" class="btn "><i class="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                    </div>
                        
                        <div class="col-md-4">
                        <div class="card">
                    <img src={fellipe} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Fellipe Leal</h5>
                            <h6 class="card-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="card-text">Pequeno resumo do Lipe....</p>
                        <a href="#" target="_blank" class="btn mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="#" target="_blank" class="btn"><i class="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                        <div class="col-md-4">
                    <div class="card">
                    <img src={ jaqueline } class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Jaqueline Pauxis</h5>
                            <h6 class="card-subtitle mb-2 text-muted">FullStack</h6>
                        <p class="card-text">Paraense, Teacher Coding, analista devops FullStack - Amante do direito e antropologia.</p>
                        <a href="https://www.linkedin.com/in/jaquelinepauxis/" target="_blank" class="btn mr-2"><i class="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/JaquelinePauxis" target="_blank" class="btn"><i class="fab fa-github"></i> Github</a>
                    </div>
                    
                </div>
                    </div>
                    </div>
                    </div>
        </>
    )
}

export default Devs;