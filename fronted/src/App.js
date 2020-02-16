import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Clinician from "./components/Clinician";

export default class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Navigation>
            <Route path="/clinician" Component={Dashboard} />
            <Route path="/clinician" Component={Clinician} />
          </Navigation>
        </Switch>
      </Router>
    );
  }
}
