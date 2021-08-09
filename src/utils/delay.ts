export const delayMs = (microseconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, microseconds);
  });
};

export const delay = (seconds: number): Promise<void> => {
  return delayMs(seconds * 1000);
};
