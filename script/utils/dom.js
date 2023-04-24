export const $ = (selector) => document.querySelector(selector);

export const renderMaker = ({ selector, element, template, nameList }) => {
  const root = $(selector);
  const makeElement = document.createElement(element);
  if (nameList) {
    nameList.map((data) => {
      makeElement.classList.add(data);
    });
  }
  root.appendChild(makeElement);
  makeElement.innerHTML = template;
};
