import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Calendar from "@toast-ui/react-calendar";
import Container from "@material-ui/core/Container";
import DateFnsUtils from "@date-io/date-fns";
import ArrowIcon from "@material-ui/icons/ArrowRightAltOutlined";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "tui-calendar/dist/tui-calendar.css";
import { createAppointment } from "./client-api/Appointments-client";

// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

export default function Dashboard() {
  const [dateStart, setDateStart] = React.useState(new Date());
  const [dateFinish, setDateFinish] = React.useState(new Date());

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
    });
  };

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
            label="Start time"
            value={dateStart}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Finish time"
            value={dateStart}
            onChange={handleDateChangeStart}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={dateFinish}
            onChange={handleDateChangeFinish}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
          <IconButton
            title="Save appointment"
            aria-label="Send"
            size="medium"
            onClick={handleButtonClick}
          >
            <ArrowIcon />
          </IconButton>
        </Grid>
      </MuiPickersUtilsProvider>
      <Calendar
        schedules={[
          {
            id: "1",
            title: "TOAST UI Calendar Study",
            category: "time",
            start: "2020-02-16T21:30:00+09:00",
            end: "2020-02-16T22:30:00+09:00"
          },
          {
            id: "2",
            title: "Practice",
            category: "time",
            start: new Date(),
            end: new Date(),
            isReadOnly: true
          }
        ]}
      ></Calendar>
    </Container>
  );
}
