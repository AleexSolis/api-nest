import React, { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from "@toast-ui/react-calendar";
import Container from "@material-ui/core/Container";
import DateFnsUtils from "@date-io/date-fns";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "tui-calendar/dist/tui-calendar.css";
import {
  createAppointment,
  getAppointments
} from "./client-api/Appointments-client";

// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#3f51b5",
    color: "white",
    "&:hover": {
      background: "#283371"
    }
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Dashboard() {
  const [dateStart, setDateStart] = React.useState(new Date());
  const [dateFinish, setDateFinish] = React.useState(new Date());
  const [schedules, setSchedules] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleDateChange = date => {
    setDateStart(date);
    setDateFinish(date);
  };

  const handleDateChangeStart = date => {
    setDateStart(date);
  };

  const handleDateChangeFinish = date => {
    setDateFinish(date);
  };

  const handleButtonClick = () => {
    // Aqui se debe agregar el ID del usuario logueado
    createAppointment({
      pInformationIDPatient: "5e4a087763d59c69bc064e9f",
      dateStart: dateStart,
      dateFinish: dateFinish
    }).then(() => {
      loadSchedules();
      setOpen(true);
    });
  };

  const loadSchedules = () => {
    const schedules = [];
    getAppointments().then(appointments => {
      appointments.forEach((appointment, index) =>
        schedules.push({
          id: index,
          category: "time",
          start: appointment.dateStart,
          end: appointment.dateFinish
        })
      );
      setSchedules(schedules);
    });
  };

  useEffect(() => {
    loadSchedules();
  }, []);

  return (
    <Container>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            value={dateStart}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Start time"
            value={dateStart}
            onChange={handleDateChangeStart}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Finish time"
            value={dateFinish}
            onChange={handleDateChangeFinish}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
          <IconButton
            title="Save appointment"
            className={classes.button}
            aria-label="Send"
            size="large"
            onClick={handleButtonClick}
          >
            <SaveIcon />
          </IconButton>
        </Grid>
      </MuiPickersUtilsProvider>
      <Calendar schedules={schedules}></Calendar>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Appointment saved
        </Alert>
      </Snackbar>
    </Container>
  );
}
