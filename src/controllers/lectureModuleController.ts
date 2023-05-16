import { Request, Response, NextFunction } from 'express';
import LectureModule from '../models/lectureModule';

export const createLectureModule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const lectureModule = new LectureModule({ name });

    await lectureModule.save();

    res.status(201).json(lectureModule);
  } catch (err) {
    next(err);
  }
};

export const getAllLectureModules = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lectureModules = await LectureModule.find();
  
      res.json(lectureModules);
    } catch (err) {
      next(err);
    }
  };
