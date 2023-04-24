export const suffleData = (data) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

export const listUpCategoryIds = (data) => {
  const allCategories = data.map(({ category_id }) => category_id);
  const filteredCategories = new Set(allCategories);
  return [...filteredCategories];
};

export const listUpPressName = (data) => {
  const allCategories = data.map(({ name }) => name);
  const filteredCategories = new Set(allCategories);
  return [...filteredCategories];
};

export const getPageNumberByDir = (dir, page) => {
  return dir === "right" ? (page += 1) : (page -= 1);
};
