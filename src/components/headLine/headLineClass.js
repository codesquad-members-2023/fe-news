export class HeadLine {
  constructor(jsonData) {
    this.headLineList = jsonData;
  }

  toBeElement = function (title) {
    const div = `<div class="headLine-column headLine-left">
                    <span class="Title-SM">연합뉴스</span>
                    <span class="Body-SM">
                    ${title}
                    </span>
                 </div>`;
    return div;
  };

  makeHeadline = function () {
    // this.headLineList.forEach((title) => {
    //   this.toBeElement(title.headLineList);
    // });
    const randomNub = Math.floor(Math.random() * this.headLineList.length);
    const title = this.headLineList[randomNub].headLineTitle;
    return this.toBeElement(title);
  };
}
