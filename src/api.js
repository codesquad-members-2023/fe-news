export const getPressData = async () => {
  const response = await fetch("http://localhost:5500/presses");
  const data = await response.json();
  return data;
};
