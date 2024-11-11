import * as crypto from 'crypto';

export const UUID = {
  // Generate a random UUID equivalent to uuidv4
  generate: () => crypto.randomUUID(),
};
