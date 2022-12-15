import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { RoutePath, routes } from "./components/sidebar/Routes";
import AuthenticationPage from "./pages/auth/Authentication";


export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  let isLoggedIn = true;

  let sideBar;

  if(isLoggedIn) {
    sideBar = <Sidebar></Sidebar>
  }

  return (
    <div className="main-container">
      <BrowserRouter>
        {sideBar}
        <Routes>
          <Route path="/auth" element={<AuthenticationPage />}></Route>;
          {routes.map((route) => (
            <Route
              index={RoutePath.HOME === route.path}
              path={route.path}
              element={<route.component />}
              key={route.name}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
