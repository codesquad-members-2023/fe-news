export const isFirstPage = (page: number) => page === 0;

export const sliceByPage = ({
  page,
  maxItemNum,
  items,
}: {
  page: number;
  maxItemNum: number;
  items: any;
}) => {
  const start = page * maxItemNum;
  const end = start + maxItemNum;
  return items.slice(start, end);
};
