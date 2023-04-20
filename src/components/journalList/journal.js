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
    const showDiv = document.createElement("div");
    showDiv.classList.add("journal-item_show");
    this.gridElement.appendChild(showDiv);
    showDiv.innerHTML = `<img src="${this.journalData.mediaInfo.imgSrc}" 
                         alt="${this.journalData.mediaInfo.name}">`;
    showDiv.style.display = "flex";

    const hoverDiv = document.createElement("div");
    hoverDiv.classList.add("journal-item_hover");

    const subscribeBtn = document.createElement("button");
    subscribeBtn.classList.add("subscribe-btn");
    subscribeBtn.textContent = "구독";

    const unSubscribeBtn = document.createElement("button");
    unSubscribeBtn.classList.add("unsubscribe-btn");
    unSubscribeBtn.textContent = "해지";

    hoverDiv.appendChild(subscribeBtn);
    hoverDiv.appendChild(unSubscribeBtn);

    hoverDiv.style.display = "none";

    this.gridElement.appendChild(hoverDiv);

    return { showDiv, hoverDiv, subscribeBtn, unSubscribeBtn };
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
