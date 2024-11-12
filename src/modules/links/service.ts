import { BASE_URL, LINK_EXPURATION_TIME } from '@/config/constants';
import { Prisma } from '@/index';

export const LinksService = {
  pathAlreadyExists: async (path: string) => {
    // Get the link from the database with the path
    const link = await Prisma.links.findFirst({ where: { path } });
    if (link) return true;
    return false;
  },

  createLink: async (path: string, to: string, from: string) => {
    // Create a new link in the database
    const link = await Prisma.links.create({ data: { path, to, from } });
    return link;
  },

  getLink: async (path: string) => {
    // Get the link from the database with the path
    const link = await Prisma.links.findFirst({ where: { path } });
    return link;
  },

  generateFromLink: async (path: string) => {
    // Append the path to the base url
    const link = `${BASE_URL}/${path}`;

    return link;
  },

  cleanExpiredLinks: async () => {
    // Get the valid time
    const expirationTime = new Date(Date.now() - LINK_EXPURATION_TIME * 60 * 1000);

    // Delete all the expired links
    const links = await Prisma.links.deleteMany({ where: { createdAt: { lte: expirationTime } } });

    return links;
  },
};
