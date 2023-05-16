import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface RequestWithUser extends Request {
  user?: any;
}

export const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  // Get token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    const error: any = new Error('No token provided');
    error.status = 401;
    return next(error);
  }

  // Verify the token
  jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
    if (err || typeof decoded === 'string') {
      const error: any = new Error('Invalid token');
      error.status = 403;
      return next(error);
    }

    const userId = (decoded as JwtPayload).id;

    req.body.userId = userId;
    console.log(req.body.userId)
    next();
  });
};
