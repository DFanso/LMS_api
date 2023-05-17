import { Request, Response, NextFunction } from 'express';
import LectureModule from '../models/lectureModule';

export const createLectureModule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, batch } = req.body; // Add batch here

    const lectureModule = new LectureModule({ name, batch }); // And here

    await lectureModule.save();

    res.status(201).json(lectureModule);
  } catch (err) {
    next(err);
  }
};


export const getAllLectureModules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { batch } = req.body; // Get batch from request body

    let query = {};

    if (batch) {
      query = { batch }; // If batch is provided, add it to the query
    }

    const lectureModules = await LectureModule.find(query);
  
    res.json(lectureModules);
  } catch (err) {
    next(err);
  }
};