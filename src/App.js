import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import Home from './components/pages/Home/Home';
import CadastroUser from './components/pages/Cadastros/Usuario';
import CadastroVendedor from './components/pages/Cadastros/Vendedor';



const App = () =>{
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro/pj" element={<CadastroUser/>} />
        <Route path="/cadastro/pf" element={<CadastroVendedor/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
