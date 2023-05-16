import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface RequestWithUser extends Request {
  user?: any;
}

export const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  // Get token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    const error = new Error('No token provided') as any;
    error.status = 401;
    return next(error);
  }

  // Verify the token
  jwt.verify(token, process.env.SECRET_KEY as string, (err, user) => {
    if (err) {
      const error = new Error('Invalid token') as any;
      error.status = 403;
      return next(error);
    }

    req.user = user;
    next();
  });
};
