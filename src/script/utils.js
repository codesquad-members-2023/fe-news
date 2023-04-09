const createNode = element => document.createElement(element)
const getElement = (selector, parent = document) =>
  parent.querySelector(selector)

export { createNode, getElement }
