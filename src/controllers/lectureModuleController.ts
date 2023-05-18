import { Request, Response, NextFunction } from "express";
import LectureModule from "../models/lectureModule";
import Student from "../models/Student";

export const createLectureModule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, batch, degree } = req.body;

    const lectureModule = new LectureModule({ name, batch, degree }); // And here

    await lectureModule.save();

    res.status(201).json(lectureModule);
  } catch (err) {
    next(err);
  }
};

export const getAllLectureModules = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { batch, degree } = req.body; // Get batch and degree from query parameters

    let query = {};

    if (batch) {
      query = { ...query, batch }; // If batch is provided, add it to the query
    }

    if (degree) {
      query = { ...query, degree }; // If degree is provided, add it to the query
    }

    const lectureModules = await LectureModule.find(query);

    res.json(lectureModules);
  } catch (err) {
    next(err);
  }
};

export const getAllLectureModulesForStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.body; // Get userId from request body

    // Find the student using the userId
    const student = await Student.findById(userId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Get batch and degree from the student
    const { batch, degree } = student;

    let query = {};

    if (batch) {
      query = { ...query, batch }; // If batch is provided, add it to the query
    }

    if (degree) {
      query = { ...query, degree }; // If degree is provided, add it to the query
    }

    console.log(query);
    const lectureModules = await LectureModule.find(query);

    res.json(lectureModules);
  } catch (err) {
    next(err);
  }
};
export const getAllLectureModulesFromStudentID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentID } = req.body.studentID; // Get userId from request body

    // Find the student using the userId
    const student = await Student.findOne(studentID);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Get batch and degree from the student
    const { batch, degree } = student;

    let query = {};

    if (batch) {
      query = { ...query, batch }; // If batch is provided, add it to the query
    }

    if (degree) {
      query = { ...query, degree }; // If degree is provided, add it to the query
    }

    console.log(query);
    const lectureModules = await LectureModule.find(query);

    res.json(lectureModules);
  } catch (err) {
    next(err);
  }
};
export const getAllLectureModulesNoFilter = async (
  req: Request,
  res: Response
) => {
  try {
    const modules = await LectureModule.find();
    res.status(200).json(modules);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching modules." });
  }
};
