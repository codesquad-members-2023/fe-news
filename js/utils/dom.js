const setAttributes = (element, attributes = {}) => {
  for (const attributeKey in attributes) {
    element.setAttribute(attributeKey, attributes[attributeKey]);
  }
};

const setAttributesNS = (element, attributes = {}) => {
  for (const attributeKey in attributes) {
    element.setAttributeNS(attributeKey, attributes[attributeKey]);
  }
};

export const createElement = (elementName, options = {}) => {
  const $element = document.createElement(elementName);
  setAttributes($element, options);
  return $element;
};

export const createSVGElement = (svgURL, elementName, options = {}) => {
  const $svgElement = document.createElementNS(svgURL, elementName);
  setAttributesNS($svgElement, options);
  return $svgElement;
};
