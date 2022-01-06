import React from "react";
import Iniciativa1 from "../../assets/11.png";
import '../Cadastros/Cadastros.css';

const Iniciativa = () => {
    return (
        <>
            <div >
                <div className="topo">
                    <h4 className="titulo">Nossa Iniciativa PetVerso</h4>
                    <img ClassName="imginit" alt="" src={ Iniciativa1 } />
                </div>
            </div>
        </>
    )
}

export default Iniciativa;
