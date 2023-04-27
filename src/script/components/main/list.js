export class List {
  constructor(data) {
    this.data = data;
  }

  render() {
    const list = document.createElement('div');
    list.classList.add('view_list');

    const template = `
    <div class="view_list"></div>
      <div class="prev-button"><img src="/src/assets/images/leftButton.svg"/></div>
      <div class="next-button"><img src="/src/assets/images/rightButton.svg"</div>
    </div>
    `;

    list.innerHTML = template;

    return list;
  }
}
