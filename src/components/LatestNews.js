import Component from "../core/Component.js";

export default class LatestNews extends Component {
  template() {
    return `
    <div class="latest-news__bar">${this.state.test[0]}</div>
    <div class="latest-news__bar">${this.state.test[1]}</div>
          `;
  }

  setup() {
    this.state = {
      test: [
        '尹, 양곡법에 첫 거부권 "전형적 포퓰리즘 법안"…野 반발',
        '"집토끼냐 산토끼냐"…총선 앞둔 與, 보·혁 노선 경쟁 점화',
        "아직도 너무 비싼 '서울 아파트'…전문가들 \"대세 상승 기대 어려워\"",
        "이름값 못하는 신세계건설, '홀로서기' 실패?",
        "'어닝쇼크' 예고된 삼전·하이닉스…\"2분기 바닥 다지고 상승\"",
        "캡슐커피 재도전 바쁜데…이물질 사태로 발목잡힌 동서식품",
      ],
    };
  }
}
