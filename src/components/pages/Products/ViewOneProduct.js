import "./Products.css";
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
          <p>Teste</p>
        </div>
    </div>

    </div>
    
  );
};

export default Product;
