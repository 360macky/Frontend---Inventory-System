import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="header navbar navbar-dark roboto-mono-font">
        <div className="">
          <Link className="navbar-brand" to="/">
            Sistema Inventario
          </Link>
        </div>
        <form className="form-inline">
          <Link className="btn btn-outline-primary my-2 my-sm-0" to="/dashboard">
            Panel de administración
          </Link>
        </form>
      </nav>
    );
  }
}
