import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import Home from './components/pages/Home/Home';
import Cadastro from './components/pages/Cadastros/HomeCadastro';
import CadastroUser from './components/pages/Cadastros/Usuario';
import CadastroVendedor from './components/pages/Cadastros/Vendedor';
import ProductList from './components/pages/Products/ProductList';
import Login from './components/pages/Login/Login';
import ViewOneProduct from './components/pages/Products/ViewOneProduct';
import CadastroProduto from './components/pages/Cadastros/Produtos';
import Iniciativa from './components/pages/Iniciativa/Iniciativa';




const App = () =>{
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/cadastro/pf" element={<CadastroUser/>} />
        <Route path="/cadastro/pj" element={<CadastroVendedor/>} />
        <Route path="/cadastro/product" element={<CadastroProduto/>} />
        <Route path="/product" element={<ViewOneProduct />} />
        <Route path="/product/all" element={<ProductList />} />
        <Route path="/iniciativa" element={<Iniciativa/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
