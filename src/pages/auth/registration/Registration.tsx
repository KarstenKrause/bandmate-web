import React, { useState } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";

interface RegistrationModalProps {
  show: boolean | undefined;
  handleClose: () => void;
}


const RegistrationModal: React.FunctionComponent<RegistrationModalProps> = (
  props
) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    setTimeout(() => {
      console.log("Username: " + username);
      console.log("Email: " + email);
      console.log("Password: " + password);
      setLoading(false);
      props.handleClose();
    }, 3000);

    resetStates();
  };

  const resetStates = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  let regButton;

  if (!loading) {
    regButton = (
      <button className="form-button" type="submit">
        Registrieren
      </button>
    );
  } else {
    regButton = (
      <div className="form-button">
        <TailSpin
          height="25"
          width="25"
          color="white"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="spinner"
          visible={loading}
        />
      </div>
    );
  }

  
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={true}
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

            {regButton}
            <p id="error-message">{errorMessage}</p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegistrationModal;
