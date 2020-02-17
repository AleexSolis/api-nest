import { createUser } from "./Users-cliente";
import { createPInformation } from "./PINformation-client";

export const createPatient = async newPatient => {
  const pInformation = await createPInformation(newPatient);
  newPatient.pInformationID = pInformation.pInformation._id;
  const user = await createUser(newPatient, 3);
  if (!user) return false;
  return user.data;
};
