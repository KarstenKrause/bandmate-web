import React from "react";
import LoginPage from "./login/Login";
import RegistrationPage from "./registration/Registration";
import "./style/authentication.css";

interface Props {}
interface State {}

class AuthenticationPage extends React.Component<Props, State> {
  render() {
    return (
      <main>
        <div className="container">
          <aside>
            <div className="content-container">sdfsfdsf</div>
          </aside>

          <div className="forms-container">
            <div className="login-container">
              <LoginPage />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AuthenticationPage;
