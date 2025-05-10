import { IUser } from '../interfaces/User';
import { Schema, model } from 'mongoose';

export const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true},  
  lastName: { type: String, required: true},
  emailAddress: { type: String, required: true, unique: false}, //unique lowercase
  companyContext: { type: String, required: true}, //max Characters
  phoneNumber: { type: String, required: true },
  address: { 
    addressLine1: { type: String, required: false},
    addressLine2: { type: String, required: false},
    city: { type: String, required: false},
    state: { type: String, required: false},
    postalCode: { type: String, required: false},
    country: { type: String, required: false},
    latitude: { type: Number, required: false},
    longitude: { type: Number, required: false}
  },
  createdAt: {type: Date, required: true },
  updatedAt: {type: Date, required: true }
})

export const UserModel = model<IUser>('User', userSchema);