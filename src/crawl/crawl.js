const btn = document.querySelector(".pm_btn_prev_l._NM_UI_PAGE_PREV");

const result = [];

btn.addEventListener("click", () => {
  const imgList = document.querySelectorAll(".news_logo");

  for (let img of imgList) {
    const name = img.alt;
    const imgPath = img.currentSrc;

    const obj = {
      name,
      imgPath,
    };
    result.push(obj);
  }
});
