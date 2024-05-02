import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../Compontes/Home'
import Tour from '../Compontes/Tour'
import Login from '../Compontes/Login'
import Register from '../Compontes/Register';
// import NavBar from '../Compontes/NavBar';

const Routing = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<NavBar/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/Tour" element={<Tour/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default Routing;
