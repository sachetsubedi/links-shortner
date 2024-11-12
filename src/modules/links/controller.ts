import { ErrorHandler } from '@/utils/error';
import { Request, Response } from 'express';
import { validateLinksInput } from './validator';
import { LinksService } from './service';
import { generateRandomPath } from '@/utils/utils';
import { CustomError } from '@/errors/CustomError';
import { BASE_URL } from '@/config/constants';
import { ExpressResponse } from '@/@types/type';

export const LinksController = {
  create: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Validate the data
      const data = validateLinksInput(req.body);

      // Check if base url is provided
      if (!BASE_URL) throw new CustomError('Base URL not set', 400);

      // If the data is valid, create the link
      let randomPath = '';
      if (data.randomPath) {
        // Generate a random path, until a unique one is found

        do {
          const generatedRandomPath = generateRandomPath();
          randomPath = generatedRandomPath;
        } while (await LinksService.pathAlreadyExists(randomPath));

        // Check if the path already exists
        const pathExists = await LinksService.pathAlreadyExists(randomPath);

        // If the path exists, generate a new one
        if (pathExists) return LinksController.create(req, res);

        // Else create the link
        const fromLink = await LinksService.generateFromLink(randomPath);

        const link = await LinksService.createLink(randomPath, data.to, fromLink);

        return res.status(201).json({
          success: true,
          code: 201,
          message: 'Link created successfully',
          data: link,
        });
      } else if (data.path) {
        // Check if the path already exists
        const pathExists = await LinksService.pathAlreadyExists(data.path);

        // If the path exists, throw an error
        if (pathExists) throw new CustomError('Path already exists, Please provide another one', 400);

        // Create the link
        const fromLink = await LinksService.generateFromLink(data.path);

        const link = await LinksService.createLink(data.path, data.to, fromLink);

        return res.status(201).json({
          success: true,
          code: 201,
          message: 'Link created successfully',
          data: link,
        });
      }

      return res.status(400).json({
        success: false,
        code: 400,
        message: 'Invalid data provided',
        data: null,
      });
    } catch (error) {
      // If error occurs handle the error
      const handledError = ErrorHandler.handleError(res, error);
      // console.log(error);
      return res.status(handledError.code).json(handledError);
    }
  },
};
