import { CustomError } from '@/errors/CustomError';
import { ResponseHandler } from './response';
import { Response } from 'express';
import { ZodError } from 'zod';

export const ErrorHandler = {
  // Handle error
  handleError: function (res: Response, error: unknown) {
    if (error instanceof CustomError) return this.handleCustomError(res, error);
    else if (error instanceof ZodError) return this.handleZodError(res, error);

    return ResponseHandler.error(res, 500, 'Internal Server Error', null);
  },

  // Handle custom error
  handleCustomError: function (res: Response, error: CustomError) {
    return ResponseHandler.error(res, error.status, error.message, null);
  },

  // Handle zod error
  handleZodError: function (res: Response, error: ZodError) {
    // Flatten the errors
    const flattenedErrors: Record<string, unknown> = error.flatten().fieldErrors;
    /**
     * In case a custom data is thrown from zod object via params object
     * That needs to be respected. Simply flattening the errors
     * Will only return message and not the custom data
     * Hence we need to check if params exists and if it does
     * We need to replace the message with the custom data
     * To see the usage of params, see validation of invoiceEmails in client validation (clients/validator.tsx) file
     */
    // for each issue
    for (const issue of error.issues) {
      const issuePaths = issue.path;
      // for each path, check if issue.params exists
      for (const path of issuePaths) {
        // if issue.params exists, check if errors exists
        if ('params' in issue && issue.params) {
          // if errors exists, add it to flattenedErrors
          flattenedErrors[path] = issue.params;
        }
      }
    }

    return ResponseHandler.error(res, 422, 'Validation Error', flattenedErrors);
  },
};
