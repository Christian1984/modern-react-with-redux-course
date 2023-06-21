const pause = async (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export default pause;
export { pause };
