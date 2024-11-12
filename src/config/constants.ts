import dotenv from 'dotenv';
dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PROD_ENV = process.env.NODE_ENV === 'production' ? true : false;
export const DEV_ENV = process.env.NODE_ENV === 'development' ? true : false;

export const PORT = process.env.PORT || 3000;

export const BASE_URL = process.env.BASE_URL;

export const LINK_EXPURATION_TIME = Number(process.env.LINK_EXPURATION_TIME) || 30 * 60 * 1000;
