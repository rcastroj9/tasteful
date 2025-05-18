import { Request, Response } from 'express';
import { UserModel } from '../models/users';

export const userSignup = async (req: Request, res: Response) => {
  try {
    const { name, emailAddress, password } = req.body;
    const user = new UserModel({
      name,
      emailAddress,
      password,
      companyContext: req.body.companyContext,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    await user.save();
    console.log('User signed up:', user);
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const userSignin = async (req: Request, res: Response) => {
  const { name, password } = req.query;
  const user = await UserModel.findOne({ name, password }).exec();
  if (!user) {
    console.log('Failed signin for:', name, password);
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.status(200).json({ message: 'Signin successful', user });
}; 