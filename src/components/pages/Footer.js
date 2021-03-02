import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
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
                <a
                  className="text-muted"
                  href="https://github.com/vlady4780"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vlady Gutierrez
                </a>
              </li>
              <li>
                <a
                  className="text-muted"
                  href="https://github.com/ProgrammingGeek02"
                  target="_blank"
                  rel="noreferrer"
                >
                  David Saavedra
                </a>
              </li>
              <li>
                <a
                  className="text-muted"
                  href="https://github.com/360macky"
                  target="_blank"
                  rel="noreferrer"
                >
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
    );
  }
}
