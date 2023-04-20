import { $ } from "../../utils/dom.js";
import { SUBSCRIBE, COMPANY } from "../../constants/dom.js";

export const updateNewsLogo = (allNewsSelector, myNewsSelector, registerData) => {
  const myMediaLogos = $(myNewsSelector);
  const allMediaLogos = $(allNewsSelector);
  const gridBox = $(".grid_all");
  const myGridBox = $(".grid_subscribe");
  showMyNewsSourcesLogo(myMediaLogos, allMediaLogos, gridBox, myGridBox, registerData);
  showAllNewsSourcesLogo(myMediaLogos, allMediaLogos, gridBox, myGridBox);
};

const showMyNewsSourcesLogo = (myMediaLogos, allMediaLogos, gridBox, myGridBox, registerData) => {
  myMediaLogos.addEventListener("click", () => {
    gridBox.classList.add("none");
    myGridBox.classList.remove("none");
    allMediaLogos.classList.add("change_gray");
    myMediaLogos.classList.add("change_black");
    insertMyNewsData(SUBSCRIBE.CANCEL, registerData.showPublishData());
  });
};

const showAllNewsSourcesLogo = (myMediaLogos, allMediaLogos, gridBox, myGridBox) => {
  allMediaLogos.addEventListener("click", () => {
    gridBox.classList.remove("none");
    myGridBox.classList.add("none");
    allMediaLogos.classList.remove("change_gray");
    myMediaLogos.classList.remove("change_black");
  });
};

export const insertMyNewsData = (subscribe, newsData) => {
  const gridBox = $(".grid_subscribe");
  gridBox.innerHTML = "";
  newsData.map((data) => {
    gridBox.innerHTML += `<div class="grid_list" id="${data.mediaId}">
    <img src=${data.mediaInfo.imgSrc} alt=${data.mediaInfo.name}/>
    <div class ="grid_btn">
    <button type="button">${subscribe}</button>
    </div>
    </div>
    `;
  });
  if (newsData.length !== COMPANY.PAGES_PER) {
    for (let i = 0; i < COMPANY.PAGES_PER - newsData.length; i++) {
      gridBox.innerHTML += `<div class="grid_list"></div>`;
    }
  }
};
