from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime

class Package(BaseModel):
    packageID: str
    packageName: str
    budget: float
    providers: str
    deposit: float
    picked: bool

class Email(BaseModel):
    emailId: str
    date: str
    time: str
    subject: str
    body: str
    status: str

class EmailHistory(BaseModel):
    emailHistoryId: str
    emailSent: Email
    emailReceived: Email

class EventQuoteBase(BaseModel):
    eventId: str
    venueName: str
    description: str
    distance: Optional[int] = None
    startTime: str
    address: str
    eventDuration: int
    dates: List[str]
    noOfPeople: int
    maxPeople: int
    rating: Optional[float] = None
    contEmailAddress: Optional[str] = None
    contactName: Optional[str] = None
    packages: List[Package] = []
    emailHistory: List[EmailHistory] = []

class EventQuoteCreate(EventQuoteBase):
    pass

class EventQuoteUpdate(BaseModel):
    id: int
    user_email: str
    eventId: int

class EventQuoteInDB(EventQuoteBase):
    id: int
    user_email: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 