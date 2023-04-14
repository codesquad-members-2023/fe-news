import createEl from '../utils/util.js';

const Header = (TITLENAME, systemTime) => {
  const header = createEl('header', 'title-area');
  header.innerHTML = `<a href="" class="link-newsstand">${TITLENAME}</a>
  <span class="system-time">${systemTime}</span>`;
  return header;
};

export default Header;