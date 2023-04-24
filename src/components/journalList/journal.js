export class Journal {
  constructor(journalData, journalHeaderStore, journalDetailStore) {
    this.journalHeaderStore = journalHeaderStore;
    this.journalDetailStore = journalDetailStore;
    this.journalData = journalData;
    this.gridElement = document.createElement("div");
    this.gridElement.classList.add("journal-item");
    this.detailElement = document.createElement("div");
    this.detailElement.classList.add("journal-detail");
    this.renderGrid();
    this.renderDetail();
  }

  getGridHTML() {
    const btnLabels = [
      ["구독", "subscribe-btn"],
      ["해지", "unsubscribe-btn"],
    ];
    const journalCell = document.createElement("div");
    journalCell.classList.add("journal-item_show");
    this.gridElement.appendChild(journalCell);
    journalCell.innerHTML = `<img src="${this.journalData.mediaInfo.imgSrc}" 
                         alt="${this.journalData.mediaInfo.name}">`;
    journalCell.style.display = "flex";

    const subCell = document.createElement("div");
    subCell.classList.add("journal-item_hover");

    const btns = [];
    btnLabels.forEach((btnLabel) => {
      const btn = document.createElement("button");
      btn.classList.add(btnLabel[1]);
      btn.textContent = btnLabel[0];
      btns.push(btn);
      subCell.appendChild(btn);
    });

    subCell.style.display = "none";

    this.gridElement.appendChild(subCell);

    return {
      showDiv: journalCell,
      hoverDiv: subCell,
      subscribeBtn: btns[0],
      unSubscribeBtn: btns[1],
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

  renderGrid() {
    const { showDiv, hoverDiv, subscribeBtn, unSubscribeBtn } =
      this.getGridHTML();
    this.addHoverEventToGrid(showDiv, hoverDiv);
    this.addSubEventToGrid(subscribeBtn, unSubscribeBtn, showDiv, hoverDiv);
  }

  getdetailArticleHTML() {
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
          <div class="sub-button"><img src="src/assets/icons/SubscribeButton.svg" /></div>
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

  renderDetail() {
    this.getdetailArticleHTML();
  }
}
