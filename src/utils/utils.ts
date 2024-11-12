const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const isValidLink = (url: string): boolean => {
  const pattern = /^(https?:\/\/)(www\.)?([\w-]+\.)+[\w-]{2,}(\/[\w.-]*)*(\?.*)?(#.*)?$/;
  return pattern.test(url);
};

export const generateRandomPath = () => {
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
