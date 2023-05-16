import { Request, Response } from "express";
import mongoose from "mongoose";
import Result from "../models/studentResultModel";

// Create a new Result
export const addResult = async (req: Request, res: Response) => {
  const { studentId, BatchID, FacultyId, DegreeID, Type, Marks } = req.body;

  try {
    const newResult = new Result({
      studentId,
      BatchID,
      FacultyId,
      DegreeID,
      Type,
      Marks,
    });

    const savedResult = await newResult.save();

    res.status(201).json({ message: "Result added successfully", savedResult });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding result" });
  }
};

// Fetch a Result by ID
export const fetchResult = async (req: Request, res: Response) => {
  const studentId = req.body.userId;

  try {
    const results = await Result.find({ studentId });

    if (!results) {
      return res
        .status(404)
        .json({ error: "No results found for this student" });
    }

    res.status(200).json({ message: "Results fetched successfully", results });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching results" });
  }
};
