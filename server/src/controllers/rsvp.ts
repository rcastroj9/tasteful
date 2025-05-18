import { Request, Response } from 'express';
import { TeamOutingModel } from '../models/teamOutings';
import { UserModel } from '../models/users';

export const addRSVP = async (req: Request, res: Response) => {
  const { teamOutingId, userId, status, dietaryRestrictions } = req.body;
  try {
    const teamOuting = await TeamOutingModel.findById(teamOutingId);
    if (!teamOuting) {
      return res.send('Not found');
    }
    teamOuting.rsvps.push({ userId, status, dietaryRestrictions });
    await teamOuting.save();

    // Data duplication: also update user's rsvpedEvents
    const user = await UserModel.findById(userId);
    if (user) {
      user.rsvpedEvents.push({ eventId: teamOutingId, event: teamOuting });
      await user.save();
    }

    res.json('RSVP added');
  } catch (e) {
    res.send(e.message);
  }
};

export const searchRSVPs = async (req: Request, res: Response) => {
  const { teamOutingId } = req.query;
  try {
    const teamOuting = await TeamOutingModel.findById(teamOutingId);
    if (!teamOuting) {
      return res.send('Not found');
    }
    res.json(teamOuting.rsvps);
  } catch (e) {
    res.send(e.message);
  }
}; 