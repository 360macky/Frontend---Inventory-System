import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export default class Home extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <div>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-center">
            <label className="pt-2 d-none d-md-inline-block text-white">
              Sistema de Inventario - Proyecto de SENATI 2021-01
            </label>
          </div>
        </nav>

        <div
          className="position-relative overflow-hidden p-3 p-md-5 text-center"
          style={{ background: "black" }}
        >
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 text-white font-weight-light roboto-mono-font">
              Sistema Inventario
            </h1>
            <p className="font-weight-light lead text-white">
              Proyecto de estudio para SENATI basado en React y NodeJS. Y
              estilizado con Bootstrap.
            </p>
            {!this.context.user ? (
              <Link
                className="btn btn-lg btn-primary roboto-mono-font"
                to="/login"
              >
                Iniciar sesión
              </Link>
            ) : (
              <>
                <h4 className="text-white roboto-mono-font font-weight-light">
                  ¡HOLA {this.context.user.usuariobd.name.toUpperCase()}!
                </h4>
                <p className="text-white">
                  Ya puedes acceder al{" "}
                  <Link to="/dashboard">
                    panel de administración de productos
                  </Link>
                </p>
              </>
            )}
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>
    );
  }
}
