export class Grid {
  constructor(data) {
    this.data = data;
  }

  render() {
    const grid = document.createElement('div');
    grid.classList.add('view_grid');

    const template = `
      <div class="view_grid">
        ${this.data.reduce((acc, cur) => {
          acc += `<li><img src="${cur.mediaInfo.imgSrc}"</li>`;
          return acc;
        }, '')}
      </div>
      <div class="prev-button"><img src="/src/assets/images/leftButton.svg"/></div>
      <div class="next-button"><img src="/src/assets/images/rightButton.svg"</div>
    `;

    grid.innerHTML = template;

    return grid;
  }


}
