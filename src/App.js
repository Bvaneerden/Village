import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import SignUp from './components/User/SignUp'
import Login from './components/User/Login'
import css from './components/css/main.css'

import Home from './components/Home'
import Main from './components/Main'
import useToken from './components/User/useToken';
import Medications from './components/Medications';
import EditMedication from './components/EditMedication';



function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login 
    setToken={setToken}
     />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
      <div className='heading'>
        <div className='title'>
          <h1 className='welcome'>Welcome to the your Village</h1>
          
          <nav className='topnav'>
            <ul className='navlist'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/main">Main</Link></li>
              <li><Link to="/signUp">Sign Up</Link></li>
              <li><Link to="/login">Log in</Link></li>
              <li><Link to="/medications">Medications</Link></li>
            </ul>
          </nav>
          
        </div>

        <div className='emergency'>
          <h4 className='emergencyheading'>Emergency Information</h4>
          <ul className='emergencylist'>
            <li><strong>13 11 26 - Poisons Info</strong></li>
            <li><strong>1300 60 60 24 - Nurse On Call</strong></li>
            <li><strong>000 - Ambulance</strong></li>
          </ul>
        </div>
      </div>
      
    
        <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='main' element={<Main />}></Route>
        <Route path='signUp' element={<SignUp />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='medications' element={<Medications />}></Route>
        <Route path='editmedication' element={<EditMedication />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;