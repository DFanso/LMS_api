
import { Request, Response, NextFunction } from 'express';
import DegreeBatch from '../models/DegreeBatch';

export const createDegreeBatch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const degreeBatch = new DegreeBatch({ name });
    await degreeBatch.save();

    res.status(201).json(degreeBatch);
  } catch (err) {
    next(err);
  }
};

export const getAllDegreeBatches = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const degreeBatches = await DegreeBatch.find();
    res.json(degreeBatches);
  } catch (err) {
    next(err);
  }
};
