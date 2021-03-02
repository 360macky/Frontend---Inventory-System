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
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="signin-container text-center">
        <form className="form-signin mt-5 mb-5">
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
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
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
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-lg btn-dark btn-block roboto-mono-font mb-5" type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
