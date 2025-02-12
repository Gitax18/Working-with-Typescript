export const stringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split("/")
    .map((s: string): number => parseInt(s));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
