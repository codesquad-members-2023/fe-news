const getDateContent = (data) => {
  const year = data.getFullYear();
  const month = String(data.getMonth() + 1).padStart(2, '0');
  const day = String(data.getDate()).padStart(2, '0');
  const weekday = ['일', '월', '화', '수', '목', '금', '토'][data.getDay()];

  return `${year}.${month}.${day} ${weekday}요일`;
};

export default class Header {
  constructor($parent) {
    this.$parent = $parent;
    this.state = {
      today: new Date()
    };
  }

  mount() {
    this.$parent.insertAdjacentHTML('afterbegin', this.template());
  }

  template() {
    const { today } = this.state;

    return /* html */ `
      <header id="header">
        <a href="/" class="header__logo">
          <img src="../../src/images/logo.svg">
          <span>뉴스스탠드</span>
        </a>
        <div class="header__today">${getDateContent(today)}</div>
      </header>
    `;
  }
}
