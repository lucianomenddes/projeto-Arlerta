import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignInSide from './pages/SignInSide';
import SignUpSide from './pages/SignUpSide';
 
import Wellcome from './components/Wellcome';
 
 
import NavBar from './components/Navbar';
import Layout from './components/Layout';
import CreateEnvironmente from './components/CreateEnvironment';

function App() {
  return (
    <div className="App">
      <NavBar/>
       <Routes>
          <Route path="/" element={<SignInSide/>}/>
          <Route path="/signup" element={<SignUpSide/>}/> 
          <Route path="/home" element={[<Layout/>,<Wellcome/>]}/> 
          <Route path="/createEnvironment" element={[<Layout/>,<CreateEnvironmente/>]}/> 
       </Routes>
    </div>
  );
}

export default App;
