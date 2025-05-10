import express, { Request, Response } from 'express';
import { UserModel } from '../models/users';
import { bookTeamOutingEmailController, createTeamOutingController } from '../controllers/teamOuting';

const router = express.Router();

// Create a new team outing
router.post('/', createTeamOutingController);

// Get user by email
router.get('/:email', (req, res) => {
  const { email } = req.params;
  const user = UserModel.findOne({ emailAddress: email}).exec();

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.status(200).json(user);
  }
});

router.post('/book', bookTeamOutingEmailController);

export default router; 