class Grid {
  constructor(data) {
    this.data = data;
  }

  template() {
    return `
    <div class="grid__container">
      ${this.generatePress(this.data)}
    </div>
    `;
  }

  generatePress(data) {
    return data.mediaData.reduce((acc, cur) => {
      acc += `<div class="press-logo"><img src="${cur.mediaInfo.imgSrc}"/></div>`;
      return acc;
    });
  }
}

export { Grid };
