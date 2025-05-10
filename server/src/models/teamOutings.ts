import { Schema, Types, model } from "mongoose";
import { ITeamOuting } from "../interfaces/TeamOuting";
import { eventQuotesSchema } from "./eventQuotes";

const teamOutingSchema = new Schema<ITeamOuting>({
    user: { type: Schema.Types.ObjectId, ref: 'User'}, //HERE I'M USING THE ID OF THE MODEL AS ONE USER CAN HAVE MULTIPLE TEAM OUTINGS AND CAN BE ON IT'S OWN 
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
    eventQuotes: { type: [eventQuotesSchema], required: false }, //HERE I'M USING THE SCHEMA AS THERE CAN'T BE EVENT QUOTES ALONE AND ONLY BE PART OF THE TEAM OUTING
    createdAt: {type: Date, required: true },
    updatedAt: {type: Date, required: true }
});

export const TeamOutingModel = model<ITeamOuting>('TeamOuting', teamOutingSchema);