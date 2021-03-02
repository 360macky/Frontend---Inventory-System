import React from "react";
import "./App.css";
import Header from "./components/core/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Footer from './components/pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
