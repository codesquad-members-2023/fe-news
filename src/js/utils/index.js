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
