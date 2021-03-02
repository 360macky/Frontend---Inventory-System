import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
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
            <Link className="btn btn-lg btn-primary roboto-mono-font" to="/login">
              Iniciar sesión
            </Link>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md roboto-mono-font h2">
                Sistema Inventario
            </div>
            <div className="col-6 col-md">
              <h5 className="text-primary">Características</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-danger">Calidad</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-success">Desarrolladores</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="https://github.com/vlady4780" target="_blank" rel="noreferrer">
                    Vlady Gutierrez
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="https://github.com/ProgrammingGeek02" target="_blank" rel="noreferrer">
                    David Saavedra
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="https://github.com/360macky" target="_blank" rel="noreferrer">
                    Marcelo Arias
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-info">Acerca de</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
