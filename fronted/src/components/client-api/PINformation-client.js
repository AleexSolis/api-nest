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
