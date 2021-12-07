const randomElements = <T>(items: T[]): T[] => {
  const count = Math.floor(Math.random() * items.length);
  const result: T[] = [];
  const buffer = [...items];

  for (let i = 0; i < count; i++) {
    const picked = Math.floor(Math.random() * buffer.length);
    result.push(...buffer.splice(picked, 1));
  }

  return result;
};

export default randomElements;
