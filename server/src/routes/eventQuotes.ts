import express from 'express';
import { IEventQuote, IEventQuoteCreate } from '../interfaces/EventQuote';
import { users_db } from '../models/users';

const router = express.Router();

// Get event quotes for a specific user by email
router.get('/:email', (req, res) => {
  const { email } = req.params;
  
  // Find user by email
  const user = Object.values(users_db).find(u => u.emailAddress === email);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user.eventQuotes || []);
});

// Create a new event quote
router.post('/', (req, res) => {
  try {
    const eventQuoteData: IEventQuoteCreate = req.body;
    const { user_email } = req.body;
    
    // Find user by email
    const user = Object.values(users_db).find(u => u.emailAddress === user_email);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const newEventQuote: IEventQuote = {
      _id: Date.now(), // Using timestamp as ID for simplicity
      ...eventQuoteData,
      createdAt: new Date(),
      updatedAt: new Date(),
      packages: eventQuoteData.packages || [],
      // emailHistory: eventQuoteData.emailHistory || []
    };
    
    // Add event quote to user's quotes
    if (!user.eventQuotes) {
      user.eventQuotes = [];
    }
    user.eventQuotes.push(newEventQuote);
    
    res.status(201).json(newEventQuote);
  } catch (error) {
    console.error('Error creating event quote:', error);
    res.status(500).json({ error: 'Failed to create event quote' });
  }
});

export default router; 