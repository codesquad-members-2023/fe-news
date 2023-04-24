import getCurrentDate from '../../utils/currentDate.js';

const createHeader = () => {
  const header = document.createElement('div');
  header.classList.add('newsstand_header');

  const date = new Date();
  const template = `
    <div class="title">
      <img src="../src/assets/images/newsstand_logo.svg"/>
      <span>뉴스스탠드</span>
    </div>
    <div class="date">${getCurrentDate(date)}</div>
  `;

  header.innerHTML = template;

  return header;
};

export default createHeader;
