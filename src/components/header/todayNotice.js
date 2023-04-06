export const getTodayNotice = () => {
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = ("" + today.getMonth()).padStart(2, "0");
  const date = ("" + today.getDate()).padStart(2, "0");
  const day = days[today.getDay()];

  const todayNoticeSpan = `<span class="Body-MD">${year}.${month}.${date}. ${day}</span>`;

  return todayNoticeSpan;
};
