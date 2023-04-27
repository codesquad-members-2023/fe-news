const add = (accumulator, currentValue) => {
  return [accumulator.length > 0 ? accumulator[accumulator.length - 1] + currentValue : currentValue];
};

const naniiReduce = (array, callback, initialValue) => {
  let accumulator = initialValue;
  array.forEach(arr => accumulator = callback(accumulator, arr));
  return accumulator;
};