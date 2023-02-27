export const dateConversion = (date) => {
  const asString = date;
  const splitDateString = asString.split(' ');
  const [month, day, year] = splitDateString[1].split('/');
  const [hours, minutes] = splitDateString[0].split(':');
  const asDate = new Date(+year, +month - 1, +day, hours, minutes);
  return asDate;
};
