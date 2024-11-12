import { Response } from 'express';

export type T_Response = {
  success: boolean;
  status: number;
  message: string;
  data: object;
};
export type ExpressResponse = Promise<Response<T_Response>>;
