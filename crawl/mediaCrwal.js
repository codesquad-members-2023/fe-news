// 해당 코드는 크롤링을 위한 코드입니다.

const nextButton = document.querySelector('._NM_NEWSSTAND_LIST_next_btn');
let result = [];
let id = 1;

nextButton.addEventListener('click', () => {
  const alt = document.querySelector('.link_media img').alt;
  const src = document.querySelector('.link_media img').src;
  const time = document.querySelector('.media_box span').innerText;
  const mainNews = document.querySelector('.main_news');
  const mainNewsImg = mainNews.querySelector('img');
  const mainTitle = mainNews.querySelector('.title');
  let subNewsList = document.querySelectorAll('.sub_news li');
  const mediaType = document.querySelector('.option_on a').textContent;
  const noticeMessage = document.querySelector('.notice_msg').textContent;
  subNewsList = Array.from(subNewsList).map((item) => item.textContent);
  const obj = {
    mediaId: id,
    mediaInfo: {
      type: mediaType,
      name: alt,
      imgSrc: src,
      modifiedTime: time,
    },
    mainContent: {
      mainImgSrc: mainNewsImg.src,
      mainTitle: mainTitle.textContent,
    },
    subContent: {
      subNewsList: subNewsList.splice(0, 6),
      noticeMessage: noticeMessage,
    },
  };
  result.push(obj);
  console.log(result);
  id++;
});
