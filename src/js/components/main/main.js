import { mainHeaderView } from './header.js';
import { Grid } from './grid.js';

class Main {
  constructor(data) {
    this.data = data;
  }

  template() {
    const grid = new Grid(this.data);
    return `
    <div class="main_header">
      ${mainHeaderView()}
    </div>
    <div class="main_view">
      ${grid.template()}
    </div>
    `;
  }

  render() {
    const grid = document.createElement('div');
    grid.classList.add('newstand_main');
    grid.innerHTML = this.template();
    return grid;
  }
}

export { Main };
