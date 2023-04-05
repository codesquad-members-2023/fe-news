export const setAttributes = (element, attributes = {}) => {
  for (const attributeKey in attributes) {
    element.setAttribute(attributeKey, attributes[attributeKey]);
  }
};

export const createElement = (elementName, options = {}) => {
  const $element = document.createElement(elementName);
  setAttributes($element, options);
  return $element;
};
