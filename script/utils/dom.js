export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const renderMaker = ({ selector, element, template, nameList }) => {
  const root = $(selector);
  const makeElement = document.createElement(element);
  if (nameList) {
    nameList.forEach((data) => {
      makeElement.classList.add(data);
    });
  }
  root.appendChild(makeElement);
  makeElement.innerHTML = template;
};
