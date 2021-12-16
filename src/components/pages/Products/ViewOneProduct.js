import "./Products.css";


const Product = () => {
  /* const Test = {
        img1: "",
        img2: "",
        img3: "",
        titulo: "",
        empresa: "",
    } */

  return (
    <div className="container">
      <div className="wrapper">
        <div className="row align-items-start">
          <div className="col imgs">
            Coluna 1<div className="row1">Linha 1</div>
            <div className="row2">Linha 2</div>
            <div className="row3">Linha 3</div>
          </div>
          <div className="col img">Coluna 2</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
