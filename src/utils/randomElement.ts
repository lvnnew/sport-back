// Pick random element from array
const randomElement = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export default randomElement;
