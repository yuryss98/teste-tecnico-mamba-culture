import { NextFunction, Request, Response } from 'express';
import CustomError from '../../domain/error/custom-error';
import { mapError } from './map-error';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  const { name, message } = err as CustomError;
  res.status(mapError[name] || 500).json({ message });
}
