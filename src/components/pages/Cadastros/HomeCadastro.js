import React from 'react';

const Cadastro = () => {
    return (
        <>
            <div className='fundohome'>
                <section>
                
                    <div class="container">
                        <div class="background-img">
                            
                        <div class="box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div class="content">
                            <h2>PetVerso </h2>
                            <p><a>O que você procura... Quem você procura...Pelo bem de quem você ama!</a></p>
                            <a target="_blank" href="/cadastro/pf"><button type="button" className="btn btn-outline-warning btn-rounded" data-mdb-ripple-color="dark"> Comprador </button></a>
                            <br />
                            <br />
                            
                            <a target="_blank" href="/cadastro/pj"><button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark"> Vendedor </button></a>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                    </div>
                </section>
            </div>
        </>
    )
}

export default Cadastro;