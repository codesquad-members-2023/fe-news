export default class HEADERModel {
  constructor({ headerElement }) {
    this._state = {
      logoImgSrc: headerElement.logoImgSrc,
      imgAlt: headerElement.imgAlt,
      title: headerElement.title,
      date: this.getDate(),
    };
    this._headerElement = headerElement;
  }

  getState() {
    return this._state;
  }

  getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = days[today.getDay()];

    return `${year}.${month}.${date} ${dayOfWeek}요일`;
  }
}

// headline과 동일하게 getInitialState 매서드를 만들어야하나
