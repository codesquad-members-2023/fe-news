export default class HeadlineMaker {
  constructor({ headlineElement }, dataFetcher) {
    this.headlineElement = headlineElement;
    this.dataFetcher = dataFetcher;
    this.headlineLiLength = 5;
    this.headlineData;
    this.template;
  }

  async getHeadlineTemplate() {
    await this.setHeadlineData();
    this.createHeadline();
    return this.template;
  }

  async setHeadlineData() {
    await this.dataFetcher.fetchData('headline');
    this.headlineData = this.dataFetcher.getResult();
  }

  createHeadline() {
    let headlineLeftLi = '';
    let headlineRightLi = '';

    this.headlineData.forEach((data) => {
      data.id <= this.headlineLiLength
        ? (headlineLeftLi += `<li>${data.title}</li>`)
        : (headlineRightLi += `<li>${data.title}</li>`);
    });

    this.template = `<div class="newsstand_headline_container">
    <div class="newsstand_headline left">
      <a class="headline_press">${this.headlineElement.title}</a>
      <div class="headline_rolling_container">
        <ul class="headline_rolling_news">${headlineLeftLi}
        </ul>
      </div>
    </div>
    <div class="newsstand_headline right">
      <a class="headline_press">${this.headlineElement.title}</a>
      <div class="headline_rolling_container">
        <ul class="headline_rolling_news">${headlineRightLi}
        </ul>
      </div>
    </div>
  </div>`;
  }
}
