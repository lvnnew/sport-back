export const delay = (seconds: number) => {
  return delayMs(seconds * 1000);
};

export const delayMs = (microseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, microseconds);
  });
};
