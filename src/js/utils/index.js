export const domUtils = {
  $: ({ selector, parent = document }) => parent.querySelector(selector),
  $$: ({ selector, parent = document }) => parent.querySelectorAll(selector)
};

export const dataUtils = {
  getData: async (url) => await fetch(url).then((res) => res.json()),
  getChucks: ({ arr, count = 1 }) => {
    const chunks = [];

    for (let i = 0; i < arr.length; i += count) {
      chunks.push(arr.slice(i, i + count));
    }

    return chunks;
  }
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
