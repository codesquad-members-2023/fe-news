export const $ = (selector) => document.querySelector(selector);

export const renderMaker = (selector, element, template, name) => {
  const root = $(selector);
  const makeElement = document.createElement(element);
  if (name) {
    name.map((data) => {
      makeElement.classList.add(data);
    });
  }
  root.appendChild(makeElement);
  makeElement.innerHTML = template;
};
