import { Request, Response, NextFunction } from 'express';
import Degree from '../models/degree';

export const createDegree = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const degree = new Degree({ name });
    await degree.save();

    res.status(201).json(degree);
  } catch (err) {
    next(err);
  }
};

export const getAllDegrees = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const degrees = await Degree.find();
    res.json(degrees);
  } catch (err) {
    next(err);
  }
};
