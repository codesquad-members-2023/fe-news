const result = [];
document.querySelector('.ico_btn').addEventListener('click', () => {
  const logoImgSrc = document.querySelector('.link_media img').src;
  const pressName = document.querySelector('.link_media img').alt;
  const category = document.querySelector('.option_on a').dataset.clk;
  const updateTime = document.querySelector('.time').textContent;
  const mainNewsImg = document.querySelector('.thumb img').src;
  const mainNews = document.querySelector('.title').textContent;
  const noticeMessage = document.querySelector('.notice_msg').textContent;
  const subNewsList = [...document.querySelectorAll('.news_item')].map(
    (subNews) => subNews.innerText
  );

  const obj = {
    logoImgSrc,
    pressName,
    category,
    updateTime,
    mainNewsImg,
    mainNews,
    noticeMessage,
    subNewsList,
  };

  result.push(obj);
  console.log(result);
});

// // logoImgAlt === pressName;
// // mainNewsImgAlt === mainNews;

const data = JSON.stringify();
