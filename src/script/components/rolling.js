class Rolling {
  constructor(rollingData) {
    this.leftData = rollingData.left;
    this.rightData = rollingData.right;
  }

  template(data) {
    return `
      <div class="rolling-container">
        <div class="media">연합뉴스</div>
        <ul class="issue">${this.generateIssueList(data)}</ul>
      </div>
    `;
  }

  generateIssueList(data) {
    return data.reduce((acc, cur) => {
      acc += `<li class="issue-item">${cur}</li>`;
      return acc;
    }, '');
  }

  render() {
    const rolling = document.createElement('div');
    rolling.classList.add('newsstand_rolling');

    rolling.innerHTML = `
    ${this.template(this.leftData)}
    ${this.template(this.rightData)}
  `;

    return rolling;
  }
}

export default Rolling;
