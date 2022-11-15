import React from "react";
import LoginPage from "./login/Login";
import RegistrationPage from "./registration/Registration";
import "./style/authentication.css";

interface Props {}
interface State {}

class AuthenticationPage extends React.Component<Props, State> {
  render() {
    return (
      <div className="container">
        <div className="forms-container">
          <div className="login-container">
            <LoginPage />;
          </div>
          <div className="registration-container">
            <RegistrationPage></RegistrationPage>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthenticationPage;
