export const makeDate = () => {
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "2-digit", day: "2-digit" };
  return `<span class="date_text">${today.toLocaleDateString("ko-KO", options)}</span>`;
};
