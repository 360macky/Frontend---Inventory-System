import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleForm() {
    // TODO: Send the email and password to an React API. Then redirect to /dashboard if success, otherwise show error message
  }
  render() {
    return (
      <div className="signin-container text-center">
        <form className="form-signin mt-5">
          <h1 className="h3 mb-5 font-weight-normal">Iniciar sesión</h1>
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Correo electrónico"
            required
            autoFocus
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Contraseña"
            required
          />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    );
  }
}
