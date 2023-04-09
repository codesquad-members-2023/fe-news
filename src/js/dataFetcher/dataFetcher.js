export default class DataFetcher {
  constructor(url) {
    this.url = url;
    this.data;
    this.template;
  }

  async fetchData(type) {
    try {
      const response = await fetch(`${this.url}${type}`);
      this.data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  getResult() {
    return this.data;
  }
}
