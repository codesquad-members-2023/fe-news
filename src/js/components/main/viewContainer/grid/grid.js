import createEl from '../../../../utils/util.js';

class GridView {
  #gridData;
  page = 0;
  FIRST_PAGE = 0;
  LAST_PAGE = 3;
  constructor(gridData) {
    this.#gridData = gridData;
    this.viewContainer = createEl('div', 'view-container');
    this.moveToPage();
  }

  render() {
    this.viewContainer.innerHTML = ``;
    const gridView = this.getGrid();
    const buttons = this.getButtons();

    this.viewContainer.append(gridView);
    this.viewContainer.insertAdjacentHTML('beforeend', buttons);
    return this.viewContainer;
  }

  getGrid() {
    const GRID_COUNT = 24;
    const gridArea = createEl('div', 'grid-area');
    const pressLogoData = this.#gridData.slice(GRID_COUNT * this.page, GRID_COUNT * (this.page + 1));
    gridArea.innerHTML = pressLogoData.map((press) => `<div><img src=${press.mediaInfo.pressLogo}></div>`).join('');
    return gridArea;
  }

  getButtons() {
    return `<a class=prev-button style="visibility:${this.page === this.FIRST_PAGE ? "hidden" : "visible"}"></a>
    <a class=next-button style="visibility:${this.page === this.LAST_PAGE ? "hidden" : "visible"}"></a>`;
  }

  moveToPage() {
    this.viewContainer.addEventListener('click', ({ target }) => {
      if(!target.closest('a')) return;
      if(target.className === 'prev-button' && this.page > this.FIRST_PAGE) this.page-- ;
      if(target.className === 'next-button' && this.page < this.LAST_PAGE) this.page++;
      this.render();
    });
  }
}

export default GridView;