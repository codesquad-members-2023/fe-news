class ViewSelectBtn {
  constructor() {}

  createButtons() {
    const innerHTML = `
    <div class="btn__view-type">
      <div>
        <button class="title-md all-presses">전체 언론사</button>
        <button class="body-md my-presses">내가 구독한 언론사</button>
      </div>
      <div>
        <img src="./asset/listView.svg" alt="listView" />
        <img src="./asset/gridView.svg" alt="gridView" />
      </div>
    </div>
    `
  }
}
