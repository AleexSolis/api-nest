import axios from "axios";
import { getPInformationByID } from "./PINformation-client";
export let cliniciansG = [];

export const getClinician = async () => {
  cliniciansG = [];
  const clinicians = await axios.get("http://localhost:3001/users/clinician");
  if (!clinicians) return false;
  clinicians.data.clinicians.forEach(async clinician => {
    //Esto se debe cambiar por el join con la tabla de estados
    clinician.state =
      clinician.state === 1
        ? "Not verified"
        : clinician.state === 2
        ? "Verified"
        : "disabled";

    let information = await getPInformation(clinician.pInformationID);
    clinician.name = `${information.firstName} ${information.lastName}`;
    clinician.email = information.email;
    clinician.phone = information.phone;
    cliniciansG.push(clinician);
  });
};

const getPInformation = async pInformationID => {
  const pInformation = await getPInformationByID(pInformationID);
  return pInformation;
};

export const updateClinician = async (state, id) => {
  const clinician = await axios.put(
    `http://localhost:3001/users/update/${id}`,
    JSON.stringify({
      state
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
  if (!clinician) return false;
  return clinician.data;
};
