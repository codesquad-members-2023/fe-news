export const getPressData = async () => {
  const response = await fetch("http://localhost:5500/presses");
  const pressData = await response.json();
  return pressData;
};

export const getPressCategories = async () => {
  const response = await fetch("http://localhost:5500/categories");
  const pressCategories = await response.json();
  return pressCategories;
};
