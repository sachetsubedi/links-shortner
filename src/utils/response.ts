import { Response } from 'express';
import moment from 'moment';

export const ResponseHandler = {
  success: (res: Response, code: number, message: string, data: unknown) => {
    return { success: true, code, message, data, meta: ResponseHandler.meta(res) };
  },

  error: (res: Response, code: number, message: string, error: unknown) => {
    return { success: false, code, message, error, meta: ResponseHandler.meta(res) };
  },

  notfound: (res: Response) => {
    return { success: false, code: 404, message: 'Not Found', data: null, meta: ResponseHandler.meta(res) };
  },

  meta: (res: Response) => {
    return {
      requestId: res.locals.requestId,
      timestamp: moment().toISOString(),
      unix: moment().unix(),
    };
  },
};
