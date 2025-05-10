export interface IPackage {
  packageName: string;
  budget: number;
  deposit: number;
  picked: boolean;
  includedServices: string[];
  excludedServices?: string[];
  additionalNotes?: string;
}

export interface IEmail {
  emailId: string;
  date: string;
  time: string;
  subject: string;
  body: string;
  status: string;
}

export interface IEmailHistory {
  emailHistoryId: string;
  emailSent: IEmail;
  emailReceived: IEmail;
}

export interface IEventQuote {
  _id: number;
  venueEmail: string;
  venueName: string;
  description: string;
  distance?: number;
  startTime: string;
  address: string;
  eventDuration: number;
  dates: string[];
  noOfPeople: number;
  maxPeople: number;
  rating?: number;
  contEmailAddress?: string;
  contactName?: string;
  packages: IPackage[];
  // emailHistory: IEmailHistory[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IEventQuoteCreate {
  eventId: string;
  venueName: string;
  description: string;
  distance?: number;
  startTime: string;
  address: string;
  eventDuration: number;
  dates: string[];
  noOfPeople: number;
  maxPeople: number;
  rating?: number;
  contEmailAddress?: string;
  contactName?: string;
  packages?: IPackage[];
  emailHistory?: IEmailHistory[];
}

export interface IEventQuoteUpdate {
  id: number;
  user_email: string;
  eventId: number;
} 