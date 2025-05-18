import { Schema, model } from "mongoose";
import { ITeamOuting } from "../interfaces/TeamOuting";
import { eventQuotesSchema } from "./eventQuotes";

const RSVPEntrySchema = new Schema({
  userId: { type: String, required: true },
  status: { type: String, required: false },
  dietaryRestrictions: { type: String, required: false },
});

const teamOutingSchema = new Schema<ITeamOuting>({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    eventRequirements: {
        dates: { type: [Date], required: true },
        time: { type: String, required: true },
        timeZone: { type: String, required: true },
        location: { type: [Number, Number], required: true },
        numberOfGuests: { type: Number, required: true },
        budget: { type: "Double", required: true  },
        dietaryRestrictions: { type: [String],  required: false },
        additionalNotes: { type: String, required: false },
        teamDynamics: { type: [String], required: false}
      },  
    eventQuotes: { type: [eventQuotesSchema], required: false },
    rsvps: [RSVPEntrySchema],
    createdAt: {type: Date, required: true },
    updatedAt: {type: Date, required: true }
});

export const TeamOutingModel = model<ITeamOuting>('TeamOuting', teamOutingSchema);