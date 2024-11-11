/* eslint-disable no-console*/

import { PROD_ENV } from '@/config/constants';

// This is a simple wrapper around the console object that will only log
// messages if the environment is not production. This is useful for
// debugging purposes, as you can leave these messages in your code and
// they will only be logged when you are developing.

const Console = {
  Log: function (message: unknown, ...optionalParams: unknown[]) {
    if (PROD_ENV) return;
    console.log(message, ...optionalParams);
  },

  Error: function (message: unknown, ...optionalParams: unknown[]) {
    if (PROD_ENV) return;
    console.error(message, ...optionalParams);
  },

  Info: function (message: unknown, ...optionalParams: unknown[]) {
    if (PROD_ENV) return;
    console.info(message, ...optionalParams);
  },
};

export { Console };
