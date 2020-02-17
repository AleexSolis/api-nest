import { Document } from 'mongoose';

export interface Users extends Document {
  readonly user: string;
  readonly password: string;
  readonly state: number;
  readonly registerAt: Date;
  readonly typeUser: number;
  readonly pInformationID: string;
}
