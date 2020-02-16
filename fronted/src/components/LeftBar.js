import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";

export const LeftBar = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard">
        <Link to="/Clinician">Clinician</Link>
      </ListItemText>
    </ListItem>
    <ListItem button component={Link} to="/clinician">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers">Clinician</ListItemText>
    </ListItem>
  </div>
);
