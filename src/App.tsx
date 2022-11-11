import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/Login';
import RegistrationPage from './pages/registration/Registration';
import HomePage from './pages/home/Home';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

