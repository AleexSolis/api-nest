import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import RegisterSuper from "./components/register/RegisterSuper";
import Register from "./components/register/Register";
import Dashboard from "./components/Dashboard";
import Clinician from "./components/Clinician";
import { getSuperadmin } from "./components/client-api/Users-cliente";

export default class App extends Component {
  state = {
    superAdminExist: true
  };

  componentDidMount() {
    getSuperadmin()
      .then(superAdminExist => {
        if (!superAdminExist) this.setState({ superAdminExist });
      })
      .catch(() => {});
  }

  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path="/">
            {this.state.superAdminExist ? <Login /> : <RegisterSuper />}
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/dashboard">
            <Navigation>
              <Dashboard />
            </Navigation>
          </Route>
          <Route exact path="/clinician">
            <Navigation>
              <Clinician />
            </Navigation>
          </Route>
        </Switch>
      </Router>
    );
  }
}
