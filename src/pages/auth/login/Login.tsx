import React, { ChangeEvent, FormEvent } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props {}

export interface State {
  email: string;
  password: string;
  //redirect: string | null;
  //loading: boolean;
  //message: string;
}

export class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      //redirect: null,
      //loading: false,
      //message: ''
    };
  }

  handleChangeUsernameInput(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    this.setState({
      email: event.target.value,
    });
  }

  handleChangePasswordInput(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    // TODO: implementation of the login logic
    // debug
    console.log("Username: " + this.state.email);
    console.log("Passwort: " + this.state.password);
    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <h2 className="title">Anmelden</h2>
        <div className="input-field">
          <i className="form-icons">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </i>

          <input
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.handleChangeUsernameInput(event)}
          ></input>
        </div>
        <div className="input-field">
          <i className="form-icons">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          </i>

          <input
            placeholder="Passwort"
            type="password"
            value={this.state.password}
            onChange={(event) => this.handleChangePasswordInput(event)}
          ></input>
        </div>
        <button className="form-button" type="submit">
          Login
        </button>
        <p id="error-message">Das Password oder die Email ist falsch.</p>

        
      </form>
    );
  }
}

export default LoginPage;
