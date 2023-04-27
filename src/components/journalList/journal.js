export class Journal {
  constructor(journalData, journalHeaderStore, journalDetailStore) {
    this.journalData = journalData;
    this.journalHeaderStore = journalHeaderStore;
    this.journalDetailStore = journalDetailStore;
    this.gridElement = document.createElement("div");
    this.gridElement.classList.add("journal-item");
    this.detailElement = document.createElement("div");
    this.detailElement.classList.add("journal-detail");
    this.renderToGridArticle();
    this.renderToDetailArticle();
  }

  getGridArticleHTML() {
    const btnLabels = [
      ["구독", "subscribe-btn"],
      ["해지", "unsubscribe-btn"],
    ];
    const journalCellEL = document.createElement("div");
    journalCellEL.classList.add("journal-item_show");
    this.gridElement.appendChild(journalCellEL);
    journalCellEL.innerHTML = `<img src="${this.journalData.mediaInfo.imgSrc}" 
                         alt="${this.journalData.mediaInfo.name}">`;
    journalCellEL.style.display = "flex";

    const subJournalCellEL = document.createElement("div");
    subJournalCellEL.classList.add("journal-item_hover");

    const subOrNotBtns = [];
    btnLabels.forEach((btnLabel) => {
      const btn = document.createElement("button");
      btn.classList.add(btnLabel[1]);
      btn.textContent = btnLabel[0];
      subOrNotBtns.push(btn);
      subJournalCellEL.appendChild(btn);
    });

    subJournalCellEL.style.display = "none";

    this.gridElement.appendChild(subJournalCellEL);

    return {
      showDiv: journalCellEL,
      hoverDiv: subJournalCellEL,
      subscribeBtn: subOrNotBtns[0],
      unSubscribeBtn: subOrNotBtns[1],
    };
  }

  addHoverEventToGrid(showDiv, hoverDiv) {
    this.gridElement.addEventListener("mouseover", () => {
      showDiv.style.display = "none";
      hoverDiv.style.display = "flex";
    });

    this.gridElement.addEventListener("mouseout", () => {
      hoverDiv.style.display = "none";
      showDiv.style.display = "flex";
    });
  }

  addSubEventToGrid(subscribeBtn, unSubscribeBtn, showDiv, hoverDiv) {
    subscribeBtn.addEventListener("click", () => {
      this.journalHeaderStore.addSubscribe(this);
    });

    unSubscribeBtn.addEventListener("click", () => {
      this.journalHeaderStore.deleteSubscribe(this);
      hoverDiv.style.display = "none";
      showDiv.style.display = "flex";
    });
  }

  renderToGridArticle() {
    const { showDiv, hoverDiv, subscribeBtn, unSubscribeBtn } =
      this.getGridArticleHTML();
    this.addHoverEventToGrid(showDiv, hoverDiv);
    this.addSubEventToGrid(subscribeBtn, unSubscribeBtn, showDiv, hoverDiv);
  }

  getDetailArticleHTML() {
    const subNewsListHTML = this.journalData.subContent.subNewsList
      .map((item) => {
        return `<span>${item.trim()}</span>`;
      })
      .join("");

    const detailArticleHTML = `
      <article class="detail-contents">
        <div class="detail-contents-column">
          <div class="imgSrc"><img style="height: 20px" src="${this.journalData.mediaInfo.imgSrc}"/></div>
          <div class="modifiedTime">${this.journalData.mediaInfo.modifiedTime}</div>
          <div class="sub-button"><button>+ 구독하기</button></div>
        </div>
        <div class="detail-contents-column">
          <div class="mainContent">
            <div class="mainImgSrc">
              <img style="height: 200px" src="${this.journalData.mainContent.mainImgSrc}" />
            </div>
            <div class="mainTitle Body-MD">${this.journalData.mainContent.mainTitle}</div>
          </div>
          <div class="subContent">
            <span class="subNewsList Body-MD">
            ${subNewsListHTML}
            </span>
            <span class="noticeMessage Body-SM">
            ${this.journalData.subContent.noticeMessage}
            </span>
          </div>
        </div>
      </article>
    `;

    this.detailElement.innerHTML += detailArticleHTML;
  }

  addSubEventToDetail() {
    const subscribeBtnjj = this.detailElement.querySelector(".sub-button");
    subscribeBtnjj.addEventListener("click", () => {
      this.journalHeaderStore.addSubscribe(this);
    });
  }

  renderToDetailArticle() {
    this.getDetailArticleHTML();
    this.addSubEventToDetail();
  }
}
