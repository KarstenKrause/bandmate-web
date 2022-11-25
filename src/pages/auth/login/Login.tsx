import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginPage: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    // TODO: implementation of the login logic
    // debug
    /*
    console.log("Username: " + email);
    console.log("Passwort: " + password);
    console.log(
      "Beide Inputs erfolgreich validiert?: " + validateForm(email, password)
    );
    */

    validateForm(email, password)
      ? setErrorMessage("")
      : setErrorMessage("Email oder Passwort ist falsch");

    resetStates();
  };

  const resetStates = () => {
    setEmail("");
    setPassword("");
  };

  const validateForm = (emailInput: string, passwordInput: string): boolean => {
    const emailValide: RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

    const passwordValide: RegExp = /^[a-zA-Z0-9]{6,}$/g;

    return emailValide.test(emailInput) && passwordValide.test(passwordInput);
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h2 className="title">Anmelden</h2>
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
        Login
      </button>
      <p id="error-message">{errorMessage}</p>
    </form>
  );
};

export default LoginPage;
