export const reduce = (callback, initialValue = undefined) => {
  let index = 0;
  let accumulator;
  initialValue
    ? (accumulator = initialValue)
    : ([index, accumulator] = [1, this[0]]);

  for (; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }

  return accumulator;
};
