import { Document } from 'mongoose';

export interface Appointments extends Document {
  readonly pInformationIDPatient: number;
  readonly pInformationIDClinician: number;
  readonly date: Date;
}
