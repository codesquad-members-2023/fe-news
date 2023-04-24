const getRandomData = (array, count) => {
  const set = new Set();

  while (set.length < count) {
    const randomIdx = Math.floor(Math.random() * array.length);
    set.add(array[randomIdx]);
  }
  return set;
};

export default getRandomData;

// 조건 걸기