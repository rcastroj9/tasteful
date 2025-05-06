from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from app.models.event_quote import EventQuoteInDB
from app.models.event_requirements import EventRequirements


class UserBase(BaseModel):
    emailAddress: str
    firstName: str
    lastName: str
    context: str
    eventRequirements: EventRequirements
    eventQuotes: List[EventQuoteInDB] = None

class UserInDB(UserBase):
    user_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 
