import { Schema } from 'mongoose';

export const AppointmentsSchema = new Schema({
  pInformationIDPatient: { type: String, required: true },
  dateStart: { type: Date, required: true },
  dateFinish: { type: Date, required: true },
});
