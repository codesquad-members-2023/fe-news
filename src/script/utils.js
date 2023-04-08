export function createNode(element) {
  return document.createElement(element)
}

export function elementIs(selector, parent = document) {
  return parent.querySelector(selector)
}
