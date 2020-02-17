import axios from "axios";
import { getPInformationByID } from "./PINformation-client";
import { createUser } from "./Users-cliente";
import { createPInformation } from "./PINformation-client";
export let patientsG = [];

export const getPatient = async () => {
  patientsG = [];
  const patients = await axios.get("http://localhost:3001/users/patient");
  if (!patients) return false;
  patients.data.patients.forEach(async patient => {
    //Esto se debe cambiar por el join con la tabla de estados
    patient.state =
      patient.state === 1
        ? "Not verified"
        : patient.state === 2
        ? "Verified"
        : "disabled";

    let information = await getPInformation(patient.pInformationID);
    patient.name = `${information.firstName} ${information.lastName}`;
    patient.email = information.email;
    patient.phone = information.phone;
    patientsG.push(patient);
  });
};

const getPInformation = async pInformationID => {
  const pInformation = await getPInformationByID(pInformationID);
  return pInformation;
};

export const createPatient = async newPatient => {
  const pInformation = await createPInformation(newPatient);
  newPatient.pInformationID = pInformation.pInformation._id;
  const user = await createUser(newPatient, 3);
  if (!user) return false;
  return user.data;
};
