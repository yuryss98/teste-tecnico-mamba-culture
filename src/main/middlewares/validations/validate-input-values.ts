import { ValidationError } from 'joi';
import { Response, NextFunction, Request } from 'express';
import {
  createCampaingSchema,
  deleteCampaingSchema,
} from './schema';
import CustomError from '../../../domain/error/custom-error';

const checkError = (error: ValidationError | undefined, next: NextFunction) => {
  if (error) {
    if (error.message.includes('is required')) {
      throw new CustomError('BAD_REQUEST', error.message);
    }

    throw new CustomError('UNPROCESSABLE_ENTITY', error.message);
  }

  next();
};

export const validateCreateCampaign = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = createCampaingSchema.validate(req.body);

  return checkError(error, next);
};

export const validateDeleteCampaign = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = deleteCampaingSchema.validate(req.body);

  return checkError(error, next);
};
