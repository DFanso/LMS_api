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
  const id = req.body.resultID;
  console.log(id);
  try {
    const result = await Result.findById(id);

    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the result" });
  }
};
