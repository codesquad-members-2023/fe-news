export const SUBSCRIBING_PRESSES_KEY = "subscribingPresses";

export const setLocalData = (key, data) => {
  if (typeof data === "object") {
    data = JSON.stringify(data);
  }

  localStorage.setItem(key, data);
};

export const getLocalData = (key) => {
  const data = localStorage.getItem(key);

  if (data === null) return null;

  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};
