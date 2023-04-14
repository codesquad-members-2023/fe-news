const maxLength = 5;
const getCurrentPageIndex = () => {
  let currentPageIndex = [-1, 0, 1];
  let num = 0;
  return {
    get: () => currentPageIndex,
    change: (position) => {
      num++;

      let result = currentPageIndex;
      const isLeft = position === 'left';

      if (isLeft) {
        const newPage = result[0] - 1;

        if (newPage < -1) {
          return null;
        }

        result = result.slice(0, 2);
        result.unshift(newPage);
        currentPageIndex = result;
        return currentPageIndex;
      }

      const newPage = result[2] + 1;

      if (newPage > maxLength) {
        return null;
      }

      result = result.slice(1, 3);
      result.push(newPage);
      currentPageIndex = result;
      return currentPageIndex;
    },
  };
};

// const changeCurrentPage = (position, currentPageIndex) => {
//   let result = currentPageIndex;
//   const isLeft = position === 'left';

//   if (isLeft) {
//     const newPage = result[0] - 1;

//     if (newPage < 0) {
//       return console.log('Error');
//     }

//     result = result.slice(0, 2);
//     result.unshift(newPage);
//     result = result;
//     return;
//   }
//   const newPage = result[2] + 1;

//   if (newPage > maxLength - 1) {
//     return console.log('Error');
//   }

//   result = result.slice(1, 3);
//   result.push(newPage);
//   result = result;
//   console.log({ result });
//   return result;
// };

// changeCurrentPage('left');

// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');
// changeCurrentPage('right');

const currentPageIndex = getCurrentPageIndex();
console.log(currentPageIndex.get());
console.log(currentPageIndex.changeCurrentPage('right'));
console.log(currentPageIndex.changeCurrentPage('left'));
console.log(currentPageIndex.changeCurrentPage('left'));
console.log(currentPageIndex.changeCurrentPage('left'));
console.log(currentPageIndex.changeCurrentPage('right'));
console.log(currentPageIndex.changeCurrentPage('right'));
console.log(currentPageIndex.changeCurrentPage('right'));
console.log(currentPageIndex.changeCurrentPage('right'));
console.log(currentPageIndex.changeCurrentPage('right'));
