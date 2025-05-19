import { IEventRequirements } from "@/interfaces/EventRequirements";
import { IUser } from "@/interfaces/User";
import { TeamOutingModel } from "@/models/teamOutings";
import { Request, Response } from 'express';
import { Resend } from "resend";
import { UserModel } from "../models/users";

const resend = new Resend("re_Cninkv6b_7T6LJMZ5t8yZ6ABteVYpMUNp");


// once a res is sent you can't respond again
// always have a res or the front end is going to keep waiting
export const createTeamOutingController = async (req: Request, res: Response) => {
    try {
      const userData : IUser = req.body.user;
      const eventRequirementData : IEventRequirements = req.body.eventRequirements;
      console.log(userData);
      
      const newUser = new UserModel({
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
  
      const newTeamOuting = new TeamOutingModel({
        user: newUser._id,
        eventRequirements: {
          ...eventRequirementData
        },
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      // .save() from Mongoose
      await newUser.save();
      await newTeamOuting.save();
  
      console.log('User created:', newUser);
      console.log('Team Outing created:', newTeamOuting);

      // answering to the front end saved ok - res responds to the frontend 
      res.status(201).json({ newUser, sentEmail: "processing" });

      // const emailHTML = await generateEventEmail({ ...eventRequirementData });
      //SEND EVENT EMAIL 
      // const { data, error } = await resend.emails.send({
      //   from: "Daniela <teamOuting@pontix.co>",
      //   to: ["dannycastro454@gmail.com"],
      //   subject: "Request for quote team event",
      //   html: emailHTML || ""
      //  });

      // if (error) {
      //   console.error('Error creating sending email event quote request:', error);
      //   return;
      // }
      // console.log("Email sent!! Email data", {data});
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  };

export const bookTeamOutingEmailController = async (req: Request, res: Response) => {
  res.status(200).json({ status: 'Booked'});
};

export const getPaginatedEventQuotes = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  let eventQuotes;
  let total;
  setTimeout(() => {
    TeamOutingModel.find({}, (err: any, docs: any) => {
      if (err) {
        res.status(500).json({ error: 'DB error' });
        return;
      }
      total = docs.length;
      eventQuotes = docs.slice((page - 1) * limit, page * limit);
      res.json({ eventQuotes, total });
    });
  }, 0);
};