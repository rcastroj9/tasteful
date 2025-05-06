from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.models.event_quote import EventQuoteCreate, EventQuoteUpdate, EventQuoteInDB
from datetime import datetime
from app.routers.users import users_db
import logging

# Get logger for this module
logger = logging.getLogger(__name__)

router = APIRouter()


@router.get("/{email_id}", response_model=List[EventQuoteInDB])
async def get_event_quotes(email_id: str):
    """
    Get event quotes for a specific user by email
    """
    logger.info(f"Fetching event quotes for email_id: {email_id}")
    logger.info(f"users_db: {users_db}")
    
    # Find user by user_id  
    user = None
    for db_user in users_db.values():
        if db_user.emailAddress == email_id:
            user = db_user
            break
    
    if not user:
        logger.warning(f"No user found with email_id: {email_id}")
        raise HTTPException(status_code=404, detail="User not found")
    
    logger.info(f"Found event quotes for user: {user.user_id} {user.emailAddress}")
    return user.eventQuotes
