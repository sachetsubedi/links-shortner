import { ErrorHandler } from '@/utils/error';
import { Request, Response } from 'express';
import { validateLinksInput } from './validator';
import { isValidLink } from '@/utils/utils';

export const LinksController = {
  create: async (req: Request, res: Response) => {
    try {
      // Validate the data
      const data = validateLinksInput(req.body);
      console.log('HERE');
    } catch (error) {
      // If error occurs handle the error
      const handledError = ErrorHandler.handleError(res, error);
      return res.status(handledError.code).json(handledError);
    }
  },
};
