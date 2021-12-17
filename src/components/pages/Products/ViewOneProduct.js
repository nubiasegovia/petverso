import "./ViewOneProduct.css";
import Arranhador1 from "../../assets/arranhador1.jpg";
import Arranhador2 from "../../assets/arranhador2.jpg";


const Product = () => {
  /* const Test = {
        titulo: "",
        empresa: "",
    } */

  return (
    <div className="container">
      <div className="product-container">
        <div className="imgs-wrapper">
          <div className="images-container">
            <div className="imgs-col">
              <div className="row1">
                <img src={Arranhador1} alt="" />
              </div>
              <div className="row2">
              <img src={Arranhador2} alt="" />
              </div>
              <div className="row3">
                <img src={Arranhador2} alt="" />
              </div>
            </div>
            <div className="col img">
              <div className="row selected-img">
                <img src={Arranhador1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="infos-wrapper">
          <h3>Nome do produto</h3>
          <div className="company-info">
            <p>Vendido e entregue por NomeDaEmpresa</p>
          </div>
          <div className="description">
            <p>Breve descrição do produto. Allways wanting food ignore the squirrels, you'll never catch them anyway reaches under door into adjacent room when in doubt, wash yet naughty running cat. Allways wanting food ignore the squirrels.</p>
          </div>
        </div>
    </div>

    </div>
    
  );
};

export default Product;
