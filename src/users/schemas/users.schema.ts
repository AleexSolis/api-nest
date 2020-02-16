import { Schema } from 'mongoose';

export const UsersSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  state: { type: Number, default: 1 },
  registerAt: { type: Date, default: Date.now },
  typeUser: { type: Number, required: true },
  personalInformation: Number,
});
