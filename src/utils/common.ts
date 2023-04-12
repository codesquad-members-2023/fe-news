export const createCurrentPageIndex = (maxLength: number) => {
  let currentPageIndex = [-1, 0, 1];
  let num = 0;
  return {
    get: () => currentPageIndex,
    change: (position: 'left' | 'right') => {
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
