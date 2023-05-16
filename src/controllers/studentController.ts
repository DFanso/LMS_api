import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Student from '../models/Student';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { studentId, username, password, name, email, phone, address, nic, faculty, dob, degree, batch } = req.body;

  try {
    const existingStudent = await Student.findOne({ studentId });
    if (existingStudent) {
      const error: any = new Error('Student ID already exists');
      error.status = 400;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ studentId, username, password: hashedPassword, name, email, phone, address, nic, faculty, dob, degree, batch });
    await student.save();

    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    const student = await Student.findOne({ username });
    if (!student) {
      const error: any = new Error('Student not found');
      error.status = 400;
      return next(error);
    }

    const passwordMatch = await bcrypt.compare(password, student.password);
    if (!passwordMatch) {
      const error: any = new Error('Incorrect password');
      error.status = 400;
      return next(error);
    }

    // Check if SECRET_KEY is defined
    if (!process.env.SECRET_KEY) {
      throw new Error('SECRET_KEY must be defined in .env');
    }

    const token = jwt.sign({ id: student._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
