export const trimString = (string, limit) => {
  limit = limit - 3;
  string = string.slice(0, limit) + '...';

  return string;
};
