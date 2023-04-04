const nextButton = document.querySelectorAll('.group_news i');
let result = [];
nextButton.forEach((item) => {
  item.addEventListener('click', () => {
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
        subNewsList: subNewsList,
        noticeMessage: noticeMessage,
      },
    };
    result.push(obj);
    console.log(result);
  });
});
