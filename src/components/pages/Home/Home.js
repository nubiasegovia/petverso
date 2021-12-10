import React from 'react';
import './Home.css';



const Home = () => {
    return (
        <>
            <div className='fundohome'>
                <section>
                <div class="container justify-content-center">
                    <div class="row">
                        <div class="col-md-10 search">
                            <div class="input-group mb-3"> <input type="text" class="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div class="input-group-append"> <button class="btn btn-outline-warning btn-sm" type="button"><i class="fa fa-search"></i></button> </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <button type="button" className="btn btn-outline-warning btn-rounded" data-mdb-ripple-color="dark"> Comprador </button>
                            <br />
                            <br />
                            
                            <button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark"> Vendedor </button>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home;