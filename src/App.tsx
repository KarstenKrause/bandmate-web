import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { RoutePath, routes } from "./components/sidebar/Routes";
import AuthenticationPage from "./pages/auth/Authentication";

export interface IApplicationProps { }

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  let isLoggedIn = true; // TODO: handle this state es environment styte with redux!

  let loggedInContainer = (
    <div className="main-container">
      <BrowserRouter>
        <Sidebar />
        <div className="page-container">
          <Routes>
            {routes.map((route) => (
              <Route
                index={RoutePath.HOME === route.path}
                path={route.path}
                element={<route.component />}
                key={route.name}
              />
            ))}
            <Route path="/"
              element={<Navigate to="/home" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

  let loggedOutContainer = (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthenticationPage />} />
      </Routes>
    </BrowserRouter>
  );

  let mainContainer;

  if (isLoggedIn) {
    mainContainer = loggedInContainer;
  } else {
    mainContainer = loggedOutContainer;
  }

  return (
    <div>
      {mainContainer}
    </div>
  )
};

export default App;
