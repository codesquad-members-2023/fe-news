export const domUtils = {
  $: ({ selector, parent = document }) => parent.querySelector(selector),
  $$: ({ selector, parent = document }) => parent.querySelectorAll(selector)
};

export const dataUtils = {
  getData: async (url) => await fetch(url).then((res) => res.json()),
  getDataSlices: ({ dataArr, count = 1 }) => {
    const dataSlices = [];

    for (let i = 0; i < dataArr.length; i += count) {
      dataSlices.push(dataArr.slice(i, i + count));
    }

    return dataSlices;
  },
  getDataByCategory: ({ dataArr, categories }) => {
    const dataByCategory = {};

    categories.forEach((category) => {
      dataByCategory[category] = dataArr.filter(({ newsCategory }) => newsCategory === category);
    });

    return dataByCategory;
  },
  getDataCountByCategory: (dataByCategory) => {
    const dataCountByCategory = {};

    for (const [category, dataArr] of Object.entries(dataByCategory)) {
      dataCountByCategory[category] = dataArr.length;
    }

    return dataCountByCategory;
  },
  sortData: (dataArr, categoryOrderArr) =>
    dataArr.sort(
      (a, b) => categoryOrderArr.indexOf(a.newsCategory) - categoryOrderArr.indexOf(b.newsCategory)
    )
};

export const getObjectType = (obj) => {
  if (!(obj instanceof Object)) throw new Error('obj is not an object');
  return Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1];
};

export const validatorUtils = {
  hasValue: (obj, value) => {
    if (!(obj instanceof Object)) return;

    const objectType = getObjectType(obj);
    if (objectType === 'Map' || objectType === 'Set') {
      return obj.has(value);
    }
  },
  hasKey: (obj, value) => {
    if (!(obj instanceof Object)) return;

    const objectType = getObjectType(obj);
    if (objectType === 'Map') {
      return obj.has(value);
    }
  },

  isActiveTab: ({ pressTabType, showTabType, activePressTab, activeShowTab }) =>
    pressTabType === activePressTab && showTabType === activeShowTab,
  isFirstPage: (currentPage) => currentPage === 0,
  isLastPage: (currentPage, totalPages) => currentPage === totalPages - 1
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getUniqueRandomNumbersArr = (min, max) => {
  const len = max - min + 1;
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < len) {
    uniqueNumbers.add(getRandomNumber(min, max));
  }

  return Array.from(uniqueNumbers);
};
