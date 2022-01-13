import React from 'react';

const Cadastro = () => {
    return (
        <>
            <div className='fundohome'>
                <section>
                
                    <div className="container">
                        <div className="background-img">
                            
                        <div className="box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="content">
                            <h2>PetVerso </h2>
                            <p>O que você procura... Pelo bem de quem você ama!</p>
                            <a href="/Login/User"><button type="button" className="btn btn-outline-warning btn-rounded" data-mdb-ripple-color="dark"> Comprador </button></a>
                            <br />
                            <br />
                            
                            <a href="/Login/Seller"><button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark"> Vendedor </button></a>
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