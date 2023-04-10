import createEl from "../../../utils/util.js";

const sortButton = (allPress, subscribedPress) => {
  const main = createEl("main");
  const buttons = createEl("div", "sort-buttons");
  buttons.innerHTML =`
    <div class="press-buttons">
      <a class="all-press">${allPress}</a>
      <a class="subscribed-press">${subscribedPress}</a>
    </div>
    <div class="view-buttons">
      <a class="view-list"></a>
      <a class="view-grid"></a>
    </div>`;

  // button.addEventListener("click", );
  main.append(buttons);
  return main;
}

export default sortButton;