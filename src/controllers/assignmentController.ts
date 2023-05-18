import { Request, Response } from "express";
import { Assignment, IAssignment } from "../models/Assignment";
import AWS from 'aws-sdk';
import Student from "../models/Student";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const createAssignment = async (req: Request, res: Response) => {
  try {
    const { title, batch, degree, moduleName, category } = req.body;

    // Check for the file
    if (!req.file) {
      return res.status(400).json({ message: 'File is missing' });
    }

    // Check for the bucket name
    if (!process.env.AWS_BUCKET_NAME) {
      return res.status(500).json({ message: 'Bucket name is missing' });
    }

    const file = req.file;

    // Upload to S3
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${Date.now()}-${file.originalname}`, // file name you want to save as in S3
      Body: file.buffer
    };

    const uploaded = await s3.upload(params).promise();

    const assignment: IAssignment = new Assignment({
      title,
      batch,
      degree,
      moduleName,
      category,
      filePath: uploaded.Location
    });

    await assignment.save();

    res.status(201).json({ message: "Assignment created successfully", assignment });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getAssignmentsForStudent = async (req: Request, res: Response) => {
  try {
    // Get the student's ID from the request
    const studentId = req.body.userId;
    console.log(studentId)

    // Find the student in the database
    const student = await Student.findById(studentId);

    // If the student wasn't found, return an error
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Get the module name from the request
const moduleName = req.body.moduleName;
console.log(moduleName)

// Find assignments that match the student's degree, batch, and the module name
const assignments = await Assignment.find({
  degree: student.degree,
  batch: student.batch,
  moduleName: moduleName
});

    // Return the assignments
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};