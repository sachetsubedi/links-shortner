export const isValidLink = (url: string): boolean => {
  const pattern = /^(https?:\/\/)(www\.)?([\w-]+\.)+[\w-]{2,}(\/[\w.-]*)*(\?.*)?(#.*)?$/;
  return pattern.test(url);
};
