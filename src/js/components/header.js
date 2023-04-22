import createEl from '../utils/util.js';

export const createHeader = (newsHeaderInfo) => {
  const header = createEl('header', 'title-area');
  header.innerHTML = `<a href="" class="link-newsstand">${newsHeaderInfo.headerTitle}</a>
  <span class="system-time">${newsHeaderInfo.timeOption}</span>`;
  return header;
};