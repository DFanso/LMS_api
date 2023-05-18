import { Request, Response } from "express";
import mongoose from "mongoose";
import Result from "../models/studentResultModel";
import Student from "../models/Student";

// Create a new Result
export const addResult = async (req: Request, res: Response) => {
  const { studentId, ModuleName, Type, Marks } = req.body;

  try {
    const studentDetails = await Student.findOne({ studentId });

    if (!studentDetails) {
      return res.status(404).json({ error: "No student found with this ID" });
    }

    let studentObjID = studentDetails._id;

    const newResult = new Result({
      StudentId: studentObjID,
      BatchName: studentDetails.batch,
      FacultyName: studentDetails.faculty,
      DegreeName: studentDetails.degree,
      ModuleName: ModuleName,
      Type,
      Marks,
    });

    const savedResult = await newResult.save();

    res.status(201).json({ message: "Result added successfully", savedResult });
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while adding result",
      details: error,
    }); // Updated this line
  }
};
// Fetch a Result by ID
export const fetchResult = async (req: Request, res: Response) => {
  const studentId = req.body.userId;
  const moduleName = req.body.moduleName;

  try {
    const results = await Result.find({
      StudentId: studentId,
      ModuleName: moduleName,
    });

    if (!results || results.length === 0) {
      return res
        .status(404)
        .json({ error: "No results found for this student and module" });
    }

    res.status(200).json({ message: "Results fetched successfully", results });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching results" });
  }
};
