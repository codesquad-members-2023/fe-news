import getFormattedDate from '../utils/formatDate.js';

const Header = () => {
  const header = document.createElement('div');
  header.classList.add('newsstand_header');

  const date = new Date();
  const template = `
  <div class="title">
    <img src="./src/assets/images/logo.svg"/>
    <span>뉴스스탠드</span>
  </div>
  <div class="date">${getFormattedDate(date)}</div>
  `;

  header.innerHTML = template;

  return header;
};

export default Header;
