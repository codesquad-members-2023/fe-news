export const customSetInterval = ({
  intervalTime,
  callback,
}: {
  intervalTime: number;
  callback: any;
}) => {
  let lastTime: any = null;
  let id: any = null;
  const step = (timestamp: any) => {
    if (!lastTime) lastTime = timestamp;
    const now = timestamp;
    const elapsed = now - lastTime;
    if (elapsed >= intervalTime) {
      callback();
      lastTime = now;
    }
    id = requestAnimationFrame(step);
  };

  const start = () => {
    if (id === null) {
      requestAnimationFrame(step);
    }
  };

  const stop = () => {
    if (id !== null) {
      cancelAnimationFrame(id);
      id = null;
    }
  };

  start();

  return { start, stop };
};
