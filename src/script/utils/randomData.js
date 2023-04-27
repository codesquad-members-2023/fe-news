export const getRandomData = (array, count) => {
  const set = new Set();

  while (set.size < count) {
    const randomIdx = Math.floor(Math.random() * array.length);
    set.add(array[randomIdx]);
  }
  return [...set];
};