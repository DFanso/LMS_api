import { Request, Response, NextFunction } from 'express';
import Faculty from '../models/Faculty';

export const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const faculty = new Faculty({ name });
    await faculty.save();

    res.status(201).json(faculty);
  } catch (err) {
    next(err);
  }
};

export const getAllFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (err) {
    next(err);
  }
};
