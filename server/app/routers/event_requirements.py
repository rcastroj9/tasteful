from fastapi import APIRouter, HTTPException
from typing import Optional
from app.models.event_requirements import EventRequirements
from app.models.user import UserInDB
from app.routers.users import users_db
from datetime import datetime
import logging

# Get logger for this module
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/event-requirements", tags=["event-requirements"])

@router.get("/{user_id}", response_model=EventRequirements)
async def get_event_requirements(user_id: int):
    """
    Get event requirements for a specific user by email
    """
    logger.info(f"Fetching event requirements for email: {user.user_id}")
    
    # Find user by email
    user = None
    for db_user in users_db.values():
        if db_user.user_id == user_id:
            user = db_user
            break
    
    if not user:
        logger.warning(f"No user found with email: {user.emailAddress} {user.user_id}")
        raise HTTPException(status_code=404, detail="User not found")
    
    logger.info(f"Found event requirements for user: {user.user_id} {user.emailAddress}")
    return user.eventRequirements

@router.put("/{user_id}", response_model=EventRequirements)
async def update_event_requirements(user_id: int, requirements: EventRequirements):
    """
    Update event requirements for a specific user by email
    """
    logger.info(f"Updating event requirements for email: {user.emailAddress}")
    
    # Find user by email
    user = None
    for db_user in users_db.values():
        if db_user.user_id == user_id:
            user = db_user
            break
    
    if not user:
        logger.warning(f"No user found with email: {db_user.emailAddress} {db_user.user_id}")
        raise HTTPException(status_code=404, detail="User not found")
    
    # Update the requirements
    user.eventRequirements = requirements
    user.updated_at = datetime.now()
    
    logger.info(f"Updated event requirements for user: {user.user_id} {user.emailAddress}")
    return user.eventRequirements
