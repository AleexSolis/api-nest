import React, { Component } from "react";
import MaterialTable from "material-table";
import {
  getClinician,
  cliniciansG,
  updateClinician
} from "./client-api/Clinician-client";

export default class Clinician extends Component {
  state = {
    data: [],
    title: "Clinician",
    reloadData: false
  };

  componentDidMount() {
    getClinician();
    this.setState({
      data: cliniciansG
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.data !== this.state.data) {
      this.setState({ reloadData: true });
      setTimeout(() => {
        this.setState({ reloadData: false });
      }, 100);
    }
  }

  render() {
    return !this.state.reloadData ? (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "State", field: "state" },
            { title: "Register", field: "registerAt" }
          ]}
          data={this.state.data}
          title={this.state.title}
          actions={[
            {
              icon: "check",
              tooltip: "Verify user",
              onClick: (event, rowData) => {
                updateClinician(2, rowData._id).then(() => {
                  getClinician();
                  this.setState({
                    data: cliniciansG
                  });
                });
              }
            },
            {
              icon: "close",
              tooltip: "Disable user",
              onClick: (event, rowData) => {
                updateClinician(3, rowData._id).then(() => {
                  getClinician();
                  this.setState({
                    data: cliniciansG
                  });
                });
              }
            }
          ]}
          options={{
            actionsColumnIndex: -1
          }}
        />
      </div>
    ) : null;
  }
}
