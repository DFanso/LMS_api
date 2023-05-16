import { Request, Response, NextFunction } from 'express';
import LectureSchedule from '../models/LectureSchedule';
import Faculty from '../models/Faculty';
import DegreeBatch from '../models/DegreeBatch';
import Lecturer from '../models/lecturer';
import LectureModule from '../models/lectureModule';
import Student from '../models/Student';
import Degree from '../models/degree'


export const createLectureSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { facultyName, degreeBatchName, date, startTime, endTime, lectureHall, lecturerName, lectureModules, degreeName } = req.body;
  
      // Find the faculty by name
      const faculty = await Faculty.findOne({ name: facultyName });
      if (!faculty) {
        const error: any = new Error('Faculty not found');
        error.status = 400;
        return next(error);
      }
  
      // Find the degree batch by name
      const degreeBatch = await DegreeBatch.findOne({ name: degreeBatchName });
      if (!degreeBatch) {
        const error: any = new Error('Degree Batch not found');
        error.status = 400;
        return next(error);
      }
  
      // Find the lecturer by name
      const lecturer = await Lecturer.findOne({ name: lecturerName });
      if (!lecturer) {
        const error: any = new Error('Lecturer not found');
        error.status = 400;
        return next(error);
      }
  
      // Find the lecture module by name
      const lectureModule = await LectureModule.findOne({ name: lectureModules });
      if (!lectureModule) {
        const error: any = new Error(`Lecture Module "${lectureModules}" not found`);
        error.status = 400;
        return next(error);
      }
  
      // Find the degree by name
      const degree = await Degree.findOne({ name: degreeName });
      if (!degree) {
        const error: any = new Error(`Degree "${degreeName}" not found`);
        error.status = 400;
        return next(error);
      }
  
      const lectureSchedule = new LectureSchedule({
        faculty: faculty.name,
        degreeBatch: degreeBatch.name,
        date,
        startTime,
        endTime,
        lectureHall,
        lecturer: lecturer.name,
        lectureModules: lectureModule.name,
        degree: degree.name,
      });
  
      await lectureSchedule.save();
  
      res.status(201).json(lectureSchedule);
    } catch (err) {
      next(err);
    }
  };


export const getAllLectureSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const lectureSchedules = await LectureSchedule.find()
      .populate('faculty degreeBatch lecturer lectureModules');

    res.json(lectureSchedules);
  } catch (err) {
    next(err);
  }
};



export const getFilteredLectureSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.body.userId;

    // Find the student by user ID
    const student = await Student.findById(userId);
    if (!student) {
      const error: any = new Error('Student not found');
      error.status = 400;
      return next(error);
    }

    // Find the degree batch and faculty by student's details
    const degreeBatch = await DegreeBatch.findOne({ name: student.batch });
    const faculty = await Faculty.findOne({ name: student.faculty });
    const degree = await Degree.findOne({ name: student.degree });

console.log(degree,degreeBatch,faculty)
    // Find lecture schedules matching the degree batch and faculty
    const lectureSchedules = await LectureSchedule.find({
      degreeBatch: degreeBatch?.name,
      faculty: faculty?.name,
      degree: degree?.name
    });

    res.json(lectureSchedules);
  } catch (err) {
    next(err);
  }
};
