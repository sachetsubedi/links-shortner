import { UUID } from '@/utils/uuid';
import { Request, Response, NextFunction } from 'express';

export function assignRequestId(req: Request, res: Response, next: NextFunction) {
  // Generate a unique ID for each request
  const requestId = UUID.generate();

  // Assign a unique ID to each request
  res.locals.requestId = requestId;

  // Set the unique ID in the response header
  res.setHeader('X-Request-Id', requestId);

  // Move to the next middleware
  next();
}
