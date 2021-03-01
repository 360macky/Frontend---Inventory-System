import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="p-5">
        <div className="card shadow">
          <div className="card-body">
            
          </div>
        </div>
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title roboto-mono-font">Productos</h2>
            <p className="card-text">
              {/* TODO: Ag-Grid here */}
            </p>
            
          </div>
        </div>
      </div>
    );
  }
}
