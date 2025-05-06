from pydantic import BaseModel
from typing import List, Optional
from enum import Enum
from datetime import datetime

class TeamDynamicType(str, Enum):
    TEAM_COLLABORATION = "Team Collaboration"
    PHYSICAL_ACTIVITY = "Physical Activity"
    COMMUNICATION = "Communication"
    SOCIAL_ENGAGEMENT = "Social Engagement"
    CREATIVE_COLLABORATION = "Creative Collaboration"
    PROFESSIONAL_DEVELOPMENT = "Professional Development"

class TeamDynamic(BaseModel):
    dynamics: List[TeamDynamicType]
    description: Optional[str] = None
    image: Optional[str] = None

class EventRequirements(BaseModel):
    dates: List[datetime]
    numberOfGuests: int
    maxBudget: float
    address: str
    startTime: str
    eventLength: int
    teamDynamics: List[TeamDynamicType]