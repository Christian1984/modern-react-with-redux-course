const enabled = false;

const pause = async (ms?: number) => {
  if (!enabled) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms || 1000);
  });
};

export default pause;
export { pause };
