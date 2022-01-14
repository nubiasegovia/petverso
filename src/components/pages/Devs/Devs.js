import React from 'react';
import './Devs.css';
import steffany from '../../assets/steffany.jpeg';
import nubia from '../../assets/nubia.jpeg';
import jaqueline from '../../assets/jaqueline.jpeg';
import fellipe from '../../assets/fellipe.jpeg';
import juno from '../../assets/juno.jpg'; 

const Devs = () => {
    return (
        <>
            <h1 className='destaque'>Desenvolvedores</h1>
                <div className="container mx-auto mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="carddev">
                    <img src={juno} className="carddev-img-top" alt="..."/>
                    <div className="carddev-body">
                        <h5 className="carddev-title">Juno</h5>
                            <h6 className="carddev-subtitle mb-2 text-muted">FullStack</h6>
                            <br/>
                        {/* <p className="carddev-text">Pequeno resumo sobre o juno...."</p> */}
                            <a href="#" target="_blank" className="btndev mr-2"><i className="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/amorajuno" target="_blank" className="btndev "><i className="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                        <div className="col-md-4">
                    <div className="carddev">
                    <img src={ nubia } className="carddev-img-top" alt="..."/>
                    <div className="carddev-body">
                        <h5 className="carddev-title">Nubia Segovia</h5>
                            <h6 className="carddev-subtitle mb-2 text-muted">FullStack</h6>
                            <br/>
                        {/* <p className="carddev-text">Pequeno resumo da Nubs...</p> */}
                        <a href="https://www.linkedin.com/in/nubiasegovia/" target="_blank" className="btndev  mr-2"><i className="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/niasegovia" target="_blank" className="btndev"><i className="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                            <div className="col-md-4">
                    <div className="carddev">
                    <img src={ steffany } className="carddev-img-top" alt="..."/>
                    <div className="carddev-body">
                        <h5 className="carddev-title">Steffany Sympson</h5>
                            <h6 className="carddev-subtitle mb-2 text-muted">FullStack</h6>
                            <br />
                        {/* <p className="carddev-text">Dev com sede de aprendizado e apaixonada pelo mundo da programação, pronta para explorar o que esse o universo Tech tem a oferecer. Mãe do Zeus, Billy, Horus, Thor e Urubuzinho.</p> */}
                        <a href="https://www.linkedin.com/in/steffany-sympson/" target="_blank" className="btndev mr-2"><i className="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/SteffanySympson" target="_blank" className="btndev "><i className="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                    </div>
                        
                        <div className="col-md-4">
                        <div className="carddev">
                    <img src={fellipe} className="carddev-img-top" alt="..."/>
                    <div className="carddev-body">
                        <h5 className="carddev-title">Fellipe Leal</h5>
                            <h6 className="carddev-subtitle mb-2 text-muted">FullStack</h6>
                            <br/>
                        {/* <p className="carddev-text">Pequeno resumo do Lipe....</p> */}
                        <a href="#" target="_blank" className="btndev mr-2"><i className="fas fa-link"></i> Linkedin</a>
                        <a href="#" target="_blank" className="btndev"><i className="fab fa-github"></i> Github</a>
                    </div>
                    </div>
                        </div>    
                        <div className="col-md-4">
                    <div className="carddev">
                    <img src={ jaqueline } className="carddev-img-top" alt="..."/>
                    <div className="carddev-body">
                        <h5 className="carddev-title">Jaqueline Pauxis</h5>
                            <h6 className="carddev-subtitle mb-2 text-muted">FullStack</h6>
                            <br/>
                        {/* <p className="carddev-text">Paraense, Teacher Coding, analista devops FullStack - Amante do direito e antropologia.</p> */}
                        <a href="https://www.linkedin.com/in/jaquelinepauxis/" target="_blank" className="btndev mr-2"><i className="fas fa-link"></i> Linkedin</a>
                        <a href="https://github.com/JaquelinePauxis" target="_blank" className="btndev"><i className="fab fa-github"></i> Github</a>
                    </div>
                    
                </div>
                    </div>
                    </div>
                    </div>
        </>
    )
}

export default Devs;