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
import ShopCart from './components/pages/ShopCart/ShopCart';
import UserDashboard from './components/pages/Users/UserDashboard';


const App = () =>{
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/homeLogin" element={<HomeLogin/>} />
        <Route path="/login/user" element={<LoginUser/>} />
        <Route path="/login/seller" element={<LoginSeller/>} />
        <Route path="/cadastro/pf" element={<CadastroUser/>} />
        <Route path="/cadastro/pj" element={<CadastroVendedor/>} />
        <Route path="/cadastro/product" element={<CadastroProduto/>} />
        <Route path="/product" element={<ViewOneProduct />} />
        <Route path="/products/all" element={<ProductList />} />
        <Route path="/iniciativa" element={<Iniciativa/>} />
        <Route path="/dashSeller" element={<DashboardSeller/>} />
        {/* <Route path="/Devs" element={<Devs/>} /> */}
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/myaccount" element={<UserDashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
