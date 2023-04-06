export default class NewsStandView {
  constructor(ref, header) {
    this.mainContainer = ref.newsStandContainer;
    this.header = header;
    this.render();
  }

  getTemplate() {
    const HeaderTemplate = this.header.getHeaderTemplate();
    return `${HeaderTemplate}`;
    // html 영역이 계속 늘어나는 경우 더하기를 통해서 더해주기
  }
  render() {
    const template = this.getTemplate();
    this.mainContainer.insertAdjacentHTML('afterbegin', template);
  }
}

// render 및 이벤트 등록
