export const pickRandomData = <T>(data: T[], count: number) => {
  const picked: T[] = [];
  for (let i = 0; i < count; i++) {
    const tempIndex = Math.floor(Math.random() * data.length);
    picked.push(data[tempIndex]);
    data = data.filter((n: T) => !picked.includes(n));
  }
  return picked;
};
