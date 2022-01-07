import React from 'react';
import './Devs.css';
import img from '../../assets/insta4.jpg';

const Devs = () => {
    return (
        <>
            <div>
                <h1 className='destaque'>Desenvolvedores</h1>
                <div class="container mx-auto mt-4">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <img src={img} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Dev FullStack</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">xxxxxxxxx</h6>
                                    <p class="card-text">Um pouco sobre esse Dev</p>
                                    <a href="#" class="btn mr-1"><i class="fas fa-link"></i> MyPage</a>
                                    <a href="#" class="btn "><i class="fab fa-github"></i> Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>               
        </>
    )
}

export default Devs;