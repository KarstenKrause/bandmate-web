import React, { useState } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";

interface RegistrationModalProps {
  show: boolean | undefined;
  handleClose?: () => void;
}

const RegistrationModal: React.FunctionComponent<RegistrationModalProps> = (
  props
) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeUsernameInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(event.target.value);
  };

  const handleChangeEmailInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleChangePasswordInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: implementation of the registration logic
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);

    resetStates();
  };

  const resetStates = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        id="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="reg-modal-title">Registrieren</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="input-field">
              <i className="form-icons">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </i>

              <input
                placeholder="Nutzername"
                value={username}
                onChange={handleChangeUsernameInput}
                required
              ></input>
            </div>

            <div className="input-field">
              <i className="form-icons">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </i>

              <input
                placeholder="Email"
                value={email}
                onChange={handleChangeEmailInput}
                required
              ></input>
            </div>

            <div className="input-field">
              <i className="form-icons">
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
              </i>

              <input
                placeholder="Passwort"
                type="password"
                value={password}
                onChange={handleChangePasswordInput}
                required
              ></input>
            </div>

            <button className="form-button" type="submit">
              Registrieren
            </button>
            <p id="error-message">{errorMessage}</p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegistrationModal;
