const mainHeaderView = () => {
  return `
  <div class="sort_button">
    <div class=all-press"><span>전체 언론사</span></div>
    <div class="subscribe-press"><span>내가 구독한 언론사</span></div>
  </div> 
  <div class="view_switch-button">
    <div class="list_button"><img src="../src/assets/images/list.svg"/></div>
    <div class="grid_button"><img src="../src/assets/images/grid.svg"/></div>
  </div>
  `;
};

export { mainHeaderView };
