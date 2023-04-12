export default class HEADLINEModel {
  constructor({ headlineElement }, dataFetcher) {
    this._state = {
      title: headlineElement.title,
      headlineLeftList: '',
      headlineRightList: '',
    };
    this._headlineLength = headlineElement.headlineLength;
    this._dataFetcher = dataFetcher;
  }

  getState() {
    return this._state;
  }

  async getInitialState() {
    await this._dataFetcher.fetchData('headline');
    this._dataFetcher.getResult().forEach((headline) => {
      headline.id <= this._headlineLength
        ? (this._state.headlineLeftList += `<li>${headline.title}</li>`)
        : (this._state.headlineRightList += `<li>${headline.title}</li>`);
    });
  }
}
