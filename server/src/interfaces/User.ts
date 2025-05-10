import { IEventQuote } from './EventQuote';
import { IEventRequirements } from './EventRequirements';

export interface IAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface IUser {
  user_id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  companyContext: string;
  phoneNumber: string;
  address: IAddress;
  createdAt: Date;
  updatedAt: Date;
}

// export interface IUserCreate {
//   emailAddress: string;
//   firstName: string;
//   lastName: string;
//   companyContext: string;
// }

// export interface IUserUpdate {
//   emailAddress?: string;
//   firstName?: string;
//   lastName?: string;
//   companyContext?: string;
// } 