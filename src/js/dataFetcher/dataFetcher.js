export default class DataFetcher {
  constructor(url) {
    this._url = url;
    this._data;
  }

  async fetchData(type) {
    try {
      const response = await fetch(`${this._url}${type}`);
      this._data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  getResult() {
    return this._data;
  }
}
