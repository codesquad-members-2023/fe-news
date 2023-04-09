// 프로젝트 내에서 재사용성이 높은 함수, 범용성있게 구현하기
// 람다 표기법을 사용해서 return 하지말고 더 깔끔하게 구현하기

const createEl = (tagName, className) => {
  const element = document.createElement(`${tagName}`);
  className ? element.className = `${className}` : null;
  return element;
}

export default createEl;