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

    validEmail(email) && validPassword(password)
      ? setErrorMessage("")
      : setErrorMessage("Das Passwort oder die Email ist falsch");

    resetStates();
  };

  const resetStates = () => {
    setEmail("");
    setPassword("");
  };

  const validEmail = (emailInput: string): boolean => {
    const emailRegExp: RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    return emailRegExp.test(emailInput);
  };

  const validPassword = (passwordInput: string): boolean => {
    const passwordRedExp: RegExp = /^[a-zA-Z0-9]{6,}$/g;
    return passwordRedExp.test(passwordInput);
  };

  return (
    <form onSubmit={onSubmit}>
      
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
        Anmelden
      </button>
      <p id="error-message">{errorMessage}</p>
    </form>
  );
};

export default LoginPage;
