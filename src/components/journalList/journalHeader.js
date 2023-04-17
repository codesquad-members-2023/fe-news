export class JournalHeader {
  constructor(store) {
    this.journalHeaderStore = store;
    this.element = document.createElement("header");
    this.element.classList.add("journal-header", "display-flex");
    this.render();
    this.journalAllBtn;
    this.journalSubBtn;
  }

  headerMarkup(headerState) {
    const FONT_TITLE = "Title-MD";
    const FONT_BODY = "Body-MD";
    const SVG_DETAIL = "src/assets/icons/list-view.svg";
    const SVG_GRID = "src/assets/icons/grid-view-on.svg";

    const fontAll = headerState === "STATE_ALL" ? FONT_TITLE : FONT_BODY;
    const fontSub = headerState === "STATE_SUB" ? FONT_TITLE : FONT_BODY;

    const journalHeader = `
      <div class="journal-area display-flex">
        <div class="journal-all ${fontAll}">전체 언론사</div>
        <div class="journal-subList ${fontSub}">내가 구독한 언론사</div>
      </div>
      <div class="journal-btns display-flex">
        <div class="journal-btn__detail">
          <img src="${SVG_DETAIL}" />
        </div>
        <div class="journal-btn__grid">
          <img src="${SVG_GRID}" />
        </div>
      </div>
    `;

    this.element.innerHTML = journalHeader;
  }

  addEvent() {
    this.journalAllBtn.addEventListener("click", () => {
      this.journalHeaderStore.setState("STATE_ALL");
      this.render();
    });

    this.journalSubBtn.addEventListener("click", () => {
      this.journalHeaderStore.setState("STATE_SUB");
      this.render();
    });
  }

  render() {
    this.headerMarkup(this.journalHeaderStore.getState());
    this.journalAllBtn = this.element.querySelector(".journal-all");
    this.journalSubBtn = this.element.querySelector(".journal-subList");
    this.addEvent();
  }
}
