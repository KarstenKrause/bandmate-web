import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <div className="content-container">
              <h1>Bandmate</h1>
              <article>
                <p>Vernetze dich mit Bands und Musikern aus deiner Umgebung.</p>
              </article>
            </div>
          </aside>

          <div className="forms-container">
            <div className="login-container">
              <LoginPage />
              <div className="reg-container">
                <div className="divider">ODER</div>
                <p id="reg-p">Registrieren mit Email, Apple oder Google</p>
                <div className="reg-buttons-container">
                  <button className="reg-button">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </button>
                  <button className="reg-button">
                    <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
                  </button>
                  <button className="reg-button">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AuthenticationPage;
