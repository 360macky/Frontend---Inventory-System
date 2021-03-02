import React, { Component } from "react";
import "./Dashboard.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "ID", field: "_id" },
        { headerName: "First Name", field: "firstName" },
        { headerName: "Last Name", field: "lastName" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone number", field: "phoneNumber" },
      ],
      productData: [],
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      rowSelection: "single",
    };
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };
  onSelectionChanged = () => {
    let selectedRows = this.gridApi.getSelectedRows();
    this.setState({
      id: selectedRows[0]._id,
      firstName: selectedRows[0].firstName,
      lastName: selectedRows[0].lastName,
      email: selectedRows[0].email,
      phoneNumber: selectedRows[0].phoneNumber,
    });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card shadow">
                <div
                  className="card-header roboto-mono-font text-white"
                  style={{ background: "black" }}
                >
                  Gestionar productos
                </div>
                <div className="card-body">
                  <form>
                    <div class="form-group">
                      <label for="">Nombre</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="">Código</label>
                      <input type="text" className="form-control" />
                    </div>
                    <input
                      type="button"
                      className="btn btn-primary btn-block mt-2 roboto-mono-font"
                      value="Add new product"
                    />
                    <input
                      type="button"
                      className="btn btn-outline-primary btn-block mt-2 roboto-mono-font"
                      value="Update product"
                    />
                    <input
                      type="button"
                      className="btn btn-outline-dark btn-block mt-2 roboto-mono-font"
                      value="Delete product"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="card shadow">
                <div className="card-body">
                  <div className="table-container">
                    <div className="ag-theme-balham">
                      <AgGridReact
                        pagination={true}
                        paginationAutoPageSize={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.customerData}
                        onGridReady={this.onGridReady}
                        rowSelection={this.state.rowSelection}
                        onSelectionChanged={this.onSelectionChanged.bind(this)}
                      ></AgGridReact>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
