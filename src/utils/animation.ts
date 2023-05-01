export const customSetInterval = ({
  intervalTime,
  callback,
}: {
  intervalTime: number;
  callback: any;
}) => {
  let id: any = null;

  const start = () => {
    if (id === null) {
      id = setInterval(callback, intervalTime);
    }
  };

  const stop = () => {
    if (id !== null) {
      clearInterval(id);
      id = null;
    }
  };

  start();

  return { start, stop };
};
