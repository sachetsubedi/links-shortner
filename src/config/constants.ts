import dotenv from 'dotenv';
dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PROD_ENV = process.env.NODE_ENV === 'production' ? true : false;
export const DEV_ENV = process.env.NODE_ENV === 'development' ? true : false;

export const PORT = process.env.PORT || 3000;
