export class HeadLine {
  constructor(data) {
    this.headLineList = data;
  }

  toBeElement = function (imgName) {
    const div = `<div class="banner__column">
                      <img class="banner__img" src="photo/${imgName}.jpg" />
                   </div>`;
    track.element.innerHTML += div;
  };

  setBanners = function () {
    this.imgList.forEach((imgName) => {
      this.toBeElement(imgName);
    });
  };
}
