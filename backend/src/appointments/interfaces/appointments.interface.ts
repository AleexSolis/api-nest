import { Document } from 'mongoose';

export interface Appointments extends Document {
  readonly pInformationIDPatient: string;
  readonly dateStart: Date;
  readonly dateFinish: Date;
}
