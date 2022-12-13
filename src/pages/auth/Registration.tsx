import React, { useState } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

interface RegistrationModalProps {
  show: boolean | undefined;
  handleClose: () => void;
}

const RegistrationModal: React.FunctionComponent<RegistrationModalProps> = (
  props
) => {
  // Hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageUsername, setErrorMessageUsername] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Routing
  const navigate = useNavigate();

  // Functions

  /**
   * Returns a boolean value that indicates whether the entered username is valid or not.
   * @param usernameInput - Input String to be validated.
   * @returns - Boolean value of the validated Input String.
   */
  const usernameValid = (usernameInput: string): boolean => {
    const passwordRedExp: RegExp = /^[a-zA-Z0-9]{2,}$/g;
    return passwordRedExp.test(usernameInput);
  };

  /**
   * Returns a boolean value that indicates whether the entered email address is valid or not.
   * @param emailInput - Input String to be validated.
   * @returns - Boolean value of the validated Input String.
   */
  const emailValid = (emailInput: string): boolean => {
    const emailRegExp: RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    return emailRegExp.test(emailInput);
  };

  /**
   * Returns a boolean value that indicates whether the entered password is valid or not.
   * @param passwordInput - Input String to be validated.
   * @returns - Boolean value of the validated Input String.
   */
  const passwordValid = (passwordInput: string): boolean => {
    const passwordRedExp: RegExp = /^[a-zA-Z0-9]{6,}$/g;
    return passwordRedExp.test(passwordInput);
  };

  /**
   * Listener function of a username input and simultaneous validation of this input.
   * Everytime when the user types, the username state and the valdiation of the username input will be updated.
   * @param event - listener event of an HTMLInputElement.
   */
  const handleChangeUsernameInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(event.target.value);
    usernameValid(event.target.value)
      ? setErrorMessageUsername("")
      : setErrorMessageUsername(
          "Der Nutzername benötigt mindestens 2 Buchstaben"
        );
  };

  /**
   * Listener function of an email input and simultaneous validation of this input.
   * Everytime when the user types, the email state and the valdiation of the email input will be updated.
   * @param event - listener event of an HTMLInputElement.
   */
  const handleChangeEmailInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
    emailValid(event.target.value)
      ? setErrorMessageEmail("")
      : setErrorMessageEmail("Dies ist keine gültige Email-Adresse");
  };

  /**
   * Listener function of a password input and simultaneous validation of this input.
   * Everytime when the user types, the password state and the valdiation of the password input will be updated.
   * @param event - listener event of an HTMLInputElement.
   */
  const handleChangePasswordInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
    passwordValid(event.target.value)
      ? setErrorMessagePassword("")
      : setErrorMessagePassword("Das Password benötigt mindestens 6 Zeichen");
  };

  /**
   * Signes up a new user with his entries in the database.
   * This function will be triggered when the user clicks on the registration-form-button.
   * @param event - Formevent of the submit button of the registration form.
   */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: implementation of the registration logic

    if (
      usernameValid(username) &&
      emailValid(email) &&
      passwordValid(password)
    ) {
      setLoading(true);
      setTimeout(() => {
        console.log("Username: " + username);
        console.log("Email: " + email);
        console.log("Password: " + password);
        setLoading(false);
        props.handleClose();
        navigate("/home");
      }, 3000);

      resetUserInputs();
    }
  };

  /**
   * Resets the inputs of the registration modal.
   */
  const resetUserInputs = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  // Conditional rendering

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
                placeholder="Benutzername"
                value={username}
                onChange={handleChangeUsernameInput}
                required
              ></input>
            </div>

            <p className="reg-err">{errorMessageUsername}</p>

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
            <p className="reg-err">{errorMessageEmail}</p>

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
            <p className="reg-err">{errorMessagePassword}</p>

            {regButton}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegistrationModal;
