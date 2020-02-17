import axios from "axios";

export const getPInformation = async () => {
  const pInformation = await axios.get("http://localhost:3001/p-information");
  if (!pInformation) return false;
  return pInformation.data.pInformation;
};

export const getPInformationByID = async id => {
  const pInformation = await axios.get(
    `http://localhost:3001/p-information/${id}`
  );
  if (!pInformation) return false;
  return pInformation.data.pInformation;
};

export const createPInformation = async newPInformation => {
  const pInformation = await axios.post(
    "http://localhost:3001/p-information/create",
    JSON.stringify({
      ...newPInformation
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
  if (!pInformation) return false;
  return pInformation.data;
};
