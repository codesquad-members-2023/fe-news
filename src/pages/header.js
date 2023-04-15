const viewHeader = () => {
  const newElement = document.createElement('div');
  const template = `
  <div class="header">
    <div class="title">
      <img src="../src/assets/images/newsstand_logo.svg"/>
      <span>뉴스스탠드</span>
    </div>
    <div class="date">${getCurrentDate()}</div>
  </div>
  `;
  newElement.innerHTML = template;

  return newElement;
};

const getCurrentDate = () => {
  const WEEK = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const date = new Date();
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekDay: WEEK[date.getDay()],
  };
  const today = `${dateInfo.year}.${dateInfo.month}.${dateInfo.day}.${dateInfo.weekDay}`;

  return today;
};

export { viewHeader };
