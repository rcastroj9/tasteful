export interface IEventRequirements {
  dates: Date[];
  time: string;
  timeZone: string;
  location: [number, number];
  numberOfGuests: number;
  budget: number;
  dietaryRestrictions?: string[];
  additionalNotes?: string;
  teamDynamics?: string;
}