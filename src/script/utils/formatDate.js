export const getFormattedDate = (date) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  };

  const formattedDate = date.toLocaleDateString('ko', options);

  return formattedDate;
};
