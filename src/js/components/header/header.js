import createEl from '../../utils/util.js';

const header = (TITLENAME, systemTime) => {
  const header = createEl("header", "title-area");
  header.innerHTML = `<a class="link-newsstand">${TITLENAME}</a>
  <span class="system-time">${systemTime}</span>`;

  header.addEventListener("click", e => reloadNewsStand(e));
  return header;
}

const reloadNewsStand = ({ target }) => {
  const isTarget = target.tagName;
  if(isTarget !== 'A') return;
  location.reload();
}

export default header;