import { Document } from 'mongoose';

export interface PInformation extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly clinician: string;
}
