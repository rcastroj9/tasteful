import { IEventQuote, IPackage, IEmailHistory } from '@/interfaces/EventQuote';
import { IUser } from '../interfaces/User';
import { Schema, model } from 'mongoose';

const packageSchema = new Schema<IPackage>({
    packageName: { type: String, required: true},
    budget: { type: Number, required: true},
    deposit: { type: Number, required: true},
    picked: { type: Boolean, required: true},
    includedServices: { type: [String], required: true},
    excludedServices: { type: [String] },
    additionalNotes: { type: String }
})

export const eventQuotesSchema = new Schema<IEventQuote>({
    venueEmail: { type: String, required: true},
    venueName: { type: String, required: true},
    description: { type: String, required: true},
    distance: { type: Number },
    startTime: { type: String, required: true},
    address: { type: String, required: true},
    eventDuration: { type: Number, required: true},
    dates: { type: [String], required: true},
    noOfPeople: { type: Number, required: true},
    maxPeople: { type: Number, required: true},
    rating: { type: Number },
    contEmailAddress: { type: String },
    contactName: { type: String },
    packages: { type: [packageSchema], required: true},
    createdAt: { type: Date, required: true},
    updatedAt: { type: Date, required: true}
})

export const EventQuoteModel = model<IEventQuote>('EventQuotes', eventQuotesSchema);