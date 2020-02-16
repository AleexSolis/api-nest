import { Schema } from 'mongoose';

export const AppointmentsSchema = new Schema({
  pInformationIDPatient: { type: Number, required: true },
  pInformationIDClinician: { type: Number, required: true },
  date: { type: Date, required: true },
});
