const getRandomData = (array, count) => {
  const set = new Set();
  while(set.size < count) {
    const random = Math.floor(Math.random() * array.length);
    set.add(array[random]);
  }
  return [...set];
}

export default getRandomData;