import { $ } from "../../../utils/dom.js";
import { SUBSCRIBE, COMPANY } from "../../../constants/dom.js";

export const insertMyNewsData = (subscribe, newsData) => {
  const { PAGES_PER } = COMPANY;
  const gridBox = $(".grid_subscribe");
  gridBox.innerHTML = "";
  gridBox.innerHTML = newsData.reduce((acc, data) => {
    return (acc += `<div class="grid_list" id="${data.mediaId}">
    <img src=${data.mediaInfo.imgSrc} alt=${data.mediaInfo.name}/>
    <div class ="grid_btn">
    <button type="button">${subscribe}</button>
    </div>
    </div>
    `);
  }, "");
  if (newsData.length !== PAGES_PER) {
    for (let i = 0; i < PAGES_PER - newsData.length; i++) {
      gridBox.innerHTML += `<div class="grid_list"></div>`;
    }
  }
};

const showMyNewsSourcesLogo = (myMediaLogos, allMediaLogos, gridBox, myGridBox, registerData) => {
  const { CANCEL } = SUBSCRIBE;
  myMediaLogos.addEventListener("click", () => {
    gridBox.classList.add("none");
    myGridBox.classList.remove("none");
    allMediaLogos.classList.add("change_gray");
    myMediaLogos.classList.add("change_black");
    insertMyNewsData(CANCEL, registerData.showPublishData());
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

export const updateNewsLogo = ({ allNewsSelector, myNewsSelector, registerData }) => {
  const myMediaLogos = $(myNewsSelector);
  const allMediaLogos = $(allNewsSelector);
  const gridBox = $(".grid_all");
  const myGridBox = $(".grid_subscribe");
  showMyNewsSourcesLogo(myMediaLogos, allMediaLogos, gridBox, myGridBox, registerData);
  showAllNewsSourcesLogo(myMediaLogos, allMediaLogos, gridBox, myGridBox);
};
