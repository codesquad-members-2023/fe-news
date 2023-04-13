export class HeadLine {
  constructor(jsonData) {
    this.headLineList = jsonData;
  }

  toBeElement(title) {
    const div = `<div class="headLine-column">
                    <span class="Title-SM">연합뉴스</span>
                    <span class="Body-SM">
                    ${title}
                    </span>
                 </div>`;
    return div;
  }

  makeHeadline = function () {
    const randomNub = Math.floor(Math.random() * this.headLineList.length);
    const title = this.headLineList[randomNub].headLineTitle;
    return this.toBeElement(title);
  };
}
