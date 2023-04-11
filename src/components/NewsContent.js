import Component from "../core/Component.js";

export default class NewsContent extends Component {
  template() {
    return `

        <div class="press-info">
            <img src= "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/823.png"/>
            <span>2023.04.04. 15:29\n편집</span>
            <button>구독하기</button>
        </div>
        <div class="newses">
            <div class="main-news">
                <img class="thumbnail" src="https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9241/153410_001.jpg" />
                <span>봉숭아학당 與…선배 지적질에 영 안서는 당대표, 잇단 물의 지자체장</span>
            </div>
            <div>
                <ul class="sub-news">
                    <li>尹, 양곡법에 첫 거부권 \"전형적 포퓰리즘 법안\"…野 반발</li>
                    <li>\"집토끼냐 산토끼냐\"…총선 앞둔 與, 보·혁 노선 경쟁 점화</li>
                    <li>아직도 너무 비싼 '서울 아파트'…전문가들 \"대세 상승 기대 어려워\"</li>
                    <li>이름값 못하는 신세계건설, '홀로서기' 실패?</li>
                    <li>'어닝쇼크' 예고된 삼전·하이닉스…\"2분기 바닥 다지고 상승\"</li>
                </ul>
                <span class="caption">UPI뉴스 언론사에서 직접 편집한 뉴스입니다.</span>
            </div>
        </div>
    
    `;
  }

  renderChildComponents() {}
}
