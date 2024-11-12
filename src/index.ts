import { PORT } from '@/config/constants';
import { assignRequestId } from '@/middlewares/assignRequestId';
import { statusRoutes } from '@/modules/status/routes';
import { Console } from '@/utils/console';
import { ResponseHandler } from '@/utils/response';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import linksRouter from '@/modules/links/routes';
import { PrismaClient } from '@prisma/client';

const app = express();

const APP_PORT = PORT || 3000;

// =================================================
// Middlewares
// =================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =================================================
// Custom Middleware
// =================================================
// Assign a unique ID to each request
app.use(assignRequestId);

// =================================================
// Morgan Middleware
// =================================================
morgan.token('id', (req: Request, res: Response) => res.locals.requestId);
app.use(morgan(':id => :method :status :response-time :url', {}));

// =================================================
// Routes
app.use('/links', linksRouter);
// =================================================

// Status Routes
app.use('/status', statusRoutes);

export const Prisma = new PrismaClient();

// Catch all 404 route
app.get('*', (req: Request, res: Response) => {
  // Generate a success response
  const response = ResponseHandler.notfound(res);

  // Return the response
  return res.status(response.code).json(response);
});

// Function to start the server
const StartServer = () => {
  app.listen(APP_PORT, () => Console.Log(`Server is running on port ${APP_PORT}`));
};

// Start the server
StartServer();
