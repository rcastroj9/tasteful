from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.models.user import UserInDB, UserBase
from datetime import datetime
import logging

# Get logger for this module
logger = logging.getLogger(__name__)

router = APIRouter()

# Temporary in-memory storage (replace with database in production)
users_db = {}
user_id_counter = 1

@router.post("/", response_model=UserInDB)
async def create_user(user: UserBase):
    global user_id_counter
    user_id = user_id_counter
    user_id_counter += 1
    
    logger.info(f"Creating new user with ID: {user_id}")
    logger.debug(f"User data: {user.model_dump()}")
    
    # Create the user with all required fields
    db_user = UserInDB(
        user_id=user_id,
        created_at=datetime.now(),
        updated_at=datetime.now(),
        firstName=user.firstName,
        lastName=user.lastName,
        emailAddress=user.emailAddress,
        context=user.context,
        eventRequirements= user.eventRequirements,
        eventQuotes= user.eventQuotes
    )
    
    users_db[user_id] = db_user
    logger.info(f"User {user_id} created successfully")
    logger.info(f"User data: {users_db.values()}")
    return db_user