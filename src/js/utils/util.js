const createElement = (tagName, className) => {
  const element = document.createElement(`${tagName}`);
  className ? element.className = `${className}` : null;
  return element;
}

export default createElement;