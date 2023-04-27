export class MainHeader {
  constructor() {}

  render() {
    const viewButton = document.createElement('div');
    viewButton.classList.add('main_header');

    const template = `
    <div class="main_view-button">
      <div class="sort_button">
        <div class="all-press"><span>전체 언론사</span></div>
        <div class="subscribe-press"><span>내가 구독한 언론사</span></div>
      </div>
      <div class="view_switch-button">
        <div class = "grid-button"><img src="src/assets/images/grid.svg"/></div>
        <div class = "list-button"><img src="src/assets/images/list.svg"/></div>
      </div>
    </div>
      <div class="view_list"></div>
      <div class="prev-button"><img src="/src/assets/images/leftButton.svg"/></div>
      <div class="next-button"><img src="/src/assets/images/rightButton.svg"</div>
    </div>

    
    `;

    viewButton.innerHTML = template;

    return viewButton;
  }
}
