import React, { ChangeEvent, FormEvent } from "react";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {}

export interface State {
  username: string;
  email: string;
  password: string;
}

class RegistrationPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChangeUsernameInput(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    this.setState({
      username: event.target.value,
    });
  }

  handleChangeEmailInput(
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
    // TODO: implementation of the registration logic
    // debug
    console.log("Username: " + this.state.username);
    console.log("Username: " + this.state.email);
    console.log("Passwort: " + this.state.password);
    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    return (
      <form
        className="registration-form"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <h2 className="title">Registrieren</h2>
        <div className="input-field">
          <i className="form-icons">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </i>
          <input
            placeholder="Nutzername"
            value={this.state.username}
            onChange={(event) => this.handleChangeUsernameInput(event)}
          ></input>
        </div>

        <div className="input-field">
          <i className="form-icons">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </i>
          <input
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.handleChangeEmailInput(event)}
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
          Registrieren
        </button>
      </form>
    );
  }
}

export default RegistrationPage;
