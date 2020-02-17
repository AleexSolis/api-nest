import React, { Component } from "react";
import MaterialTable from "material-table";
import { getAppointments } from "./client-api/Appointments-client";

export default class Patient extends Component {
  state = {
    data: [],
    users: [],
    title: "Patient",
    reloadData: false
  };

  componentDidMount() {
    getAppointments().then(data => {
      this.setState({
        data
      });
    });
  }

  render() {
    return !this.state.reloadData ? (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Phone", field: "phone" },
            { title: "Start", field: "dateStart", type: "datetime" },
            { title: "Finish", field: "dateFinish", type: "datetime" }
          ]}
          data={this.state.data}
          title={this.state.title}
          options={{
            actionsColumnIndex: -1
          }}
        />
      </div>
    ) : null;
  }
}
