const viewHeader = () => {
  const header = document.createElement('div');
  header.classList.add('newsstand_header');

  const template = `
    <div class="title">
      <img src="../src/assets/images/newsstand_logo.svg"/>
      <span>뉴스스탠드</span>
    </div>
    <div class="date">${getCurrentDate()}</div>
  `;

  header.innerHTML = template;

  return header;
};

const getCurrentDate = () => {
  const WEEK = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const date = new Date();
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    day: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    weekDay: WEEK[date.getDay()],
  };
  const today = `${dateInfo.year}.${dateInfo.month}.${dateInfo.day}.${dateInfo.weekDay}`;

  return today;
};

export { viewHeader };
