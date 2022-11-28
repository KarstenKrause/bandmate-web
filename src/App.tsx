import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/auth/registration/Registration";
import HomePage from "./pages/home/Home";
import AuthenticationPage from "./pages/auth/Authentication";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<AuthenticationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
