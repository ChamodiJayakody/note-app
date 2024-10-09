import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorHandler(401, "Access Denied! No token provided."));
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Store user information in request
    next();
  } catch (err) {
    return next(errorHandler(403, "Invalid Token!"));
  }
};
