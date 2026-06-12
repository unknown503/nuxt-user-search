export const slugify = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-')