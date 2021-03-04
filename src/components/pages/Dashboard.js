import React, { Component } from "react";
import "./Dashboard.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth";

//PDF
import generatePDF from "../services/reportGenerator";

const INVENTORY_API = "https://app-inventary-backend.herokuapp.com/api";

export default class Dashboard extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Nombre", field: "name" },
        { headerName: "Tipo", field: "type" },
        { headerName: "Marca", field: "brand" },
        { headerName: "Descripción", field: "description" },
        { headerName: "Precio", field: "price" },
        { headerName: "Stock", field: "stock" },
      ],
      productData: [],
      _id: "",
      name: "",
      type: "",
      brand: "",
      description: "",
      price: "",
      stock: "",
      rowSelection: "single",
      isLoadingData: false,
      isLoggedIn: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateTable = this.updateTable.bind(this);
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };
  onSelectionChanged = () => {
    let selectedRows = this.gridApi.getSelectedRows();
    this.setState({
      _id: selectedRows[0]._id,
      name: selectedRows[0].name,
      type: selectedRows[0].type,
      brand: selectedRows[0].brand,
      description: selectedRows[0].description,
      price: selectedRows[0].price,
      stock: selectedRows[0].stock,
    });
    console.log(this.state);
  };
  handleChange = (e) => {
    console.log(this.context.user);
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="card shadow mb-3">
                <div
                  className="card-header roboto-mono-font text-white"
                  style={{ background: "black" }}
                >
                  Gestionar productos
                </div>
                <div className="card-body">
                  <form>
                    <input type="hidden" name="_id" value={this.state._id} />
                    <div className="form-group">
                      <label htmlFor="">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Tipo</label>
                      <input
                        type="text"
                        className="form-control"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Marca</label>
                      <input
                        type="text"
                        className="form-control"
                        name="brand"
                        value={this.state.brand}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Descripción</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Precio</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Stock</label>
                      <input
                        type="number"
                        className="form-control"
                        name="stock"
                        value={this.state.stock}
                        onChange={this.handleChange}
                      />
                    </div>
                    <input
                      type="button"
                      className="btn btn-primary btn-block mt-2 roboto-mono-font"
                      value="Registrar producto"
                      onClick={this.handleAdd}
                      disabled={this.state.isLoadingData}
                    />
                    <input
                      type="button"
                      className="btn btn-outline-primary btn-block mt-2 roboto-mono-font"
                      value="Actualizar producto"
                      onClick={this.handleUpdate}
                      disabled={this.state.isLoadingData}
                    />
                    <input
                      type="button"
                      className="btn btn-outline-dark btn-block mt-2 roboto-mono-font"
                      value="Eliminar producto"
                      onClick={this.handleDelete}
                      disabled={this.state.isLoadingData}
                    />
                    <input
                      type="button"
                      className="btn btn-outline-danger btn-block mt-2 roboto-mono-font"
                      value="Generar reporte"
                      onClick={() => generatePDF(this.state.productData)}
                      disabled={this.state.isLoadingData}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mb-3">
              <div className="card shadow">
                <div className="card-body">
                  <div className="table-container">
                    <div className="ag-theme-balham">
                      <AgGridReact
                        pagination={true}
                        paginationAutoPageSize={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.productData}
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
        {!this.context.user && <Redirect to="/login" />}
      </div>
    );
  }
  async componentDidMount() {
    this.updateTable();
  }
  async updateTable() {
    console.log("Passing here");
    // TODO: Actualizar la tabla
    let response = await fetch(`${INVENTORY_API}/products`);

    let data = await response.json();
    console.log({ data });
    this.setState({
      productData: data,
    });
  }
  async handleDelete(e) {
    e.preventDefault();
    const productId = this.state._id;
    let requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${INVENTORY_API}/products/${productId}`, requestOptions)
      .then((response) => {
        this.updateTable();
        return response.json();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  async handleAdd(e) {
    // TODO: Agregar nuevo producto
    e.preventDefault();
    this.setState({
      isLoadingData: true,
    });
    const newProduct = {
      name: this.state.name,
      type: this.state.type,
      brand: this.state.brand,
      description: this.state.description,
      price: this.state.price,
      stock: this.state.stock,
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(newProduct);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${INVENTORY_API}/products`, requestOptions)
      .then((response) => {
        this.updateTable();
        return response.json();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    this.setState({
      isLoadingData: false,
    });
  }
  async handleUpdate(e) {
    // TODO: Actualizar un producto
    e.preventDefault();
    const productId = this.state._id;
    const newProduct = {
      name: this.state.name,
      type: this.state.type,
      brand: this.state.brand,
      description: this.state.description,
      price: this.state.price,
      stock: this.state.stock,
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(newProduct);

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${INVENTORY_API}/products/${productId}`, requestOptions)
      .then((response) => {
        this.updateTable();
        return response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
}
