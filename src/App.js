import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import Home from './components/pages/Home/Home';
import CadastroUser from './components/pages/Users/Usuario';
import CadastroVendedor from './components/pages/Seller/Vendedor';
import ProductList from './components/pages/ProductList/ProductList';
import HomeLogin from './components/pages/Login/HomeLogin';
import LoginUser from './components/pages/Users/Login';
import LoginSeller from './components/pages/Seller/Login';
import ViewOneProduct from './components/pages/ViewOneProduct/ViewOneProduct';
import CadastroProduto from './components/pages/Cadastros/Produtos';
import Iniciativa from './components/pages/Iniciativa/Iniciativa';
import DashboardSeller from './components/pages/Seller/Dashboard';
import Devs from './components/pages/Devs/Devs';




const App = () =>{
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/HomeLogin" element={<HomeLogin/>} />
        <Route path="/Login/User" element={<LoginUser/>} />
        <Route path="/Login/Seller" element={<LoginSeller/>} />
        <Route path="/cadastro/pf" element={<CadastroUser/>} />
        <Route path="/cadastro/pj" element={<CadastroVendedor/>} />
        <Route path="/cadastro/product" element={<CadastroProduto/>} />
        <Route path="/product" element={<ViewOneProduct />} />
        <Route path="/products/all" element={<ProductList />} />
        <Route path="/iniciativa" element={<Iniciativa/>} />
        <Route path="/DashSeller" element={<DashboardSeller/>} />
        <Route path="/Devs" element={<Devs/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
