import React from 'react';
import './Suport.css';
import Suporte from '../../assets/treinamento.png';
import Paw from '../../assets/paw.png';

const Suport = () => {
    return (
        <>
            <div className="suportPet" >
                <h3 className='destaqueDicas'>Central de Suporte PetVerso</h3>
                <img className="treino" src={Suporte}/>
                <div className="treinoSorry">
                    <img className="Paw" src={Paw}/>
                    <p className="suportSorry">Desculpe! Ainda estou em treinamento!</p>
                    <img className="Paw" src={Paw}/>
                </div>

                    


            </div>
        </>
    )
}

export default Suport;