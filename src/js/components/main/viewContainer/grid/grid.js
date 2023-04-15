import createEl from '../../../../utils/util.js';
import subscribeButton from '../../buttons/subscribeButton.js';

class GridView {
  #gridData;
  page = 0;
  FIRST_PAGE = 0;
  LAST_PAGE = 3;
  PREV_BTN = 'prev-button';
  NEXT_BTN = 'next-button';
  constructor(gridData) {
    this.#gridData = gridData;
    this.viewContainer = createEl('div', 'view-container');
    this.moveToPage();
  }

  render() {
    this.viewContainer.innerHTML = '';
    const gridView = this.getGrid();
    const buttons = this.getButtons();

    this.viewContainer.insertAdjacentHTML('afterbegin', gridView);
    this.viewContainer.insertAdjacentHTML('beforeend', buttons);
    return this.viewContainer;
  }

  getGrid() {
    const GRID_COUNT = 24;
    const pressInfo = this.#gridData.slice(
      GRID_COUNT * this.page,
      GRID_COUNT * (this.page + 1),
    );

    return `<div class="grid-area">
      ${pressInfo.reduce((template, press) => {
        template += `<div><img src=${press.pressLogo}></div>`;
        return template;
      }, ``)}
    </div>`
  }

  getButtons() {
    return `<a class=${this.PREV_BTN} style="visibility:${
      this.page === this.FIRST_PAGE ? 'hidden' : 'visible'
    }"></a>
    <a class=${this.NEXT_BTN} style="visibility:${
      this.page === this.LAST_PAGE ? 'hidden' : 'visible'
    }"></a>`;
  }

  moveToPage() {
    this.viewContainer.addEventListener('click', ({ target }) => {
      const isPrevBtn = target.className === this.PREV_BTN;
      const isNextBtn = target.className === this.NEXT_BTN;

      if(!(isPrevBtn || isNextBtn)) return;
      if (isPrevBtn && this.page > this.FIRST_PAGE) this.page--;
      if (isNextBtn && this.page < this.LAST_PAGE) this.page++;
      this.render();
    });
  }
}

export default GridView;
