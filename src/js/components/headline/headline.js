class Headline {
  constructor(data) {
    this.leftData = data.left;
    this.rightData = data.right;
  }

  template(data) {
    return `
      <div class="headline_rolling-container">
        <div class="media">연합뉴스</div>
        <ul class="issue">${this.generateIssueList(data)}</ul>
      </div>
    `;
  }

  generateIssueList(data) {
    return data.reduce((acc, cur) => {
      acc += `<li class="issue_item">${cur}</li>`;
      return acc;
    }, '');
  }

  render() {
    const headline = document.createElement('div');
    headline.classList.add('newsstand_headline');

    headline.innerHTML = `
    ${this.template(this.leftData)}
    ${this.template(this.rightData)}
  `;

    return headline;
  }
}

export { Headline };
