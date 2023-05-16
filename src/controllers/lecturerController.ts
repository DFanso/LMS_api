import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import Lecturer from '../models/lecturer';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { staffId, name, username, password, email, phone, address, dob, faculty, role, nic } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const lecturer = new Lecturer({
      staffId,
      name,
      username,
      password: hashedPassword,
      email,
      phone,
      address,
      dob,
      faculty,
      role,
      nic
    });

    await lecturer.save();
    res.status(201).json({ message: 'Lecturer registered successfully' });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
  
    try {
      const lecturer = await Lecturer.findOne({ username });
      if (!lecturer) {
        const error: any = new Error('Lecturer not found');
        error.status = 400;
        return next(error);
      }
  
      const passwordMatch = await bcrypt.compare(password, lecturer.password);
      if (!passwordMatch) {
        const error: any = new Error('Incorrect password');
        error.status = 400;
        return next(error);
      }
  
      // Check if SECRET_KEY is defined
      if (!process.env.SECRET_KEY) {
        throw new Error('SECRET_KEY must be defined in .env');
      }
  
      const token = jwt.sign({ id: lecturer._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
      res.json({ token });
    } catch (err) {
      next(err);
    }
  };