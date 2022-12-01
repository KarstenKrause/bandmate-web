import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TailSpin } from "react-loader-spinner";

const LoginPage: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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

    if(validEmail(email) && validPassword(password)) {
      setLoading(true);
      setTimeout(() => {
        console.log("Email: " + email);
        console.log("Password: " + password);
        setLoading(false);
      }, 3000);
    }

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
      {loginButton}
      <p id="error-message">{errorMessage}</p>
    </form>
  );
};

export default LoginPage;
