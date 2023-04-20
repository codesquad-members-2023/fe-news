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

  getDetailNavHTML() {
    const detailNavHTML = `<nav class="detail-type-bar">
    <div class="hover-color">
      <span>종합/경제</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>방송/통신</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>IT</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>영자지</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>스포츠/연예</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>메거진/전문지</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>지역</span>
      <span>1 / 81</span>
    </div>
  </nav>`;

    this.detailElement.innerHTML += detailNavHTML;
  }

  getdetailArticleHTML() {
    const detailArticleHTML = `<article class="detail-contents">
    <div class="detail-contents-column">
      <div class="imgSrc">서울경제</div>
      <div class="modifiedTime">2022</div>
      <div class="sub-button">구독하기</div>
    </div>
    <div class="detail-contents-column">
      <div claass="mainContent">
        <div class="mainImgSrc">
          <img style="height: 200px" src="./src/assets/icons/크롱.png" />
        </div>
        <div class="mainTitle Body-MD">또 국민연금의 목닝</div>
      </div>
      <div class="subContent">
        <span class="subNewsList Body-MD">
          "\n한전 33조 적자 폭탄에…코스피 상장사 작년 순익 17% '뚝'\n",
          "\n'60년대 톱가수' 현미 별세, 자택서 쓰러진 채 발견…향년 85세\n",
          "\n박명수 부부 '스벅 재테크'…100억 시세차익 대박\n", "\n'퓨리에버
          코인 뭐길래'…강남 납치·살인 '투자 실패'로 사주 의혹\n", "\n尹이
          착용한 아기띠…코니바이에린, 작년 매출 10% 늘었다\n", "\n감히 그
          분의 이름을 빼?…시진핑 표기 제외, 인민일보 대형 사고\n"
        </span>
        <span class="noticeMessage Body-SM">
          "\n서울경제 언론사에서 직접 편집한 뉴스입니다.\n"
        </span>
      </div>
    </div>
  </article>`;
    this.detailElement.innerHTML += detailArticleHTML;
  }

  renderDetail() {
    this.getDetailNavHTML();
    this.getdetailArticleHTML();
  }
}
