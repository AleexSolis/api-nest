import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import axios from "axios";

export default class Clinician extends Component {
  async componentDidMount() {
    const res = await axios.get("http://localhost:3001/users/");
    console.log(res);
  }

  render() {
    return <Container fixed>Clinician</Container>;
  }
}
