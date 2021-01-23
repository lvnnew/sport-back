// Pick random element from array
export const randomElement = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

