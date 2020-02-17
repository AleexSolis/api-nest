import axios from "axios";

export const createAppointment = async newAppointmentr => {
  const user = await axios.post(
    "http://localhost:3001/appointments/create",
    JSON.stringify({
      ...newAppointmentr
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
  if (!user) return false;
  return user.data;
};

export const getAppointments = async id => {
  const appointment = await axios.get(`http://localhost:3001/appointments`);
  if (!appointment) return false;
  return appointment.data.appointments;
};

export const getAppointmentByID = async id => {
  const appointment = await axios.get(
    `http://localhost:3001/appointments/${id}`
  );
  if (!appointment) return false;
  return appointment.data.appointments;
};
