export class JournalHeader {
  constructor(journalHeaderStore) {
    this.journalHeaderStore = journalHeaderStore;
    this.element = document.createElement("header");
    this.element.classList.add("journal-header", "display-flex");
    this.renderJournalHeader();
  }

  getHeaderHTML() {
    const currentState = this.journalHeaderStore.getState();
    const currentFrame = this.journalHeaderStore.getFrame();

    const FONT_TITLE = "Title-MD";
    const FONT_BODY = "Body-MD";
    const SVG_DETAIL_OFF = "src/assets/icons/list-view.svg";
    const SVG_DETAIL_ON = "src/assets/icons/list-view-on.svg";
    const SVG_GRID_OFF = "src/assets/icons/grid-view.svg";
    const SVG_GRID_ON = "src/assets/icons/grid-view-on.svg";

    const fontAll = currentState === "STATE_ALL" ? FONT_TITLE : FONT_BODY;
    const fontSub = currentState === "STATE_SUB" ? FONT_TITLE : FONT_BODY;

    const svgDetail =
      currentFrame === "FRAME_GRID"
        ? SVG_DETAIL_OFF
        : currentFrame === "FRAME_DETAIL"
        ? SVG_DETAIL_ON
        : SVG_DETAIL_OFF;
    const svgGrid =
      currentFrame === "FRAME_DETAIL"
        ? SVG_GRID_OFF
        : currentFrame === "FRAME_GRID"
        ? SVG_GRID_ON
        : SVG_GRID_OFF;

    const journalHeaderHTML = `
      <div class="journal-area display-flex">
        <div class="journal-all ${fontAll}">전체 언론사</div>
        <div class="journal-subList ${fontSub}">내가 구독한 언론사</div>
      </div>
      <div class="journal-btns display-flex">
        <div class="journal-btn__detail">
          <img src="${svgDetail}" />
        </div>
        <div class="journal-btn__grid">
          <img src="${svgGrid}" />
        </div>
      </div>
    `;

    this.element.innerHTML = journalHeaderHTML;
  }

  addEventToHeader() {
    this.journalAllBtn = this.element.querySelector(".journal-all");
    this.journalSubBtn = this.element.querySelector(".journal-subList");
    this.journalDetailBtn = this.element.querySelector(".journal-btn__detail");
    this.journalGridBtn = this.element.querySelector(".journal-btn__grid");

    this.journalAllBtn.addEventListener("click", () => {
      this.journalHeaderStore.setState("STATE_ALL");
      this.renderJournalHeader();
    });

    this.journalSubBtn.addEventListener("click", () => {
      this.journalHeaderStore.setState("STATE_SUB");
      this.renderJournalHeader();
    });

    this.journalDetailBtn.addEventListener("click", () => {
      this.journalHeaderStore.setFrame("FRAME_DETAIL");
      this.renderJournalHeader();
    });

    this.journalGridBtn.addEventListener("click", () => {
      this.journalHeaderStore.setFrame("FRAME_GRID");
      this.renderJournalHeader();
    });
  }

  renderJournalHeader() {
    this.getHeaderHTML();
    this.addEventToHeader();
  }
}
