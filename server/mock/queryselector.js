const customFetch = async ({ url, method, body }) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    console.log('Request successful!');
  } catch (error) {
    throw Error(error.message);
  }
};

const postSection = async () => {
  const newsarea = document.querySelector('.news_area');
  const pid = newsarea.attributes['data-pid'].value;
  const category = document.querySelector(
    '#NM_NEWSSTAND_DEFAULT_LIST > div.list_view > div.option_area > div > ul > li.option_item.option_on > a'
  ).innerText;
  const mediabox = newsarea.querySelector('.media_box');
  const newsbox = newsarea.querySelector('.news_box');
  const lastEdited = new Date(
    mediabox.querySelector('.time').innerText.split(' 편집')[0]
  );
  const subnewses = newsbox.querySelector('.sub_news').querySelectorAll('li');

  const articles = [];
  const mainnews = {
    id: newsbox.querySelector('.main_news a').attributes['data-aid'].value,
    link: newsbox.querySelector('.main_news a').href,
    img: newsbox.querySelector('.main_news a img').src,
    title: newsbox.querySelector('.main_news .title').innerText,
  };

  articles.push(mainnews);

  subnewses.forEach((v) => {
    const a = v.querySelector('a');
    articles.push({
      id: a.attributes['data-aid'].value,
      link: a.href,
      title: a.innerText,
    });
  });

  const section = {
    category,
    pressId: pid,
    lastEdited: lastEdited,
    articles,
  };
  console.log(section);
  const url = `http://localhost:3001/section`;
  try {
    await customFetch({ url, method: 'POST', body: section });
    console.log('Section posted successfully!');
  } catch (error) {
    console.error(error);
  }
};

const targetbutton = document.querySelector(
  '#NM_NEWSSTAND_DEFAULT_LIST > a.pm_btn_next_l._NM_NEWSSTAND_LIST_next_btn'
);

postSection(); // 1회 실행
targetbutton.addEventListener('click', postSection); // 이후 Click 이후 실행
