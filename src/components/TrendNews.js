import { Component } from "../core/Component.js";

// 초기 세팅만 진행

export class TrendNews extends Component {
  setUp() {
    this._state = {
      news: [
        {
          pressname: ["연합뉴스"],
          title: [`尹 "전형적 포퓰리즘" 양곡법에 첫 거부권…민주 "재의결 추진"`],
        },
      ],
    };
  }

  templete() {
    const { news } = this._state;
    return `
      <div class="trend-section left">
        <div class="trend-pressname">${news[0].pressname}</div>
        <div class="trend-title">${news[0].title}</div>
      </div>
      <div class="trend-section right">
        <div class="trend-pressname">${news[0].pressname}</div>
        <div class="trend-title">${news[0].title}</div>
      </div>
    `;
  }

  setEvent() {
    this.target.addEventListener("mouseover", () => {
      this.setState({
        news: [
          {
            pressname: ["조선일보"],
            title: ["검찰, 하나은행 직원 소환…대장동서 박영수 역할 추궁"],
          },
        ],
      });
    });
  }
}
