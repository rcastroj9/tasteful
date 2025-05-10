import { IEventRequirements } from './EventRequirements';
import { IUser } from './User';
import { IEventQuote } from './EventQuote';

export interface ITeamOuting {
    user: IUser, 
    eventRequirements: IEventRequirements,
    eventQuotes: IEventQuote[],
    createdAt: Date,
    updatedAt: Date
}