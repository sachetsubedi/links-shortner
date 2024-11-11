import { ErrorHandler } from '@/utils/error';
import { ResponseHandler } from '@/utils/response';
import { Request, Response } from 'express';

export const StatusController = {
  status: (req: Request, res: Response) => {
    try {
      // Generate a success response
      const response = ResponseHandler.success(res, 200, 'I am alive and well!', null);

      // Return the response
      return res.status(response.code).json(response);
    } catch (error) {
      // Handle the error
      const handledError = ErrorHandler.handleError(res, error);

      // Return the error
      return res.status(handledError.code).json(handledError);
    }
  },
};
