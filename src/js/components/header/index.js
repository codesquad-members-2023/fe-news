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
    this.$ele = document.createElement('header');
    this.$ele.id = 'header';

    this.state = {};
    this.initState();
  }

  mount() {
    this.render();
    this.$parent.insertAdjacentElement('afterbegin', this.$ele);
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { today } = this.state;

    return /* html */ `
      <a href="/" class="header__logo">
        <img src="../../src/images/logo.svg">
        <span>뉴스스탠드</span>
      </a>
      <div class="header__today">${getDateContent(today)}</div>
    `;
  }

  initState() {
    this.state = { today: new Date() };
  }
}
