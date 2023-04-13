export default class HEADERView {
  constructor({ headerModel }, ref) {
    this._target = ref.newsstandContainer;
    this._model = headerModel;
    this._markUp;
    this.render();
  }

  render() {
    const state = this._model.getState();
    this._markUp = this.generateMarkup(state);
    this._target.insertAdjacentHTML('afterbegin', this._markUp);
  }

  generateMarkup(state) {
    return `<div class="newsstand_header">
    <span class="newsstand_header_title">
      <a onClick="window.location.reload()">
      <img class="header_title_logo" src="${state.logoImgSrc}" alt="${state.imgAlt}" />
      <span class="header_title_text">${state.title}</span></a>
    </span>
    <span class="newsstand_header_date">${state.date}</span>
  </div>`;
  }
}
