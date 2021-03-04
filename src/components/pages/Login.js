import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import "./Login.css";

import {AuthContext} from '../../context/auth';

export default class Login extends Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleForm = (e) => {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://app-inventary-backend.herokuapp.com/api/user/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.ok) {
          this.context.login(result);
          this.setState({
            loggedIn: true
          })
        } else {
          // TODO: Mostrar error
        }
      })
      .catch((error) => alert(error));
  };
  render() {
    return (
      <div className="signin-container text-center">
        <form className="form-signin mt-5 mb-5">
          <h1 className="h3 mb-5 font-weight-normal">Iniciar sesión</h1>
          <label htmlFor="inputEmail" className="sr-only">
            {" "}
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
          <label htmlFor="inputPassword" className="sr-only">
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
          <button
            className="btn btn-lg btn-dark btn-block roboto-mono-font mb-5"
            type="submit"
            onClick={this.handleForm}
          >
            Entrar
          </button>
        </form>
        {
          this.state.loggedIn && <Redirect to="/dashboard" />
        }
      </div>
    );
  }
}
