import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import Home from './components/pages/Home/Home';
import CadastroUser from './components/pages/Cadastros/Usuario';



const App = () =>{
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<CadastroUser/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
