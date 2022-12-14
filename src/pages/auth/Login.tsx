import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FunctionComponent = () => {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Routing
  const navigate = useNavigate();

  // Functions

  // TODO: emailValid and passwordValid are unnecessary when the firebase-service of the login is done!
  const emailValid = (emailInput: string): boolean => {
    const emailRegExp: RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    return emailRegExp.test(emailInput);
  };

  const passwordValid = (passwordInput: string): boolean => {
    const passwordRedExp: RegExp = /^[a-zA-Z0-9]{6,}$/g;
    return passwordRedExp.test(passwordInput);
  };

  /**
   * Listener function of an email input.
   * Everytime when the user types, the email state will be updated.
   * @param event - listener event of an HTMLInputElement.
   */
  const handleChangeEmailInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  /**
   * Listener function of an password input.
   * Everytime when the user types, the password state will be updated.
   * @param event - listener event of an HTMLInputElement.
   */
  const handleChangePasswordInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  /**
   * Signes in a  user with his entries in the database.
   * This function will be triggered when the user clicks on the login-form-button.
   * @param event - Formevent of the login button of the login form.
   */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: implementation of the login logic

    if (emailValid(email) && passwordValid(password)) {
      setLoading(true);
      setTimeout(() => {
        console.log("Email: " + email);
        console.log("Password: " + password);
        setLoading(false);
        navigate("/home");
      }, 3000);
    }

    emailValid(email) && passwordValid(password)
      ? setErrorMessage("")
      : setErrorMessage("Das Passwort oder die Email ist falsch");

    resetUserInputs();
  };

  /**
   * Resets the userinputs of the login form.
   */
  const resetUserInputs = () => {
    setEmail("");
    setPassword("");
  };

  // Conditional rendering
  let loginButton;

  if (!loading) {
    loginButton = (
      <button className="form-button" type="submit">
        Anmelden
      </button>
    );
  } else {
    loginButton = (
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
    <form onSubmit={onSubmit}>
      <div className="input-field">
        <i className="form-icons">
          <FontAwesomeIcon icon={faEnvelope} />
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
          <FontAwesomeIcon icon={faLock} />
        </i>

        <input
          placeholder="Passwort"
          type="password"
          value={password}
          onChange={handleChangePasswordInput}
          required
        ></input>
      </div>
      {loginButton}
      <p id="error-message">{errorMessage}</p>
    </form>
  );
};

export default LoginPage;
