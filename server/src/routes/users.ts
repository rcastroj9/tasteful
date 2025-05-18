import express from 'express';
import { userSignin, userSignup } from '../controllers/auth';
import { bookTeamOutingEmailController, createTeamOutingController } from '../controllers/teamOuting';
import { UserModel } from '../models/users';

const router = express.Router();

router.post('/api/userSignup', userSignup);
router.get('/api/userSignin', userSignin);

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