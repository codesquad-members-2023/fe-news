export const getData = async (url) => await fetch(url).then((res) => res.json());
export const getChucks = ({ arr, count = 1 }) => {
  const chunks = [];

  for (let i = 0; i < arr.length; i += count) {
    chunks.push(arr.slice(i, i + count));
  }

  return chunks;
};
