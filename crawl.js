const name = document.querySelector(".link_media img").alt;
const logo_src = document.querySelector(".link_media img").src;
const main_news_image = document.querySelector(".main_news a img").src;
const main_news_title = document.querySelector(".title").textContent;
const edit_time = document.querySelector(".time").textContent;
const sub_news_titles = [...document.querySelectorAll(".news_item a")]
  .map((el) => el.textContent)
  .slice(0, 6);
const category_id = document.querySelector(".option_on a").dataset.clk;


const result = [];
document.querySelector(".ico_btn").addEventListener("click", () => {
  const name = document.querySelector(".link_media img").alt;
  const logo_src = document.querySelector(".link_media img").src;
  const main_news_image = document.querySelector(".main_news a img").src;
  const main_news_title = document.querySelector(".title").textContent;
  const edit_time = document.querySelector(".time").textContent;
  const sub_news_titles = [...document.querySelectorAll(".news_item a")]
    .map((el) => el.textContent)
    .slice(0, 6);
  const category_id = document.querySelector(".option_on a").dataset.clk;

  const obj = {
    name,
    logo_src,
    category_id,
    edit_time,
    main_news_image,
    main_news_title,
    sub_news_titles,
  };

  result.push(obj);
  
});



// const test = {
//   presses: [
//     {
//       name: "UPI뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/823.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:29\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9241/153410_001.jpg",
//       main_news_title:
//         "봉숭아학당 與…선배 지적질에 영 안서는 당대표, 잇단 물의 지자체장",
//       sub_news_titles: [
//         '尹, 양곡법에 첫 거부권 "전형적 포퓰리즘 법안"…野 반발',
//         '"집토끼냐 산토끼냐"…총선 앞둔 與, 보·혁 노선 경쟁 점화',
//         "아직도 너무 비싼 '서울 아파트'…전문가들 \"대세 상승 기대 어려워\"",
//         "이름값 못하는 신세계건설, '홀로서기' 실패?",
//         "'어닝쇼크' 예고된 삼전·하이닉스…\"2분기 바닥 다지고 상승\"",
//         "캡슐커피 재도전 바쁜데…이물질 사태로 발목잡힌 동서식품",
//       ],
//     },
//     {
//       name: "부산일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0322/nsd21527882.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 15:57\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9042/160224_001.jpg",
//       main_news_title:
//         "'보라, 부산의 이 뜨거운 환영 열기를… 부산역·해운대·남구 등 동선 곳곳 거리 행사",
//       sub_news_titles: [
//         "“건강 심각하게 악화” 정경심, 형집행정지 다시 신청",
//         "원로가수 현미 별세…향년 85세",
//         "전매제한 완화 7일 시행…부산 공공택지 1년, 나머지 6개월로",
//         "[속보]윤 대통령, 양곡법 거부권 행사…재의요구안 의결",
//         "‘하영제 영장기각’ 후폭풍 이재명에게…비명계 “영장실질심사 받았어야”",
//         "장항준 감독 “‘삶의 터전’인 부산에 주목…위로·위안 주는 영화 만들고 싶었어요”",
//       ],
//     },
//     {
//       name: "경북도민일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/978.png",
//       category_id: "dloc",
//       edit_time: "2023.04.03. 22:46\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9201/225009_001.jpg",
//       main_news_title: "“포스코, 존경받는 100년 기업으로 성장”",
//       sub_news_titles: [
//         "벼랑끝 내몰린 자영업자 작년 말 대출 1000조↑",
//         "‘양곡관리법’ 뇌관…대야관계 視界제로",
//         "“주민협의 없는 수성사격장 사격 재개 반대”",
//         "철강·조선업계, 공동연구·동반발전 ‘한마음 한뜻’",
//         "문경문화원 정기총회 무산 ‘우려가 현실로’",
//         "구미시, 국회 찾아 내년 국비예산 확보 ‘SOS’",
//       ],
//     },
//     {
//       name: "충청일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/391.png",
//       category_id: "dloc",
//       edit_time: "2023.04.03. 18:22\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9101/182940_001.jpg",
//       main_news_title: "충북 새 브랜드 슬로건 공모 대상 '중심에 서다'",
//       sub_news_titles: [
//         "[이슈진단] 전기차 시대 성큼 下",
//         '충주 탄금호 유람선 업체 "기만행정에 파산지경"',
//         "충북도의원 출석정지 땐 의정비·해외연수 제한",
//         '김영환 충북도지사 "산불 현장 안 가는 것 옳았다"',
//         "충남 지방의원 중 외부수입 겸직의원 4명중 1명꼴",
//         "상병헌 세종시의장, 3일 '출자·출연기관의 운영 조례' 공포",
//       ],
//     },
//     {
//       name: "MS투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202940832.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9363/161417_001.jpg",
//       main_news_title:
//         "“‘협동조합형 주택’ 투자 주의”⋯춘천시, 용도변경 시정명령",
//       sub_news_titles: [
//         '김진태 지사, 공약 1호 ‘반도체 공장 유치’ 빨간불⋯"지켜봐 달라"',
//         "춘천 물들인 연분홍 꽃비 '일상의 행복 충전'",
//         "꽉 막힌 춘천순환로⋯가스 공사 6월까지 진행 중",
//         "춘천 아파트값 37주 연속 하락⋯집 안 팔려 이사도 못 간다",
//         "마스크 자국은 아직 사라지지 않았다",
//         "똥도 약이 된다?!",
//       ],
//     },
//     {
//       name: "경인일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/338.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 14:06\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9068/141159_001.jpg",
//       main_news_title: "어떡허니… 한창 꽃필 시기, 사라진 꿀벌들",
//       sub_news_titles: [
//         "북도 추진하며, 공공기관 북부로?… 道 '정책 충돌'",
//         "[이슈추적] 천륜 따돌린 부모, 구명 기회도 따돌렸다",
//         "용인 반도체 클러스터… 경기주택도시공사, 시행자 참여할까",
//         "정부·지자체 '책임 떠넘기기'에 '생활형숙박' 이행강제금 폭탄",
//         "문학경기장, 불법노점상 'OUT' 시민 만족 'IN'",
//         "귀로 듣고, 귀로 본다 다크호스 떠오른 '수원 아름학교 골볼팀'",
//       ],
//     },
//     {
//       name: "경상일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/935.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 00:19\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9147/002217_001.jpg",
//       main_news_title: "울산 원전사고대피路 규모 키워 추진",
//       sub_news_titles: [
//         "소아과 대란…울산서도 ‘오픈런’ 현상",
//         "보행환경 개선사업에도 “오히려 불편”",
//         "신차효과 힘입은 현대차 세계시장 질주",
//         "반려동물과 함께 관광하기 좋은 울산 만든다",
//         "울산 중위소득 구매 가능 아파트 ‘10채 중 6채’",
//         "교통사고 보험사기 증가세…작년 울산서도 64건 적발",
//       ],
//     },
//     {
//       name: "전북일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/336.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 11:48\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9066/115357_001.jpg",
//       main_news_title: "유권자 사라진 ‘전주을 재선거’⋯“역대급 민의 왜곡 우려”",
//       sub_news_titles: [
//         "'천원의 아침밥'⋯전북대 학생식당 '든든한 한 끼' 불티",
//         "[전북 가담항설](1) 모악산에 김일성 시조 묘가 존재한다?",
//         "봄바람 살랑, 전북지역 전통시장 체감경기도 '웃음꽃'",
//         "한민족 비즈니스 축제 '세계한상대회' 전북 유치 시동",
//         "새만금 잼버리·아태마스터스 국회 차원 막판 지원 시급",
//         "은행 점포 폐쇄 가속화⋯금융 취약계층 대책 마련 필요",
//       ],
//     },
//     {
//       name: "광주드림",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/301.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9065/161845_001.jpg",
//       main_news_title: "전남도, 함평 산불 3단계…4일 주불 진화 목표",
//       sub_news_titles: [
//         "JB금융 주총, 1주당 현금 배당 715원 결정",
//         '전남도의회 "강기정 시장, 함평 편입 발언 사과하라"',
//         "함평 산불 밤사이 더 커져...‘3단계’ 격상",
//         "하남산단 ‘반값조식’ 사랑받을 수 있을까?",
//         "김영관 회장, 담양군에 고향사랑기부금 ",
//         "흑산 ‘홍어’와 정약전",
//       ],
//     },
//     {
//       name: "무등일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/976.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9202/161417_001.jpg",
//       main_news_title: '[르포] "이런 큰불은 난생처음"…함평 주민들 밤새 발동동',
//       sub_news_titles: [
//         '광주 보육대체교사들 "광주시, 지노위 결정 즉각 이행하라"',
//         "'기계적 심의'로 광주 병풍 아파트 양산···'통합심의'로 창의·독창성 확보",
//         "함평·순천 산불 '대응3단계' 발령···이틀째 진화 사투",
//         "전남도, 함평 산불 3단계···4일 주불 진화 목표",
//         "만사 제치고 가도 '2천원대 시급'···예비군 '쥐꼬리 훈련비' 여전",
//         "대기오염물질 기준치 초과 여수산단 업체, 무더기 행정처분",
//       ],
//     },
//     {
//       name: "미디어제주",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/817.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9233/161417_001.jpg",
//       main_news_title: "제주 제2공항 항공기 안전, 논리적 오류로 대충 넘어갔나?",
//       sub_news_titles: [
//         "제주 감싼 4.3추모 물결,  국민의힘은 제주도당도 목소리 없어?",
//         "“4.3 이름 찾기, 민족적 사명과 핵심 가치에 기초해야”",
//         '제주4.3 향한 마음 보인 문재인 전 대통령 "완전한 치유 함께"',
//         "한덕수 총리 ‘맨손 분향’까지 … 또 고개 드는 ‘제주 홀대론’",
//         "제주지역 소비자물가 상승률, “16개월 만에 3%대로 꺾여”",
//         "서귀포시청 양성통합 당직제 시행에 임하면서",
//       ],
//     },
//     {
//       name: "중부매일신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/983.png",
//       category_id: "dloc",
//       edit_time: "2023.04.03. 19:59\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9207/200400_001.jpg",
//       main_news_title: "美 IRA 최대 수혜 전망…충북 2차전지 소재주 '급등'",
//       sub_news_titles: [
//         "갈등 부른 '세종시 출자·출연기관 조례' 결국 법적공방",
//         "임정수 청주시의원 징계 처리 어떻게 되나",
//         "청주복지재단 대담회 - 지자체 차원 유보통합 대응 방안",
//         "분양권 전매제한 완화… 충청권 4월 아파트 물량 봇물",
//         "김영환 지사, 산불현장 미방문 해명도 논란",
//         "김영환 지사 제천 산불 대응 자세 논란",
//       ],
//     },
//     {
//       name: "충청투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/331.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 13:35\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9063/134254_001.jpg",
//       main_news_title: "국가산단 호재 업고 기업유치 결실 맺을까",
//       sub_news_titles: [
//         "대전형 청년주택 ‘청신호’ 국비 40억 확보… 추가 공급 예고",
//         "컨벤션시설 없는 내포 인근 지역 호텔만 ‘이득’ 본다",
//         "대체급식 학교 가보니 밥 대신 빵… 영양 불균형 우려",
//         "초대받지 않은 손님 火魔… 건조한 충청권 덮쳤다",
//         "대전·홍성 산불 사흘째 주불 잡기에 ‘안간힘’",
//         "논란의 우주항공청… 입지 뺀 법안으로 국무회의 의결",
//       ],
//     },
//     {
//       name: "경기신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202616515.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9362/161417_001.jpg",
//       main_news_title: "용인특례시 병, 민주당 '내전' vs. 국힘 '진격'",
//       sub_news_titles: [
//         '中企 "근로시간 유연화, 반드시 필요"',
//         "메리츠화재, 중고차 성능보험 보상처리 두고 공방",
//         "수원 '반 천년' 버팀목이 되어주고 있는 '영통 느티나무' 이야기",
//         "[기획기사]상생·협력은 없고 갈등·반목만 깊어져",
//         "해설사와 함께하는 행궁동·수원화성 투어",
//         "[기획] 인천형 행정체제개편 핵심은 협치와 주민의견 수렴",
//       ],
//     },
//     {
//       name: "경북일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/337.png",
//       category_id: "dloc",
//       edit_time: "2023.04.03. 22:38\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9067/224339_001.jpg",
//       main_news_title: "왜 그럴까…급식 인원 감소〈  잔반은 눈덩이",
//       sub_news_titles: [
//         "DGB대구은행, 1조6천억 푼다…금감원장 상생금융 주문 화답",
//         '반대위 "양돈단지 하나도 힘든데…대규모 추가 조성 안돼"',
//         '"산불 긴장감 최고조…만반의 대비해야"',
//         "[영상] 영주시 평은면 산불…‘산불 2단계’ 발령",
//         '"지친 심신 힐링"…즐길거리 가득한 경북농촌으로 놀러오세요',
//         '"국회 신뢰 위기 상황…전원위로 선거제 개혁 반드시 성공해야"',
//       ],
//     },
//     {
//       name: "중부일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0704/nsd231551300.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:16\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9117/162209_001.jpeg",
//       main_news_title: "공문서·단체장 직인에도 '특례시' 사용 불가",
//       sub_news_titles: [
//         "성난 예식업계·소상공인, 수원시 상대로 소송 추진",
//         "벚꽃 만개 대학캠퍼스… 상춘객 떠난 자리 '쓰레기 엔딩'",
//         "[미리보는 총선-인천 서구갑] 선거구 개편 변수 속 '눈치게임'",
//         "수원 순찰하던 순찰차에 포르쉐 '꽝'",
//         "인력난 경기도 '직원 돌려막기' 고민",
//         "인천시, 인천고법 유치추진위 활동 본격화",
//       ],
//     },
//     {
//       name: "대구일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/936.png",
//       category_id: "dloc",
//       edit_time: "2023.04.03. 20:19\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9148/153132_001.jpg",
//       main_news_title:
//         "‘금감원장 대구행’에 대구은행 18시까지 영업· 회장 승계프로그램 도입 '화답'",
//       sub_news_titles: [
//         "50년 전 규제로…멀쩡한 택시 하루 2대씩 버려진다",
//         "김기현-홍준표 설전, “지자체 행정에 전념” “어의없는 당대표”",
//         "푸른 사자 군단 “독수리 비상을 막아라”…삼성, 한화와 주중 3연전 빅뱅",
//         "대구경찰, 18만 회원 보유 성매매 사이트 운영 일망타진…회원들 나 떨고 있니",
//         "“심상적 내면, 캔버스에 회화적으로 토해내”…박경아 개인전, 7일까지 갤러리분도",
//         "대구시 신공항 건설, 군위 편입 행정수요 강화…조직개편 단행",
//       ],
//     },
//     {
//       name: "전북도민일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/937.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 09:48\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9149/095437_001.jpg",
//       main_news_title:
//         "전북서도 ‘천원의 아침밥’ 확산…착한 가격에 대학생들 호응도 커",
//       sub_news_titles: [
//         "혁신도시에 대학 캠퍼스 들어서나…국토부 혁신융합캠퍼스 전북 유력",
//         "“1년도 안돼 폐쇄라니요…” 전주보훈요양원 주간보호센터 중단 ‘시끌’",
//         "전북서도 ‘천원의 아침밥’ 확산…착한 가격에 대학생들 호응도 커",
//         "혁신도시에 대학 캠퍼스 들어서나…국토부 혁신융합캠퍼스 전북 유력",
//         "“1년도 안돼 폐쇄라니요…” 전주보훈요양원 주간보호센터 중단 ‘시끌’",
//         "‘상춘객 증가·신학기 효과’ 전북 소상공인·전통시장 훈풍",
//       ],
//     },
//     {
//       name: "강원일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/087.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 14:17\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9074/142216_001.jpg",
//       main_news_title: "尹 대통령 양곡관리법 '거부'…취임 후 '1호 거부권' 행사",
//       sub_news_titles: [
//         "[속보]전신주 붕괴로 강릉시 장현동 일대 정전",
//         "[속보]'밤안개' 가수 현미 별세…자택서 쓰러진 채 발견",
//         "한 집 건너 한 집 폐업…경기침체에 일상회복도 ‘무용지물’",
//         "3월 강원도 물가상승률 4.5% 상승 … 음식·숙박 7.5%↑",
//         "철원서 말다툼 끝에 이웃 살해한 만취 40대 체포",
//         "18일 강원특별법 개정안 심의… ‘제3의 안’ 나올까",
//       ],
//     },
//     {
//       name: "인천투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1107/nsd1054226.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9365/161417_001.jpg",
//       main_news_title: "말로만 자율 '주말 반납' 계양구 공무원체육대회 ‘빈축’",
//       sub_news_titles: [
//         "“인천대로 개량공사 올해 착공... 원도심 발전 전환점”",
//         "인천 에어프레미아, B787 4호기 도입 인천~유럽 등 운항",
//         "인천시, 청라~강서 7700번 간선급행버스 운행횟수 증편",
//         "옹진군, 주민수용성 확보해 '장봉갯벌 유네스코 등재' 추진",
//         "‘막말’ 피해 인천 서구의원, “경찰 수사 의뢰하겠다”",
//         "인천 수돗물 ‘인천하늘수’, 대한민국 대표 수돗물 선정 ‘쾌거’",
//       ],
//     },
//     {
//       name: "제주도민일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/389.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9099/161845_001.jpg",
//       main_news_title: "‘비산먼지 못살겠다’...화북공업단지 이전 논의 본격화",
//       sub_news_titles: [
//         "제75주년 4·3추념식, 역대급 정부 관심 밖...‘2분 추모사 끝’",
//         "“여당 극우적 행태가 4·3 정신 모독”",
//         "서귀포시, 해양쓰레기 ‘골머리’...작년 1년 전보다 2배↑ 급증",
//         "제주도, 4~6일 강풍·호우에 주의 당부",
//         "김한규 의원, 방사능 피해 보상 ‘농어업재해대책법’ 발의",
//         "노무현 묘역에서 제주4·3 추념식 열려",
//       ],
//     },
//     {
//       name: "제민일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/1119/nsd213345745.png",
//       category_id: "dloc",
//       edit_time: "2023.04.03. 19:51\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9104/195843_001.jpg",
//       main_news_title: '"희생자 명예회복·치유 책임 다하겠다"',
//       sub_news_titles: [
//         '"이씨 아닌 박씨로…팔십 평생 잃어버린 이름 되찾고파"',
//         "[진단] 홍수예방에 치중 하천원형 훼손 심각",
//         "산적한 4·3 현안 정부 해결의지 의문",
//         '제주 특수교육 대상자 매년↑…"사회 진입 문 좁아"',
//         "제주4·3 추념일 극우단체 집회…유족 가슴에 '대못질'",
//         "제75주년 제주4·3희생자추념식 '이모저모'",
//       ],
//     },
//     {
//       name: "영남일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/385.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9095/161417_001.jpg",
//       main_news_title:
//         '尹 대통령 양곡관리법에 거부권 행사…"전형적 포퓰리즘 법안, 매우 유감"',
//       sub_news_titles: [
//         "윤재옥 의원, 국민의힘 원내대표 경선 출마 선언",
//         "경북 영주 평은면 산불, 18시간40여분 만에 잡았다",
//         "회원제 체육관 휴업 통보…수강료 '먹튀주의보'",
//         "홍준표 시장, 연일 국민의힘에 쓴소리하는 배경은",
//         '금감원장 "시장 불안서 공매도 재개, 검토 어렵다"',
//         "대구 구·군, 코로나로 막혔던 해외도시 교류 본격화",
//       ],
//     },
//     {
//       name: "광주일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2023/0309/nsd195548501.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9064/161845_001.jpg",
//       main_news_title: "“인력난에 비싼 인건비…농사 못 짓겠다” 호소",
//       sub_news_titles: [
//         "광주시-국힘 광주시당, 내년 국비 예산 확보 힘 모은다",
//         "KIA 김도영의 시계 멈췄다",
//         "광주 군공항 이전법 국회 통과 ‘눈 앞’",
//         "속 터지는 공공시설 와이파이…5월부턴 잘 터진다",
//         "[성범죄 판결 2제] 빌라 창문 너머로 몰카…성적 욕망으로 여자화장실 침입",
//         "한 눈에 보는 4월 3일 광주일보 카드뉴스",
//       ],
//     },
//     {
//       name: "기호일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/909.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 10:33\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9127/104029_001.jpg",
//       main_news_title: "인천 철도인프라 확대 타당성 분석 돌입",
//       sub_news_titles: [
//         "수도권 제2순환고속도 노선 변경 ‘합심’",
//         "인도 점령 불법 노점상은 놔두고 왜 상가만잡나",
//         "음식점 개업 부푼 꿈 한순간에 잿더미",
//         "인천공항 모처럼 흑자 전망",
//         "양주 옥정~포천 광역철도 3공구 건설 이달 공고",
//         "입소 한 달 만에 요추골절상 수원 요양원 노인 학대 말썽",
//       ],
//     },
//     {
//       name: "경북매일신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/907.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9123/161417_001.jpg",
//       main_news_title: "주말처럼 붐비는 경주 교동 유채꽃단지",
//       sub_news_titles: [
//         "포철·광양 4천600명 우선 채용… 협력업체 ‘갈라치기’ 반발",
//         "원로가수 현미 별세…향년 85세",
//         "尹대통령, 첫 법률 거부권 행사…'양곡관리법 재의' 요구",
//         "영주 산불 이틀째…날 밝자 헬기 20대 투입",
//         "경북도 농촌체험휴양시설 50% 할인",
//         "출시 100일 ‘대구로택시’ 시민만족도 95%",
//       ],
//     },
//     {
//       name: "경남신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/333.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9072/161417_001.jpg",
//       main_news_title: "벚꽃·거리 청결 좋았지만… ‘야시장 바가지요금’은 오점",
//       sub_news_titles: [
//         "창원 원이대로 S-BRT사업 첫삽 떴다",
//         "‘진주~창원~수서 SRT’ 오는 9월부터 운행한다",
//         "경남도, 10년 전 중단된 거창·남해 도립대 통합 재추진",
//         "창녕군수 세 번째 보궐선거… 오일장 가보니",
//         "[김재경 기자의 우리동네 해결사] (2) 황금기 그리운 창원 합성동 지하상가",
//         "104년 전 “대한독립만세”… ‘그날처럼’ 다시 울려퍼졌다",
//       ],
//     },
//     {
//       name: "국제신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/332.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 15:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9071/152359_001.jpg",
//       main_news_title: '"정말 유치하고 싶습니다"',
//       sub_news_titles: [
//         "윤 대통령, 양곡관리법 첫 거부권 행사",
//         "국제유가, OPEC+ 감산 충격에 급등…韓 물가에 영향 우려",
//         '이상민 이태원 참사 책임 따질 탄핵재판 오늘..."쟁점은 중대성"',
//         '北 또 다시 "천안함 피격, 南 자작극" 망발..."MB 모략극"',
//         "평일 퇴근시간 100만 명 불꽃쇼…일등 시민의식 선뵐 기회",
//         "실사단, 부산 특산물 만찬…영화의전당·UN공원도 찾는다",
//       ],
//     },
//     {
//       name: "강원도민일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/335.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 07:36\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9075/074126_001.jpg",
//       main_news_title: "김진태 “강원 반도체공장 유치 포기는 없다”",
//       sub_news_titles: [
//         "“산림엑스포 동참 세계인 매료시킬 프로그램 만들 것”",
//         "춘천 지식산업센터 소통 오류로 사업허가 못받는 업체 속출",
//         "영월서만 산불 ‘2건’ 화재 각별히 주의해야",
//         "전국 임업 사망사고 3건 중 1건 강원도 발생",
//         "허영 “700만 경계선지능인 법 사각지대 방치”",
//         "강원도교육청 교육특례 ‘신중검토’ 다수에 고심",
//       ],
//     },
//     {
//       name: "인천일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0331/nsd155937506.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9097/161417_001.jpg",
//       main_news_title: "잇따른 큰불 원인은 “화재 취약시설·건조한 날씨”",
//       sub_news_titles: [
//         "충전소 찾아서 '유랑'…수소차 운전자 '한숨'",
//         "수도권 제2순환선 사업 정상화 발판",
//         "[총선 1년 앞] 경기도 정치권, 바닥 표심 훑기 한창",
//         "사업성 낮은 제2영흥대교…추진 불투명",
//         "담배꽁초 나뒹구는 산…'화재 무방비 노출'",
//         "경기도의회, 노르웨이 도서관서 혁신교육 답을 찾다",
//       ],
//     },
//     {
//       name: "경남도민일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/821.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9242/161417_001.jpg",
//       main_news_title: "경남도가 만든 도내 보호수 해설서 오류·부실",
//       sub_news_titles: [
//         "창원지법, 하영제 국회의원 구속영장 기각",
//         '창녕 보궐선거 후보마다 "더 이상 보궐선거 안돼"',
//         "산재 이겨내고 세계대회 정상 오른 조선소 노동자들",
//         '예경탁 경남은행 신임 행장 "지역사회 중심 역할"',
//         "윤 대통령 양곡관리법 거부권 행사…민주당 재의결 추진",
//         "우주항공청 설립 특별법 국무회의 통과",
//       ],
//     },
//     {
//       name: "매일신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/088.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 15:47\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9041/155154_001.jpg",
//       main_news_title:
//         '尹, 양곡법 거부권 행사에…與 "무리한 입법 막아야" 野 "삼권분립 훼손"',
//       sub_news_titles: [
//         "실리콘 음극재 3천억 투자. 포스코실리콘솔루션-포항시 대규모 MOU 체결",
//         "\"홍준표, '고마해라 마이 묵었다 아이가'…이제 그만 멈춰야\" 국힘 수석대변인의 일갈",
//         "9월부터 포항에서 SRT 타고 서울 수서 간다",
//         '김재원 "제주 4·3은 삼일절·광복절보다 격 낮다…尹 불참 공격 옳지 않아"',
//         "전매제한 완화 7일부터 시행… 비수도권 1년으로 단축",
//         "대구도시철도 5·6호선 구축계획 수립 본격화…내년 상반기 중 초안",
//       ],
//     },
//     {
//       name: "경기일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/339.png",
//       category_id: "dloc",
//       edit_time: "2023.04.03. 21:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9069/212258_001.jpg",
//       main_news_title:
//         "아파트만 짓고 기반시설 외면 ‘자족도시’ 약속 안 지킨 정부 [뉴스초점]",
//       sub_news_titles: [
//         "인천경제청, IPA 골든하버 부지 매입… 토지가 협상 장기화 전망",
//         "이틀에 한 번꼴 ‘산불’ 나는데…산불에 무방비한 경기도",
//         "허공에 날리는 인천시 규제혁신 건의안",
//         "병원 ‘비콘태그’ 의무화… 경기도 설치율 ‘전국 바닥권’",
//         "NO마스크에… 마스크 업체 ‘벼랑 끝’",
//         "갈고 닦은 실력 발휘… 국제대회 도전 꿈이 영근다 [‘경기도기능경기대회’ 개막]",
//       ],
//     },
//     {
//       name: "충북일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/927.png",
//       category_id: "dloc",
//       edit_time: "2023.04.03. 20:36\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9130/204232_001.jpg",
//       main_news_title: "경기불황에 청주시 민자 사업 '흔들'",
//       sub_news_titles: [
//         "외식 물가 오름세…'집 밖'대신 '집밥'",
//         "추억의 청주어린이회관…부모돼선 안간다",
//         "교육부에 민원 제기 … 충청대 총장 임용 둘러싼 내홍 격화",
//         '이영신 청주시의원, "청주 오창 소각장 협약 하자있다"',
//         "충북 새 브랜드 슬로건 '중심에 서다' 선정…7월 선포",
//         '"부산엑스포, 초당적인 협조·지원 약속"',
//       ],
//     },
//     {
//       name: "대전일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/089.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9062/162209_001.jpg",
//       main_news_title: "균형발전보다 '경제성'…충청 현안 '예타'에 발목",
//       sub_news_titles: [
//         "1300㏊ 넘게 태운 산불…진화도 난항",
//         "청소년 인구 주는데 소년범죄는 증가",
//         "최저임금 1만원 임박…속타는 소상공인",
//         "대전형 청년주택 건립사업 순항",
//         "세종시의장 '출자·출연기관 조례' 공포",
//         "천안·아산 디스플레이 특화단지 유치 집중",
//       ],
//     },
//     {
//       name: "전남일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/388.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9098/162209_001.jpg",
//       main_news_title: "“공공기관 통폐합 찬성하지만, 공론화 아쉬움”",
//       sub_news_titles: [
//         "5개월째 회의록 공개 의무 안지킨 광주 동구의회",
//         "담양군 주먹구구식 행정에 기초수급자 ‘눈물’",
//         "여당 민생119, 1호 과제로 '섬 지역 물 보내기 캠페인' 전개",
//         "광주 동부소방 의용소방대, 산불 조기진화 신속대응",
//         "광주·전남 수출기업 97.4% “차질 겪고 있다”",
//         "생활체육 태권소녀, 소년체전 광주대표로 선발됐다",
//       ],
//     },
//     {
//       name: "제주의소리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/334.png",
//       category_id: "dloc",
//       edit_time: "2023.04.04. 16:01\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9073/160224_001.jpg",
//       main_news_title:
//         "4.3 당시 몰살당한 가족들“1년에 10번 넘게 제사, 왜 그랬나 했더니…”",
//       sub_news_titles: [
//         "‘죽음에서 희망으로’ 잃어버린 마을에서 도착한 선물",
//         "오영훈 지사, 이재명 대표 향해 “제주도 1000원 아침밥” 협조 당부",
//         "4.3추념식 평가 엇갈린 제주정가고삐 죈 민주당, 입 닫은 국민의힘",
//         "제주 공업지역기본계획 수립 착수화북공업단지 이전 논의 본격화",
//         "취약한 이들의 연립을 돌보는 과학기술을 위하여 / 황임경",
//         "취약한 이들의 연립을 돌보는 과학기술을 위하여",
//       ],
//     },
//     {
//       name: "투데이신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/1019/nsd144531857.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9211/161417_001.jpg",
//       main_news_title: "제주의 붉은 동백은 그날과 닮았다",
//       sub_news_titles: [
//         "DL이앤씨 ‘디사일런트 바닥구조’로 층간소음 줄인다",
//         "MZ노조 새로고침 송시영 “투쟁조끼 벗고 노조 본질에 맞게 공정·상식·자율 외칠 것”",
//         "시 쓰기의 미묘(美妙)한 권유 “우리의 비밀직업은 시인”",
//         "‘도약·구출·기회’ 앞세워 서울시 매년 1조원 투입",
//         "보안 적신호 켜진 챗GPT…정부·기업, 규제 칼 빼드나",
//         "상업용 부동산 매매량 증가…부동산R114 “수익률 낮아지며 급매 나서”",
//       ],
//     },
//     {
//       name: "데일리NK",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/991.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 06:04\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9216/151022_001.jpg",
//       main_news_title: "[북한인권 인덱스] #9 북한 여성차별에 관한 고찰",
//       sub_news_titles: [
//         "1일부터 국경 야간통금 시간 변경…기존 규정보다 1시간 줄기도",
//         "한국인 거부하는 北 식당들…한미훈련 구실로 적대감 유발",
//         "옷차림 단속 걸린 20대 女, 1000위안 내고 단련대 처벌 피해",
//         "옷차림 단속 걸린 20대 女, 1000위안 내고 단련대 처벌 피해",
//         "시·군 교체검열 방침에 함경북도 봄철위생문화사업 불 붙어",
//         '北 "근로 능력 상실자 귀국시키라"…러 파견 노동자 개별 송환',
//       ],
//     },
//     {
//       name: "디자인정글",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/345.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.03. 16:29\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9077/163442_001.jpeg",
//       main_news_title:
//         "[포커스 인터뷰] 시사부터 일러스트까지, 그림으로 많은 이야기 풀어내는 시사만화가 유환석 작가",
//       sub_news_titles: [
//         "[포커스 인터뷰] “한글산업 통해 한글의 보편적, 과학적, 예술적 가치도 빛내자”_ 한글학자이자 한글운동가 김슬옹 박사 ",
//         "[전시 포커스] ‘공간’ 테마로 비현실적인 장면 속 도시 풍경 선보이는 그라플렉스",
//         "[전시 포커스] 팝아트의 시작, 영국 초기 팝아트 살펴볼 수 있는 ‘1960s 스윙잉 런던’",
//         "[포커스 인터뷰] 환경, 디자인, 문화 중시하는 ㈜삼원특수지 이연욱 대표 ",
//         "[포커스 인터뷰] ‘디자인과의 만남’ 보여줄 광주디자인비엔날레 나건 총감독 인터뷰 ",
//         "[전시 포커스] 다채로운 색감과 역동적 화면 구성으로 생명력 부여하는 댑스마일라 전",
//       ],
//     },
//     {
//       name: "한겨레21",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/948.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:12\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9171/161845_001.jpg",
//       main_news_title:
//         "양곡관리법 거부권 행사가 무시한 것…농민 홀대하는 쌀값 계산",
//       sub_news_titles: [
//         "지역 곳간 털어 케이블카 사업자만 배불려",
//         "소나무숲 만들려다 산 다 태웠다",
//         "산양·노루·담비 위 최상위 포식자가 나타난다",
//         "‘이태원 참사 159일 추모 특별판’을 나눕니다",
//         "야근, 야근, 야근, 휴무, 야근, 주근, 주근, 주근",
//         "‘역병의 투사’ 페낭 화인 우롄테, 세 번의 귀향 [인물로 본 동남아시아]",
//       ],
//     },
//     {
//       name: "베이비뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0222/nsd13325188.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9246/161417_001.jpg",
//       main_news_title:
//         "유보통합의 화두... 교육과 돌봄은 합해질 수 없는 것인가?",
//       sub_news_titles: [
//         "소아청소년과 사라진 자리에 통증클리닉 생긴 이유",
//         '"유보통합 쟁점 슬기롭게 해결하려면? 유보통합 추진 역사부터 되짚어야"',
//         '"정부 저출생 대책, 여성의 몸을 임신·출산 수단으로 관리하겠다는 것"',
//         "2022년 표준보육비용 발표… 0세 1인 月116만 7000원",
//         "두 돌 전 2시간 이상 미디어 시청 '사회성 발달 지연' 요인 맞다",
//         "서울시, 저녁 먹여 집에 보내는 어린이집 100개 생긴다",
//       ],
//     },
//     {
//       name: "더스쿠프",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/905.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 12:21\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9139/122457_001.jpg",
//       main_news_title: "“건보료 여기서 더 내라고요?”",
//       sub_news_titles: [
//         "‘차 다시 다니는’ 신촌 연세로의 상인은 웃었을까",
//         "LG유플러스에 달린 5G 중간요금제의 성패",
//         "1년 지나면 ‘떨이’ 되는 고가 스마트폰의 비밀",
//         "감산 선언한 중동 산유국의 뒷배와 미국의 반격 [마켓톡톡]",
//         "[직장인 서베이] 尹 외교 평가 갈수록 불만",
//         "국민연금 고갈론 건강보험 위기론 [SCOOP 관점]",
//       ],
//     },
//     {
//       name: "인벤",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/924.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:03\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9134/161103_001.jpg",
//       main_news_title:
//         "'스타워즈 제다이: 서바이버' 체험기 , 장점은 더하고, 단점은 보완하다",
//       sub_news_titles: [
//         '"아침의 나라에 온 걸 환영하오, 낯선이여", 검은사막, 인벤 순위 14위 안착',
//         "귀여움과 패러디의 맛집, 트릭컬: 리바이브, 이제야 '게임'으로 한 발을 내딛다",
//         "다시 밖으로, '포켓몬 GO', 엔데믹을 맞이한 '포켓몬 GO'의 변화",
//         "'엘든 링'의 GOTY 싹쓸이 실패 , BAFTA 올해의 게임은 '뱀파이어 서바이버즈'",
//         "2023년 3월 메타버스 이모저모, 디즈니 메타버스 사업 부문 정리, '미키 마우스는 메타버스를 떠났나'",
//         "젤다의 전설 신작이 보여준 초격차, 젤다의 전설 티어스 오브 더 킹덤 게임플레이 분석",
//       ],
//     },
//     {
//       name: "헬스조선",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/346.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:11\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9079/161845_001.jpg",
//       main_news_title: "영양에 기분까지 생각한 '항암 음료'",
//       sub_news_titles: [
//         "아이유 \"엄마랑 전화도 힘들어\"… '콜 포비아' 무엇이길래",
//         "소변·대변 색깔 '이렇게' 변했다? 췌장암 신호일 수도",
//         '"맥심 커피믹스, 실리콘 섞였을 수도"… 동서식품, 자발적..',
//         "무심코 '이것' 하는 습관이 목에 '용종' 만든다?",
//         "美 남성, 코 풀다가 하반신 마비… 왜?",
//         "[건강잇숏] 귀 옆에 있는 작은 '구멍'의 정체는?",
//       ],
//     },
//     {
//       name: "한국대학신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/384.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9094/161417_001.jpg",
//       main_news_title:
//         "통합수능 3년차 ‘특정 선택과목’ 쏠림 현상 심화…문·이과 유불리 대책은 아직",
//       sub_news_titles: [
//         "일반대도 온라인 수업만으로 졸업장 따는 학위과정, 인재양성의 새로운 모델 될까",
//         "[UNN 리포트] “저출산·고령화로 국가 전체가 ‘위기’…대학이 저출산·고령화 문제 해결에 동참해야”",
//         "[Bett 2023] 에듀테크로 본 교육의 미래…‘관계 회복’에 방점",
//         "메타버시티 선도하는 전문대, ‘실감형 콘텐츠·챗GPT’까지 접목해 미래 직업교육 앞당긴다",
//         "김혜수, 이정재 배우처럼 될 수 있을까요..? 일자리 잃어가는 배우들을 위해 동국씨어터랩 창단 조준희 교수｜#N터뷰 #01 #조준희 동국대 교수｜UNN TV",
//         "교육부, ‘회계·입시·채용’ 행정감사 집중…종합감사 미실시 77개大 우선 대상",
//       ],
//     },
//     {
//       name: "식품저널 foodnews",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd0427277.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9247/161417_001.jpg",
//       main_news_title: "“안식향산 검출 중국산 ‘미니 카스테라’ 사실상 다 팔려”",
//       sub_news_titles: [
//         "식약처, 민원서비스 우수 ‘대통령표창’",
//         "롯데칠성, 강릉공장에 ‘처음처럼&새로’ 브랜드 체험관 열어",
//         "범부처 수출 플러스 총력…신선식품 운송 콜드체인 물류인프라 구축",
//         "국립축산과학원장 개방형 직위 채용…3일부터 접수",
//         "서울식약청, 나들이철 대비 식중독 예방 교육",
//         "매일유업, 스타벅스차이나에 ‘아몬드브리즈’ 공급",
//       ],
//     },
//     {
//       name: "뉴스펭귄",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0405/nsd15024245.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9357/161417_001.jpg",
//       main_news_title: "'당신의 식탁위에도 멸종위기종 뱀장어가?'",
//       sub_news_titles: [
//         "'엄마랑 나란히' 멸종위기종 새끼 고래 포착",
//         "'오염자부담원칙' 부족한 탄소중립 기본계획",
//         '"슈퍼푸드 김, 이젠 땅에서 키워요" 스마트씨코리아 대표',
//         "[우리 고장 멸종위기종 #66] 임실납자루의 '임실에서 살아남기'",
//         "[그래픽멸종위기] 아니 꼬리가 없는 게 아니고 있긴 있는데...'검정짧은꼬리원숭이'",
//         "[펭귄의 서재] 정말 댐(Damn)인 댐(Dam)",
//       ],
//     },
//     {
//       name: "뉴스앤조이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0328/nsd22503109.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9356/161417_001.jpg",
//       main_news_title: "아름다움 저편에서 평화를 호소하는 제주를 걷다",
//       sub_news_titles: [
//         '6년간 장례 못 치른 스텔라데이지호 실종자 가족들 "2차 심해 수색 실시하라"',
//         '"감리회가 교회협 탈퇴하든 말든 청년들에게 무슨 상관이 있겠나"',
//         "교회와 민주주의, 친구일까요 적일까요?",
//         "달리면서 기부하는 '달리다꿈'",
//         "임보라 목사, 앰네스티 언론상 특별상 수상",
//         "세월호 엄마들도 때론 '더 멋지게' 살고 싶다",
//       ],
//     },
//     {
//       name: "매경헬스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2023/0330/nsd10125746.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9355/161417_001.jpg",
//       main_news_title: "M&A·R&D...주총으로 알아보는 제약업계 사업 방향성은?",
//       sub_news_titles: [
//         "한번 접지른 발목 괜찮을까…발목 자주 꺾이는 '발목불안정증'",
//         "꽃가루 알레르기 있다면 생과일도 주의 왜?",
//         "초여름같은 봄날, 많이 나도 문제, 안나도 문제인 '이것'은?",
//         "강남세브란스 '저신장과 성조숙증''애착과 우울증' 연속특강",
//         "식은땀에 홍조까지, 더워지니 더 불편한 '갱년기'",
//         'LG화학, 신규 당뇨병 치료제 ‘제미다파’ 출시…"혈당 개선도↑"',
//       ],
//     },
//     {
//       name: "철강금속신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/956.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9182/161417_001.jpg",
//       main_news_title:
//         "(포스코 창립 55주년) 힌남노 위기 극복한 포스코 100년 기업 향해 뛴다①",
//       sub_news_titles: [
//         "동국제강, 멕시코 께레따로서 Hola!…제2코일센터 완공",
//         "“철강산업 탈탄소화에 2050년까지 3천억 달러 투자 필요”",
//         "포스코 동반성장지원단, 맞춤형 컨설팅으로 상생 경영 나서",
//         '2분기 철강價, "올려야 산다"',
//         "포스코그룹 창립 55주년…”존경받는 100년 기업 성장” 다짐",
//         "4월 포스코 STS, 300계 인하-400계 인상",
//       ],
//     },
//     {
//       name: "뉴스포스트",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/1112/nsd10248812.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9354/161417_001.jpg",
//       main_news_title: "[마포의 마을버스] ① 망원동으로 가는 초록버스",
//       sub_news_titles: [
//         "SK, 주주가치 제고 ‘LG화학-LG엔솔 사태’와 무엇이 달랐나",
//         "식품업계 주총 마무리…키워드는 글로벌·신사업",
//         "‘KB리브엠’ 정식 서비스 될까...금융권 사업 가능성에 촉각",
//         "물가 상승에 렌탈비도 올라…코웨이‧SK매직 가격 인상",
//         "‘현대百 투자‧이마트 효율화’…유통업계, 3월 주총 마무리",
//         "‘소아과 폐과 선언’에 복지부, 긴급대책반 구성",
//       ],
//     },
//     {
//       name: "농민신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/911.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 14:57\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9141/150217_001.jpg",
//       main_news_title: "디지털농민신문, 새 스마트 시대를 열다",
//       sub_news_titles: [
//         "[디지털농민신문 4월3일 출범] PC로도 서비스 이용 가능…음성 뉴스 듣고플 땐 스피커 ‘클릭’",
//         "[디지털농민신문 4월3일 출범] “농촌소식 전할 ‘고속도로’ 생겨…공론장 역할 큰 기대”",
//         "쌀 생산비 ‘껑충’ 농가 수익 ‘폭삭’",
//         "주키니호박 3일 출하 재개…LMO 양성 농가 17곳 폐기",
//         "화석연료보조금 폐지 다시 고개…농업계 예의주시",
//         "영농철 사고 다발 ‘되풀이’…“기계점검 등 안전예방 실천해야”",
//       ],
//     },
//     {
//       name: "맥스무비",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/075.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:14\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9162/162209_001.jpg",
//       main_news_title: "[단독] 장동건, 다큐로 세계적 TV 어워드 노린다",
//       sub_news_titles: [
//         "신카이 마코토, 신카이 마코토를 넘다",
//         "농구 실화 '리바운드', 개봉작 예매율 1위",
//         "“로맨스는 없다?!” 영화 ‘킬링 로맨스’ 멀티 장르 버라이어티 무비의 ‘끝판왕’",
//         "팬들 위한 특별한 굿즈! ‘귀멸의 칼날: 상현집결, 그리고 도공 마을로’ 4주차 특전 ‘상현집결본’ 공개",
//         "‘곰돌이 푸: 피와 꿀’ 곰돌이 푸와 피글렛의 피비린내 나는 ‘변신’",
//         "‘렌필드’ 개봉 전부터 K-직장인들 대공감한 이유는?",
//       ],
//     },
//     {
//       name: "주간조선",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/990.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9213/162209_001.jpg",
//       main_news_title: "공무원·군인에 줄 연금빚 1181조…국가부채의 절반 넘어",
//       sub_news_titles: [
//         "원로가수 현미 별세…향년 85세",
//         "김재원...'4.3사건 격' 운운하며 또 자충수?",
//         "전여옥, 文에 “잊혀질까봐 이벤트 하는 사람이...”",
//         "눈덩이 자영업자 대출...‘돌려막기’ 위기상황 ‘1000조 빚’ ",
//         "“MZ공동체 의식 높이려면”...이모티콘의 놀라운 효과보니",
//         "윤석열 대통령, 양곡관리법 거부권 행사...尹정부 1호",
//       ],
//     },
//     {
//       name: "르몽드 디플로마티크",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/915.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.14. 14:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0314/article_img/new_main/9116/141559_001.png",
//       main_news_title: "고객 유치를 위해 영업하는 프랑스 학교들",
//       sub_news_titles: [
//         "우크라이나 위기탈출을 위한 제안들",
//         "에디티스를 팔고 아셰트를 넘보는 비방디",
//         "노 마스크 시대, 그러나 돌아오지 않는 관객들",
//         "[송영애의 시네마 크리티크] 가 담아낸 시간들",
//         '[한성안의 문화톡톡] "인생이 좆같아요!"',
//         "‘아아’는 또 하나의 계급이다",
//       ],
//     },
//     {
//       name: "약사공론",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/979.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 13:42\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9204/135105_001.jpg",
//       main_news_title: "고혈압약 '아테놀올' 전수 조사…제약사 회수 문의 빗발",
//       sub_news_titles: [
//         '인체·동물약 교차생산 가능해지나? "업계도 기대"',
//         "기대감 높은 지원금 근절 법안 내용은?",
//         "'처방전 자동발행기' 한시적 비대면 \"중단하라...시범사업 불가\"",
//         "약사면허효력정지 3일부터 적용…급여청구 등 불가",
//         "일본, 중복투약 막는 ‘전자처방전’ 시스템 운영 '눈길'",
//         "윤 대통령 양곡관리법 거부권 행사, 간호법 등 쟁점 법안은?",
//       ],
//     },
//     {
//       name: "에이블뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/328.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9059/161845_001.jpg",
//       main_news_title: "“중증장애인 오지마” 장애인 차별 대안학교 인권위로",
//       sub_news_titles: [
//         "장애인가족 돌봄부단 경감 ‘장애인가족 지원법 제정안’ 발의",
//         "‘질식사’ 장애인거주시설 행정처분 요청, 지자체 묵묵부답",
//         "휠체어계 혁신 ‘동력보조장치’, 비싼 가격에 휘청",
//         "“장애인권리예산 보장으로 차별 없는 인천을‥”",
//         "한전KDN, 육상 등 9개 종목에 장애인 체육선수 10명 채용",
//         "인권침해·학대 사건 반복 “장애인학대시설 폐쇄하라”",
//       ],
//     },
//     {
//       name: "낚시춘추",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/984.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.23. 11:45\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0325/article_img/new_main/9209/050746_001.jpg",
//       main_news_title: "[특집_도전! 대전갱이낚시] 울산 대전갱이 배낚시",
//       sub_news_titles: [
//         "[특집_도전! 대전갱이낚시] 대전갱이 아지트 6",
//         "[해외] 2023 요코하마피싱쇼",
//         "[낚시와 건강] 황사 예방, 비타민과 생채 섭취로 면역력 높여야",
//         "[피플] 국내 유일의 대나무낚싯대 제작자, 용운공방 송용운 명장",
//         "[연재_세상 쉬운 바다루어 25] 해변의 요정을 루어로 낚아보자_보리멸 루어낚시",
//         "[칼럼] 낚시는 과연 운칠기삼(運七技三)의 도락일 뿐일까?",
//       ],
//     },
//     {
//       name: "이웃집과학자",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/988.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.31. 21:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0331/article_img/new_main/9212/212205_001.jpg",
//       main_news_title: "기계학습법으로 소행성 구성 성분 알아낸다",
//       sub_news_titles: [
//         "100세 시대, 자산투자·소비·은퇴의 최적 솔루션 찾는게 가능?",
//         "식욕에 관한 욕망은 뇌의 어떤 신경이 담당할까?",
//         "가장 정밀한 ‘액시온’ 탐색 실험",
//         "이러다 우리 물에 빠져 다 죽어!",
//         "안보고도 계단을 성큼성큼 걷는 로봇 ‘드림워커’",
//         "영화 상영하듯 뇌에 빔 프로젝터 쏴 뇌 연결지도 만든다",
//       ],
//     },
//     {
//       name: "채널예스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/361.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9084/161417_001.jpg",
//       main_news_title: "박서련, 같은 이야기를 반복하고 싶지 않다",
//       sub_news_titles: [
//         "[MD 리뷰대전] 책상 정리에 한나절 보낸 당신께",
//         "[전종환의 제주에서 우리는] 제주행을 결정한 이유",
//         "『세이노의 가르침』 4주 연속 종합 1위",
//         "불편하지만 눈감을 수 없는 '폭력'에 관한 시(詩)",
//         "[심윤경의 할 수 있다 할 수 없다] 동체 착륙",
//         "뮤지컬 <라흐마니노프> - 따뜻한 응원과 위로가 필요하다면",
//       ],
//     },
//     {
//       name: "주간경향",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1007/nsd161849944.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 09:48\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9361/095437_001.jpg",
//       main_news_title: "‘저성과자’라면 해고해도 되나요",
//       sub_news_titles: [
//         "아이들을 위한 디지털 리터러시",
//         "“앞으로 (전광훈의) ‘전’ 자도 안 꺼내겠다”",
//         "아이들이 편안한 교육, 경쟁이 만들어주나요",
//         "반채워 보냈던 물컵이 돌아왔다?!",
//         "트엉 주석이 친중이라 투자가 우려된다고?",
//         "검정고무신 비극 부른 ‘저작권 분배’, 웹툰 계약도 ‘판박이’",
//       ],
//     },
//     {
//       name: "법률신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1103/nsd124326426.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.03. 18:48\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9039/185306_001.jpg",
//       main_news_title: "“사법협조자 형벌 감면, 한국도 도입해야”",
//       sub_news_titles: [
//         "줄어드는 법관 파견… 올해는 국내·외 통틀어 ‘13명’ 역대 최저",
//         "[인터뷰] 법무법인 오킴스 “시대 변화 감지해 자문 제공”…첨단 산업분야에 강점",
//         "변협, 매출 300억 원 초과 로펌에 특별회비...임원 최대 84명→94명으로",
//         "[로이터(Lawyter)] 캄보디아에 투자하는 이유",
//         "[고승덕의 백세건강 모범답안] 제로 칼로리 음료는 건강에 해롭다",
//         "[2022년 분야별 중요판례분석] (6) 친족법 - 배인구 법무법인 로고스 변호사",
//       ],
//     },
//     {
//       name: "월간중앙",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/950.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9173/160224_001.jpg",
//       main_news_title: "우크라이나 위기와 핵 문제에 관한 긴급제언",
//       sub_news_titles: [
//         "안중근 순국 113주기, '하얼빈' 작가 김훈을 만났다",
//         "[시승기] 절제된 멋이 되레 돋보이는 차 볼보 XC90",
//         "'이정후의 일거수일투족 관심'..프로야구 5대 핵심 포인트",
//         "해양진흥공사 인증 선·화주 상생협력 우수 사례에 관심",
//         "김주애 앞세운 김정은의 광장정치",
//         "‘피크 차이나(peak china)론’은 사실일까",
//       ],
//     },
//     {
//       name: "인사이트코리아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/807.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9219/161417_001.jpg",
//       main_news_title:
//         "구자은 LS그룹 회장 '자산 50조' 야심...LS머트리얼즈가 비장의 무기 된다",
//       sub_news_titles: [
//         "[인터뷰] 복지 서비스 전문 기업 SK엠앤서비스 이끄는 박정민 대표",
//         "자영업자 대출 1000조 돌파…10명 중 6명 ‘다중채무자’",
//         "아워홈 배당금 전쟁, 이변 없었다…구지은 부회장 ‘완승‘",
//         "구자은 LS그룹 회장 '자산 50조' 야심...LS머트리얼즈가 비장의 무기 된다",
//         "진옥동 신한금융 회장 “에너지 절약 실천습관, 문화로 발전시켜 전파”",
//         "‘다크앤다커 사태’에서 넥슨이 웃는 이유는?",
//       ],
//     },
//     {
//       name: "MONEY",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/806.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.28. 14:28\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0328/article_img/new_main/9226/143209_001.jpg",
//       main_news_title: "[BIG STORY]당신은 부자입니까",
//       sub_news_titles: [
//         '"부자 아니다"...부채 늘고 재테크 제자리',
//         "뜨는 빵집, '공간력'에 답 있다",
//         "줄 서는 베이커리, 특별함의 비밀은",
//         "배우자 vs 내연관계자, 재산분쟁 파국 막으려면",
//         "증권사, 토큰증권 시장 선점 나서",
//         "증여재산에 상속세 부과되는 경우는",
//       ],
//     },
//     {
//       name: "이코노미조선",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/982.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.03. 11:09\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9208/111408_001.jpg",
//       main_news_title: "IT와 엔터 결합, 최선의 결과로 끝난 에스엠 인수전",
//       sub_news_titles: [
//         "카카오에 대해 얼마나 알고 투자하시나요",
//         "실리콘밸리뱅크는 왜 파산했을까",
//         '"남편 불륜 대화 녹음 블랙박스, 증거 능력 있다"',
//         "서울 아파트 실거래가 반등, 시장은 여전히 안갯속",
//         "사우디가 만드는 새로운 질서",
//         "최초의 흑인 女 대통령 도전하는 카멀라 해리스",
//       ],
//     },
//     {
//       name: "사이언스타임즈",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/355.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.31. 11:12\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0331/article_img/new_main/9081/114133_001.jpg",
//       main_news_title:
//         "인과응보의 과학적 근거, “연진아, 〈더 글로리〉 결말은 과학이야.”",
//       sub_news_titles: [
//         "제임스 웹, 암석형 외계행성 TRAPPIST-1b를 자세히 관측하다",
//         "“양자컴퓨터 실현되려면 세계 공동의 노력 필요”",
//         "미래교육 전망(4)_우리가 새롭게 해야 할 것은 무엇인가",
//         "자면서 돌아다니는 우리 아기, 분리 수면 꼭 해야 할까?",
//         "비염 치료의 새로운 패러다임 열린다",
//         "금성, 달에 의해서 가려지다",
//       ],
//     },
//     {
//       name: "매경이코노미",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/024.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9103/161845_001.jpg",
//       main_news_title: "K-로봇: BEYOND",
//       sub_news_titles: [
//         "순자산가치 ‘뚝뚝'스텝 꼬인 SK스퀘어",
//         "‘물 들어올 때 노 젓는’ 오세훈표 재건축",
//         "실적 정체에 오너도 복귀경영권 ‘안갯속’",
//         "‘곰표’에서 ‘한강’ ‘강서’로수제맥주 1등",
//         "300조 용인 반도체 클러스터  경기 남부 부동산 ‘지각 변동'",
//         "산업용·협동 로봇대기업 계열 두각",
//       ],
//     },
//     {
//       name: "씨네21",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/140.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9035/160224_001.jpg",
//       main_news_title:
//         "[기획] <해피 투게더 리마스터링>, 왕가위 감독 단독 인터뷰",
//       sub_news_titles: [
//         "함께 작업했던 6명의 감독들이 말하는 ‘배우 구교환’",
//         '[인터뷰] 구교환, "열렬하지만 무던하게 공존하고 싶다"',
//         "[인터뷰] 구교환, \"'길복순'에선 복순의 옷깃 끄트머리를 붙잡고 있다가 '툭' 퇴장하고 싶었다\"",
//         "[인터뷰] 구교환이 픽한 '슬램덩크' 최애 캐릭터는?",
//         "[커버] 이 배우, 교환 불가능: ‘씨네21’ 창간 28주년 특별호 커버스타 구.교.환.",
//         "제 1400호 잡지 내용보기",
//       ],
//     },
//     {
//       name: "정신의학신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/966.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9191/161845_001.jpg",
//       main_news_title: "현대 과학 기술 속 사람과 사람 사이의 거리",
//       sub_news_titles: [
//         "​​​​​​​[Doctor's Mail] 각종 중독 및 애정 결핍, 불안과 우울",
//         "성인 ADHD 치료 방법, '약물 치료' 꼭 필요한 것일까? - ADHD약 종류/부작용/복용방법 [성인 ADHD 특집 2편]",
//         "[카드뉴스] 긍정의 힘!!",
//         "[정신의학 역사 만화] 7-1. 정신 약물의 시대",
//         "사람은 타인의 고통을 진심으로 공감할 수 있을까?",
//         "사회성 지능을 키우려면?",
//       ],
//     },
//     {
//       name: "포브스코리아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/951.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9174/160224_001.jpg",
//       main_news_title: "이정호 레인보우로보틱스 대표 - K-로봇 개척자",
//       sub_news_titles: [
//         "배경훈 LG AI 연구원장",
//         "김준환 스트라드비젼 대표",
//         "FORBES KOREA PICK IDOL",
//         "국내 증권사 MTS 1위는 KB증권 ‘M-able(마블)'",
//         "김익환이 만난 혁신 기업가 - 권민재 하이어엑스 대표",
//         "부울경 혁신 리더(12) | 안병석 에어부산 대표",
//       ],
//     },
//     {
//       name: "컴퓨터월드",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/928.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.31. 09:16\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0331/article_img/new_main/9138/092158_001.jpg",
//       main_news_title: "[커버스토리] 중견 SI 기업들의 ‘클라우드 대전’",
//       sub_news_titles: [
//         "“최고의 경쟁력을 갖춘 ‘디지털 리딩 뱅크’가 되도록 최선을 다할 것”",
//         "제2의 알파고 쇼크, ‘챗GPT’",
//         "생체인식 기술 보편화 시대, 출입보안 기업 ‘주목’",
//         "오픈베이스 “기술 중심 조직 TCC 신설, 고객사 모든 고민 함께하겠다”",
//         "“‘테라원 이데아’로 새로운 도약에 나선다”",
//         "‘연결성’ 중심 솔루션으로 CMP시장에서 떠오르는 ‘스트라토’",
//       ],
//     },
//     {
//       name: "이코노믹리뷰",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0418/nsd164755323.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9228/161417_001.jpg",
//       main_news_title: "카톡은 커뮤니티로 흐른다 [IT큐레이션]",
//       sub_news_titles: [
//         "韓·中·美  ‘폴더블폰 삼국지’ 격전의 서막 열렸다",
//         "[현대차·기아 “테슬라 한판 붙자”④] 전기차 시장 제패 승부수는 ‘다양성’",
//         "[현대차·기아 “테슬라 한판 붙자”③] 디자인과 플랫폼으로 경쟁력 강화",
//         "“900원 커피 팝니다”…편의점 ‘가성비 커피’ 경쟁",
//         "[다시, 미중 패권전쟁①] 가상자산 규제하는 미국 vs 마이크론 터는 중국",
//         "KG모빌리티, 명맥은 잇되 쌍용차 뛰어넘는다",
//       ],
//     },
//     {
//       name: "그린포스트코리아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/938.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.31. 18:08\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0331/article_img/new_main/9158/181401_001.jpg",
//       main_news_title: "효성티앤씨·SK케미칼, ‘친환경 섬유’로 ESG 가치 높인다",
//       sub_news_titles: [
//         "뜨는 ‘폐배터리 재활용 사업’, 폐배터리 쟁탈전 예고",
//         "산업계 편든 ‘탄소중립·녹생성장 기본 계획’…NGO 반발↑",
//         "300兆 투자 ‘시스템 반도체 클러스터’…환경 계획은 ‘백지상태’",
//         "현대차그룹, 부산엑스포 개최 위해 유치 열기 결집에 총력",
//         '이동우 롯데지주 부회장 "신사업 지속 발굴로 기업가치 키울 것"',
//         "환경공단, 폐LED조명 분리배출 캠페인 진행",
//       ],
//     },
//     {
//       name: "한경잡앤조이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/0615/nsd10319824.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 09:41\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9238/094610_001.jpg",
//       main_news_title:
//         "[조직문화가 변하고 있다②] “유연근무가 기업 생산성에 ‘효과적’, 알지만 도입 꺼리는 경영진들…문제는 ‘신뢰’”",
//       sub_news_titles: [
//         "주 52시간도 연차 못 쓰는 마당에···개발자들 ‘주69시간 근로 개편은 후퇴’",
//         "韓직장인 2명 중 1명 지난해 이직 시도…사원급 55%, 부장·임원급 37%도 이직 시도",
//         "챗GPT로 리포트 작성한 대학생들, 반응은?",
//         "블랙핑크 게임 나온다···‘블랙핑크 더 게임’ 글로벌 출시 임박",
//         "이 조건이면 '수도권 거주 구직자' 지방 회사 지원한다",
//         "2022년 평판조회 가장 많이 한 직군 ‘IT/개발’, 多열람자 ‘실무담당자’",
//       ],
//     },
//     {
//       name: "시사저널",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/135.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9151/161417_001.jpg",
//       main_news_title: "광화문 출근하는 김 대리가 1만원 식대로 먹을 수 있는 것",
//       sub_news_titles: [
//         "‘탄핵 기로’ 이상민 측 “파면당할 만큼 중대한 위법 없었다”",
//         "‘신문 총리’ 이은 ‘돌덩이’ 논란…한덕수 발언 ‘또’ 도마 위",
//         "尹대통령 ‘양곡법 거부’에…與 “당연한 결정” vs 野 “정권은 끝”",
//         "양대노총, 최저임금 ‘시급 1만2000원’ 제시…“대폭 인상해야”",
//         "아워홈 주총서 30억원 배당안 가결… 구지은 진영 ‘승’",
//         "‘불법 정치자금’ 혐의 李 측근 김용, 보석 청구",
//       ],
//     },
//     {
//       name: "월간 산",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/094.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9232/161417_001.jpg",
//       main_news_title:
//         "[자전거로 싱가포르~말레이시아] 남편 떼놓고 혼자서, 홀가분하게 집을 나섰다",
//       sub_news_titles: [
//         "휴대폰 전자파로 네팔 벌꿀이 사라졌다",
//         "4월부터 네팔 트레킹 가이드 없이 못 한다",
//         "월간산 추천 4월에 갈 만한 산 BEST 4",
//         "월간산 추천, 4월에 걷기 좋은 길 BEST 4",
//         "[4월의 산악사진] 진달래 출사 명당, 강진 주작산",
//         "축구장 20개 면적 태운 인왕산 산불, 한때 120가구 대피",
//       ],
//     },
//     {
//       name: "국방일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/908.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.03. 17:42\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9140/174854_001.jpg",
//       main_news_title: "‘미래전 핵심’ 예비전력 정예화·혁신 박차",
//       sub_news_titles: [
//         "산불 대응 전력투구 나선 군 장병들",
//         "‘예비전력 정예화’ 어떻게 추진되나?",
//         "[정전협정 70년, 참전용사에게 듣는다]  351고지전투 참전 손기태 옹",
//         "[알쏭달쏭 군사상식] ‘국가급 전력’ 항모는 왜 식구들과 함께 다닐까요?",
//         "8년 만에… 한미 해병대 ‘군악대 연주’ 울려퍼지다",
//         "국방대,  “적정 규모 설정해 예비군 정예화 ‘선택과 집중’”",
//       ],
//     },
//     {
//       name: "미디어스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd01153196.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9248/161417_001.jpg",
//       main_news_title: '이상민 탄핵심판 개시, 유가족 "장관 자격 없다 탄핵하라"',
//       sub_news_titles: [
//         "기자 사칭한 카톡 '투자리딩방' 초대 메시지 기승",
//         "'방송법만은 안 된다' 국힘, 권한쟁의 카드 만지작",
//         "대한민국 1호 영업사원의 선물 보따리는 뭘까",
//         "SBS노사, 스튜디오S 드라마 제작 가이드라인 제정",
//         "강원도 산불 잇따르는데 골프연습장 찾은 김진태",
//         "포털뉴스진흥위법, 대통령령으로 기사 삭제?",
//       ],
//     },
//     {
//       name: "시사인",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/308.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 07:27\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9052/073139_001.jpg",
//       main_news_title: "“과거는 봉인되었고 미래는 봉쇄되었다”",
//       sub_news_titles: [
//         "직접 해보면 생각보다 어렵지 않다 [기자의 추천 책]",
//         "경비복 입은 우리도 사람입니다 [포토IN]",
//         "계엄 문건의 진실은 밝혀질 수 있을까? [기자들의 시선]",
//         "의원 정수 확대 반대에 또 헛바퀴 도는 정치개혁",
//         "‘한·중·일 vs 북·중·러’ 도식으로 이해하기 어려운 세상 [편집국장의 편지]",
//         "“빨리 5·18 유가족 단체 피해자분들께 사과드리고 싶다.” [말말말]",
//       ],
//     },
//     {
//       name: "바이라인네트워크",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/819.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 15:52\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9240/160039_001.jpg",
//       main_news_title: "위믹스에 페이코인까지, 흔들리는 K 코인",
//       sub_news_titles: [
//         "코발트 프리 개발 나서는 한국 배터리 “LFP는 정답이 아니다”",
//         "“맥주 마시고 춤 추고…살아 숨쉬는 아바타 NFT를 만들겠다”",
//         "현대오토에버-아비커스, 바다 위 자율주행에 ‘맞손’",
//         "슈퍼캣, 인디게임 플랫폼 펑크랜드에 ‘아스란 전기’ 출시",
//         "밀리의 서재, 3월 인기도서 1위는 ‘세이노의 가르침’",
//         "크라우드웍스, ‘데이터바우처 합격사례집’ 발간",
//       ],
//     },
//     {
//       name: "한경비즈니스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/0928/nsd125033437.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 09:48\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9038/095437_001.jpg",
//       main_news_title:
//         "외풍에 쓰러진 KT… 소유 분산 기업들, CEO 리스크에 ‘흔들’",
//       sub_news_titles: [
//         "코로나19에 허용됐던 비대면 진료, 이제 원위치?",
//         "‘급한 불’ 껐지만 언제 다시 타오를지 모르는 뱅크데믹",
//         "‘본계약 협상 임박’ 현대로템, 폴란드형 K2전차 컨소시엄 이행합의서 체결",
//         "\"쿠레주 자주 입네\" 제니로 다시 '힙해지는' 브랜드, 미니 스커트의 아버지로 불리는 디자이너 [최수진의 패션채널]",
//         "AI가 온다, 당신의 사무실로!…빅테크들의 오피스 AI 경쟁[스페셜리포트]",
//         "“컴활은 이제 무용지물?” 생성 AI가 직장인에게 미칠 영향은",
//       ],
//     },
//     {
//       name: "법률방송뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/815.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9235/161417_001.jpg",
//       main_news_title: "이미지없음",
//       sub_news_titles: [
//         "여야, '2030 부산엑스포 결의안' 가결... 곧바로 실사단에 전달",
//         "[MZ 사랑과 전쟁②] 다 퍼줬는데 헤어지자고?... '데이트 비용' 돌려받으려면",
//         '‘파타야 살인’ 공범 윤씨, 징역 14년 선고에... 검찰 "형 가볍다"',
//         "'누누티비 논란'에도 타 사이트 찾는 이용자… 단순 스트리밍 시청, 저작권 침해 일까",
//         '"아버지 유언장에 내연녀가 상속 1순위, 무효 안되나요"',
//         "4년 만에 재개된 형사법아카데미... ‘사법협조자 형벌제재 감면' 논의",
//       ],
//     },
//     {
//       name: "여성신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/310.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9053/161417_001.jpg",
//       main_news_title:
//         "[신당역 사건 발생 200일] 여성에겐 경보기, 전 직원에겐 호루라기… 서울교통공사의 ‘안전대책’",
//       sub_news_titles: [
//         "윤 대통령, 양곡관리법 개정안 거부권 행사…“포퓰리즘 법안”",
//         "나의 40대는 찬란함...더 빛날 50대 기다립니다",
//         "청소년엄마 67% “육아 본인 담당”… 10명 중 3명은 무직",
//         "4·3 이후 공동체 재건한 제주여성들… 기록·전시에도 성인지 관점 담겨야",
//         "나이키, ‘월경혈 샘 방지’ 여자축구 국가대표팀 유니폼 공개",
//         "‘여성할당제’가 남성 역차별?... “적극적 조치는 차별이 아니다”",
//       ],
//     },
//     {
//       name: "코메디닷컴",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/296.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:03\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9046/161103_001.jpg",
//       main_news_title: "원로가수 현미, 자택서 별세... 향년 85세",
//       sub_news_titles: [
//         "무심코 먹는 약, 콩팥 망치는 성분은?",
//         "사회적 지위 높은 여성, 외로움 잘 탄다",
//         "현미·샐러드, 콜레스테롤 낮추고 노화 늦추는 이유",
//         '응급실 뺑뺑이 사망 반복... "응급의료 체계의 민낯"',
//         "스트레스까지 높여…건조한 날씨, 건강 영향은?",
//         "중년 남편의 착각, “밥 줘” vs “알아서 챙겨 드세요”",
//       ],
//     },
//     {
//       name: "베리타스알파",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/958.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.03. 16:07\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9181/161256_001.jpg",
//       main_news_title:
//         "[2023 QS 학과순위] 서울대 ‘세계 50위 이내’ 37개 학과 ‘국내 최고’.. 연세대14개 KAIST8개 고대4개 포스텍2개 순",
//       sub_news_titles: [
//         "‘9년 차’ 2023선행학습영향평가보고서 어땠나.. 올해 15개 상위대 2076페이지 ‘축소’",
//         "'통합수능 3년차' 국어도 이과강세되나.. 이과 재수생 ‘언매’ 선택 64.7%",
//         "2024서울대 입학전형 공개..수시 정원내 기균 신설, 자연계열 수능 응시영역 기준 변화",
//         "'통합형수능 대국민 사기극' 강요하는 교육부..'대학더러 이과침공 해결책 시늉만 내라'",
//         "‘비교과 대폭 축소’ 2023 학생부 기재요령..블라인드효과에 자소서 폐지까지 '총체적 깜깜이' 2024학종",
//         "'무대책' '미봉책' 교육부..'피할 수 없는 자기부정에 커지는 교육부 폐지론'",
//       ],
//     },
//     {
//       name: "소년한국일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0728/nsd1110888.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9060/161845_001.jpg",
//       main_news_title: "봄으로부터···  짙은 문화의 향기 ‘솔~솔’",
//       sub_news_titles: [
//         "경복궁 ‘집옥재’ 서 왕처럼 책 읽어볼까",
//         "서울 목동 파리공원, 3만 송이 튤립 감상해요",
//         "티라노사우루스, 돌출 이빨 아니다",
//         "개학 후 일주일간 코로나 확진 학생 ‘5326명",
//         "야산·길가에 핀 봄 야생화 반갑게 너의 이름을 불러본다",
//         "별 탐험대 등 천문체험 프로그램 운영",
//       ],
//     },
//     {
//       name: "한국농어촌방송",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0315/nsd181452869.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9236/161417_001.jpg",
//       main_news_title: "윤석열 대통령, '양곡관리법 개정안' 거부권 행사",
//       sub_news_titles: [
//         "해경, '마약 원료' 대마·양귀비 밀경사범 단속 나선다",
//         "'정부·여당 불참' 농해수위…민주 \"한총리, 양곡법 거부권 건의는 '탄핵' 사유\"",
//         '스타벅스 "저녁 7시 이후 샌드위치·케이크 구매 시 최대 50% 할인"',
//         "윤석열 대통령, '양곡관리법 개정안' 거부권 행사",
//         "'바다날씨 직접 알린다'…국립해양조사원, 해양예보 서비스 온라인 홍보단 모집",
//         "해수부, 기관 29곳과 '지능형 해상교통정보산업 협의회' 발족",
//       ],
//     },
//     {
//       name: "동아사이언스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/363.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.30. 17:25\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0330/article_img/new_main/9086/173102_001.jpg",
//       main_news_title:
//         '[오늘과학] "개·고양이와 함께 자란 아이, 음식 알레르기 덜 걸려"',
//       sub_news_titles: [
//         "故 이건희 회장 기부금 사용처 보니...초미숙아 만성폐질환 치료제 찾는다",
//         "\"인간 수명 한계 아직 '최대' 아냐...1950년대 이후 출생 평균수명 급증\"",
//         "한국어 AI '엑소브레인' 개발 10년 '대장정' 마무리",
//         "“사회성 발달 더딘 아동 대다수는 2세 이전 미디어 시청”",
//         "이종호 과기정통부 장관 올해 재산 148억원 신고",
//         "우주기업 위한 발사허가 절차 손본다...올해 우주개발에 8742억 투입",
//       ],
//     },
//     {
//       name: "월간노동법률",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14480190.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 12:51\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9237/125454_001.jpg",
//       main_news_title:
//         "이동근 경총 부회장, “노동개혁 성공, 尹 정부 강력한 리더십에 달려있어”",
//       sub_news_titles: [
//         "“삼표 회장 기소, 수사기관의 강력한 메시지?”...긴장감 맴도는 경영계",
//         "‘회계 투명성 강화법ㆍ거대노조 괴롭힘 방지법’ 국회 발의",
//         "김경락 대상노무법인 대표노무사, 2022년 공인노무사상 수상",
//         "법원 “저성과자 사회봉사 시킨 국민은행, ‘위자료’도 지급해야”",
//         "“별정우체국, 불법파견 아냐” 정부 손 든 법원...법이 위법 감췄나",
//         "현대차 노사합의 손해배상 소송, 대법으로...퇴직자, 회사 측에만 상고",
//       ],
//     },
//     {
//       name: "게임메카",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/356.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 15:59\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9082/160224_001.jpg",
//       main_news_title: "[겜ㅊㅊ] 거짓말쟁이에게 승리를! ‘사회적 추론’ 게임 5선",
//       sub_news_titles: [
//         "[AI야 소녀를 그려줘] 레데리 열차 강도도 손발이 맞아야 한다",
//         '[롤짤] "내가 패귀라니" 7전 전패 빠진 탈리야',
//         "바이오하자드 RE:4 흥행 덕? 캡콤 주가 역대 최고치 경신",
//         "[오늘의 스팀] 리마스터 또 사라고? 아크 서바이벌 불만 폭주",
//         "호드와 얼라가 한 길드에, 와우 통합 길드 5월 4일 열린다",
//         "건설과 습격을 동시에, 데바데 개발사 신작 '미트 유어 메이커'",
//       ],
//     },
//     {
//       name: "산업일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/808.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9223/161845_001.jpg",
//       main_news_title:
//         '윤중로 벚꽃로를 찾은 상춘객들로 북적 "엔딩 전 만끽하자"',
//       sub_news_titles: [
//         "韓 수출 품목 및 국가 집중도, 세계 10대 수출국 중 1·2위",
//         "2029년 차량용 디스플레이시장 116억 달러 규모로 성장할 터",
//         "온실가스 국제감축(CDM), 韓 기업의 탄소판 대항해시대 기회",
//         "자율주행시대되면, 개인화된 차량용 디스플레이 각광받나",
//         "1월 공작기계 생산…26개월 만에 감소로 전환",
//         "소프트웨어(SW) 중요성 커지면…자동차 공급사슬 재편",
//       ],
//     },
//     {
//       name: "전기신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/965.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9190/161845_001.jpg",
//       main_news_title: "전기이륜차 업체들, 시장 선점 잰걸음... BSS 확충이 관건",
//       sub_news_titles: [
//         "전기이륜차 업체들, 시장 선점 잰걸음... BSS 확충이 관건",
//         "“창립 63주년, 백년대계의 시작점”",
//         "전기공사업계, 노사갈등 해결 실마리 찾나",
//         "르포_“월성 맥스터 증설했지만 2037년 또 포화…특별법 제정 시급”",
//         '검출가능성 제로..."후쿠시마 오염수 감시 하나마나"',
//         "건설사 하도급 무엇이 문제인가?(상)공사하면 할수록 손해…협력업체 벼랑 끝",
//       ],
//     },
//     {
//       name: "엘르",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/354.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 15:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9080/153410_001.jpg",
//       main_news_title:
//         "진짜 여왕들이 나타났다. 퀸메이커의 두 배우 김희애와 문소리",
//       sub_news_titles: [
//         "투모로우바이투게더 범규와 태현은 오늘도 너무나 젊다",
//         "제니의 뉴 베스트 프렌드",
//         "한국형 팝 재즈 디바, 가수 현미가 85세를 일기로 세상을 떠났다",
//         "만개한 벚꽃! 본격 꽃놀이 시즌, 봄기운을 더해줄 송파-용산-성수 #신상맛집 3",
//         "낡을수록 좋아! 빈티지 레더 재킷의 매력",
//         "지속 가능한 니트 브랜드 '에이 뢰게 호베'",
//       ],
//     },
//     {
//       name: "독서신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/955.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.01. 19:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0401/article_img/new_main/9179/191943_001.jpeg",
//       main_news_title: "4월 1일, 20년 전 떠난 장국영을 기억하며",
//       sub_news_titles: [
//         "[카드뉴스] 가짜 뉴스? 이제는 알고 판별하자",
//         "『월간최신 취업에 강한 에듀윌 시사상식』 4월호, 알라딘 시사/상식 주간 베스트셀러 1위",
//         "[신간] 『땅거미 질 때 샌디에이고에서 로스앤젤레스로 운전하며 소형 디지털 녹음기에 구술한, 막연히 LA/운전 시들이라고 생각하는 작품들의 모음』",
//         "『김미경의 마흔 수업』, 10만부 판매 기념 특별 에디션 출시",
//         "[발행인 칼럼] 종교 자체는 문제가 아니다",
//         "﻿[리더의 독서] ‘시대의 어른’ 이어령을 만든 건 ‘어린아이 독서법’",
//       ],
//     },
//     {
//       name: "PC사랑",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/364.png",
//       category_id: "dmagtec",
//       edit_time: "2023.03.30. 17:46\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0330/article_img/new_main/9087/175027_001.jpg",
//       main_news_title: "2023 스마트오피스 기어 기획전",
//       sub_news_titles: [
//         "내게 맞는 외장 HDD는? 새 학기에 꼭 필요한 외장 HDD",
//         "2023년 3월호",
//         "벤큐, 프로 디자이너를 위한 모니터암 일체형 4K 모니터 PD2705UA, PD3205UA 출시",
//         "무보강 구조와 흑축의 조합은 어떨까? CHERRY MX Board 3.0S RGB 흑축 블랙 피씨디렉트",
//         "프리미엄 제품이 대세… 신학기 IT 기기용 예산에 평균 209만원 고려",
//         "앱코, 미니 스테레오 스피커 'SLP20' 출시",
//       ],
//     },
//     {
//       name: "코리아쉬핑가제트",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/967.png",
//       category_id: "dmagtec",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9192/162209_001.jpg",
//       main_news_title:
//         "‘한국형 카길’ 꿈꾸는 팬오션,  종합물류역량 확보 필요하다",
//       sub_news_titles: [
//         "선원임금 비과세 확대 법안 발의…올해 497만원까지 세제혜택",
//         "한국선급, 1년만에 KR-CON 신버전 출시",
//         "여수광양항만공사 노조, “경영본부장 낙하산인사 중단” 촉구",
//         "코나폰, 경주 복합문화공간 '플레이스씨' 개관",
//         "머스크, 중국-덴마크 노선 주3회 화물기 운항",
//         "대만 3대 해운사, 지난해 매출 50조·영업익 30조 돌파",
//       ],
//     },
//     {
//       name: "SBS연예뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/1228/nsd1681569.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9154/161845_001.jpg",
//       main_news_title:
//         "韓 솔로 첫 빌보드 1위...지민이 밝힌 'LIKE CRAZY' 비하인드",
//       sub_news_titles: [
//         '男 아이돌 동성 멤버 강제추행…온리원오브 측 "관련 無"',
//         "'팜유 왕자' 이장우, '펀펀투데이' 출연…조정식과 케미 기대",
//         "'미우새' 띠동갑 소개팅 상대, \"안쓰러움 느껴져\" 이상민 위로",
//         '"건강 검진 받으세요"...임영웅, 고령 팬들 위한 선한 영향력',
//         "'길복순', 끝내주는 전도연…\"클래스는 영원하다\"",
//         '이보영 "앞으로도 잘 버텨보려고요"',
//       ],
//     },
//     {
//       name: "스포츠춘추",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0116/nsd19454239.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9175/161845_001.jpg",
//       main_news_title:
//         "‘관중석’에서 만난 유희관 “‘좋아하는 야구팀은 못 바꾼다’는 말 아십니까” [춘추 인터뷰]",
//       sub_news_titles: [
//         "‘감독 데뷔전’ 승장된 승짱 “현역 때보다 좋습니다” [춘추 현장]",
//         "안토니 로페스 '리옹 승리 만세' [춘추 쇼츠]",
//         "‘유령 포크볼’이란 수식어가 괜히 붙은 게 아니야~ [춘추 쇼츠]",
//         "계약금 못 받은 ‘2차 6라운드’ 김진성…“아프니까 계약금 줄 수 없다” [춘추 탐사]",
//         "‘유령 포크볼’이란 수식어가 괜히 붙은 게 아니야~ [춘추 쇼츠]",
//         "롯데 서튼 감독이 꼽은 ‘2023 만능 열쇠? 고승민! [춘추 현장]",
//       ],
//     },
//     {
//       name: "티브이데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/440.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9119/161417_001.jpg",
//       main_news_title: "'과이불개' CJ ENM, 왜 끝까지 대중 기만하나 [이슈&톡]",
//       sub_news_titles: [
//         "갑질·선택적 다양성 존중, 까도 까도 악담뿐인 마블 [이슈&톡]",
//         "지민, 솔로로도 BTS급 파급력 [이슈&톡]",
//         "[단독] 유회승, 뮤지컬 '모차르트!' 주연 발탁",
//         "‘퀸메이커’ 김희애X문소리의 강렬한 만남",
//         "[TD포토+] 에스파 윈터 '수수한 공항패션'",
//         "[TD영상] '시간여행자' 김우석과 떠나는 시간여행('Dawn' 무대 최초공개)",
//       ],
//     },
//     {
//       name: "스포츠투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0328/nsd223244325.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9161/161845_001.jpg",
//       main_news_title:
//         "男아이돌 동성멤버 강제추행에 '발칵', 실명 추측 2차 피해 우려 [ST이슈]",
//       sub_news_titles: [
//         "김하성, 빅리그 첫 끝내기 홈런 '쾅'…시즌 1호포",
//         '"최초 또 최초" 방탄소년단 지민, 또 하나의 역사 [ST이슈]',
//         "'음주운전에…마약까지' 김새론·돈스파이크·신혜성, 법의 심판대로 [ST이슈]",
//         '"13년 작품 無" 원빈, 배우라 부를 수 있을까 [ST포커스]',
//         "'조작 논란' 안준영 PD, 출소 후 엠넷 복귀…'국민' 잃은 국민 프로듀서 [ST이슈]",
//         "김동은, 아름다운 머슬마니아",
//       ],
//     },
//     {
//       name: "조이뉴스24",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/947.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9170/161417_001.jpg",
//       main_news_title:
//         "임영웅 시축 소식에…상암 좌석 3만장↑ 판매 '암표까지 등장'",
//       sub_news_titles: [
//         "'밤안개' 현미 별세…66년 무대서 노래한 전설적 디바",
//         "[종합] 19금 '성+인물'·女생존·좀비·'솔로지옥3'…넷플릭스 新예능 출사표",
//         "'빌보드 1위' 지민 \"방탄소년단·아미라 가능한 결과, 더 성장할 것\"",
//         '함소원, "이혼 하겠다" 고백 …6시간 뒤 진화와 웃으며 라방',
//         "[리뷰] '오페라의 유령' 명불허전…'조팬텀' 만나러 부산원정 갑니다",
//         "씨엔블루 정용화, 5월 솔로 콘서트 개최…전방위 활약",
//       ],
//     },
//     {
//       name: "텐아시아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/312.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 08:36\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9051/084255_001.jpg",
//       main_news_title: "김승현家→문희준, 욕받이 만들기 혈안된 '걸환장'",
//       sub_news_titles: [
//         "CJ ENM, '조작PD' 안준영 재입사 시킨 이유",
//         "B.A.P 힘찬, 또 성범죄로 입건",
//         '윤기원 母, 돌싱맘과 재혼 상관 없어 "내 손자라 생각"',
//         '김원훈, ♥6살 연하 아내 최초 공개 "SNS 계정만 3개"',
//         "'9억 빚 청산' 백일섭 \"73살에 졸혼 선언\"",
//         '아이유, 콜 포비아 고백 "母·유인나랑 통화 힘들어"',
//       ],
//     },
//     {
//       name: "스포티비뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/1130/nsd10159718.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9200/161417_001.jpg",
//       main_news_title: "'번저강' 편견 깼다…번트에서 느껴진 강백호의 절치부심",
//       sub_news_titles: [
//         '김선신 아나, 불법운전 사과 "도로 위 안전 무지…미숙했다"[전문]',
//         "日 음악 거장 사카모토 류이치, 암투병 끝 별세…향년 71세",
//         "'벼랑끝 탈출' 도로공사, 챔프전 첫승 신고…박정아 24득점 폭발",
//         "받아쳐 봐…한화 홈 개막전 시구에 ‘더 글로리’ 정성일 배우",
//         "일본 국대, 이적설로 세계 일주...스페인 최강 2팀도 관심",
//         '대한장애인체육회, 안양문화예술재단과 업무협약…"APAP7 성공 개최 협력"',
//       ],
//     },
//     {
//       name: "게임동아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0211/nsd02321523.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 15:47\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9249/155154_001.jpg",
//       main_news_title:
//         "[LCK 미디어데이]  결승에 오른 T1 “최후의 상대는 KT가 될 것”",
//       sub_news_titles: [
//         "카카오게임즈 ‘우마무스메 프리티 더비’, 신규 육성 우마무스메 '파인모션' 추가",
//         "넵튠, 디지털 광고 에이전시 ‘리메이크디지털’ 인수",
//         "'오딘' 개발사 라이온하트, 서브컬쳐 신작 '프로젝트C' 원화 공개",
//         "위메이드 '나이트 크로우', 더클래스∙겟차∙워시존과 세차 이벤트 등 마련",
//         "드래곤플라이, 게임형 디지털 치료제 ‘가디언즈DTx’ 임상 나선다",
//         "유니티, ‘유니티 인더스트리’ 출시",
//       ],
//     },
//     {
//       name: "스포츠한국",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/962.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9187/161845_001.jpg",
//       main_news_title: "임영웅, FC서울 시축 소식에 매진행렬…암표까지 등장",
//       sub_news_titles: [
//         "' 첫 끝내기 홈런' 김하성, 얼음 세리머니에 당황 \"한국에서도 하는데…\"",
//         "축구는 결국 감독 놀음? [K리그 초점]",
//         "‘여기 클린스만호 아니었지’... 손흥민, ‘스텔리니 토트넘’서도 고립[초점]",
//         "현미, 향년 85세 나이로 별세…팬클럽 회장이 발견",
//         "‘무자비한 왕조’ 대한항공, 현대캐피탈 실낱 희망 ‘줬다 뺏었다’[V리그 챔프전 초점]",
//         "블랙핑크 지수, '꽃' 메이킹 필름 공개…이국적 영상미",
//       ],
//     },
//     {
//       name: "스포츠서울",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:24\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9032/162451_001.png",
//       main_news_title:
//         "[단독] 한상진, '이모' 현미 별세에 \"어제까지 정정하셨는데...\"",
//       sub_news_titles: [
//         "이효리가 왜 거기서 나와? 지역 축제에 등장",
//         "손담비♥이규혁 신혼집 공개...럭셔리 끝판왕",
//         "[단독] ‘대인배’ 손흥민, 김민재 사죄 입 열었다",
//         "'음주운전' 임성빈, ♥신다은 공개한 가족사진",
//         "이 얼굴이 49세? 엄태웅, 세월 역주행 근황",
//         '심형탁, 18세 연하 日예비신부 공개..."번역기로 대화"',
//       ],
//     },
//     {
//       name: "스포츠조선",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/076.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 15:17\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9033/152359_001.jpg",
//       main_news_title:
//         "“‘조선의 사랑꾼’ 제작진, 이용식 딸♥원혁 쎄하다고..” 이용식 속이 타들어가는 이유",
//       sub_news_titles: [
//         "“어제까지 건강했는데”…'대한민국 디바' 현미, 4일 별세→한상진·노사연 충격",
//         "[단독] 한상진, 이모 현미 별세 비보에 미국서 급 귀국",
//         "박원숙 “의문의 전화...아들 사고와 연관 있는 건 아닐까” 오열",
//         "“굿, 면제”…라비, 거짓 실신 연기로 병역비리 시도",
//         "“외모가 주는 힘, 막강하구나 느껴”…'통편집 논란' 13기 광수, 분량 적어서 아쉽다?",
//         "장항준, 윤종신에 이별 선언 “이제 사람구실 하련다, 말티즈 그만”",
//       ],
//     },
//     {
//       name: "엑스포츠뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/311.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 14:38\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9150/144217_001.jpg",
//       main_news_title:
//         "개막시리즈 치른 앤더슨·이의리, 데뷔전 앞둔 메디나…양현종은 '언제' 나갈까",
//       sub_news_titles: [
//         '​​함소원, "♥진화와 이혼할 것" 6시간 만에 돌연 번복…"사이는 안 좋아"',
//         "이건 몰랐네...김민재 바이아웃 UCL 따라 '1000억까지' UP",
//         "'이상화♥' 강남, 결혼 5년차 만에…\"부부관계 안 좋아질까 걱정\"",
//         "원로가수 현미, 오늘(4일) 별세…향년 85세",
//         "서울W? 히어로 스타디움!…'임영웅 시축', 서울-대구전 예매 '불티'",
//         '풍자 "친구 사망 후 심각한 탈모"…텅 빈 정수리 사진 공개',
//       ],
//     },
//     {
//       name: "OSEN",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 09:13\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9055/091912_001.jpg",
//       main_news_title: "'N번째 이혼해명' 함소원, 홍보용 미끼? 팬들은...",
//       sub_news_titles: [
//         "생방송중 욕설 정윤정, 뒤늦은 사과 후 영구 퇴출",
//         "'이도현♥' 임지연, 공개연애 후 첫 행보는 시사회",
//         '심형탁\'s 日예비신부 알고보니 "18살 연하"',
//         "하하♥별 막내딸, 희소병 투병 후 건강 회복",
//         "김선신 아나 \"목숨 내놓고\" '불법 운전' 논란 사과",
//         "윤계상 아내, 알고보니 연매출 '342억원' 재력가",
//       ],
//     },
//     {
//       name: "스포츠동아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/314.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 15:46\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9047/155154_001.jpg",
//       main_news_title:
//         "안정환 배신감에 치를 떨며 결별? “갈라서자는 거냐” (뭉뜬)",
//       sub_news_titles: [
//         "가수 현미 별세, 오늘 숨진 채 발견…안타까워",
//         "심형탁, 18세↓ 일본인 예비신부 공개…소통 난항 (조선의 사랑꾼)",
//         "법인 카드로 명품 구매+커피믹스 3400만원어치…상상초월",
//         "함소원, 이혼한다더니 라방에서 신났네…?",
//         "홍진영, ‘술 한잔 해요’ 녹음 현장…너무 달라진 비주얼",
//         "“예쁘다” 김종국-김승혜 핑크빛…엄마도 대찬성",
//       ],
//     },
//     {
//       name: "스포츠Q",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/802.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9221/161417_001.jpg",
//       main_news_title: "대한항공 통합 3연패, 한선수 '위대한 지휘' [프로배구]",
//       sub_news_titles: [
//         "박정아 부활, 승부처엔 역시 ‘클러치 박’",
//         "[JOB아먹기] 체육교사, 임용 초수 합격 공부법",
//         "'감독 데뷔' 이승엽, 목이 쉬었다",
//         "극장가 ‘봄농구’ 시즌, 예매율 상위 장악",
//         "지민 빌보드 '핫 100' 정상, K팝 솔로 최초",
//         "프로야구 중계, OTT·VOD 채널별 매력은?",
//       ],
//     },
//     {
//       name: "일간스포츠",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2023/0112/nsd92558162.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:06\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9034/161417_001.jpg",
//       main_news_title:
//         "[단독] 김흥국 “현미, 선후배 챙기는 의리있던 분” 안타까워  [인터뷰]",
//       sub_news_titles: [
//         "‘밤안개’ 현미, 별세...향년 85세 “떠날 때는 말없이” [종합]",
//         "'끝내기 홈런' 김하성, MLB닷컴 메인 장식…구단 SNS도 도배",
//         "‘승리와 3번 열애설’ 유혜원 “잘 지내나요” 근황 공개",
//         "임영웅 K리그 시축에 ‘암표’ 기승...2만원→40만원으로 둔갑",
//         "‘이대 나온 여자’ 노윤서, 졸업식 사진 인증..엄친딸 정석이네",
//         "아이유♥이종석, 아픔도 함께 나눈다..주목→전화 공포증 고백",
//       ],
//     },
//     {
//       name: "스포츠월드",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/396.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:12\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9120/161845_001.jpg",
//       main_news_title: "원로가수 현미, 4일 별세… 향년 85세",
//       sub_news_titles: [
//         "이도현, ♥임지연과 열애설 이후 첫 ‘친필’ 소감",
//         "수장의 기대 “최고 버전의 한동희가 돼라”",
//         "대한항공, 이제는 ‘왕조’ 맞습니다",
//         "함소원, 이혼 발표 6시간 만에 번복",
//         "‘날치기 사면’ 이영표·이동국 축구협회 부회장 사퇴",
//         "'욕설 쇼호스트' 정윤정, 결국 퇴출",
//       ],
//     },
//     {
//       name: "스포츠경향",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/144.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 15:17\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9106/152359_001.jpg",
//       main_news_title: "이혼 선언→번복···함소원에 또 낚였다?",
//       sub_news_titles: [
//         "축구협 사면과 닮은 ‘안준영 재입사’",
//         "‘임영웅 시축 효과’ 벌써 3만장",
//         "김하성, ML 데뷔 첫 굿바이포",
//         "[속보] 원로가수 현미 별세···향년 85세",
//         "‘맥심 모카골드’ 자발적 회수 조치, 왜?",
//         "이미주, 과감한 스카프패션",
//       ],
//     },
//     {
//       name: "뉴스엔",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/447.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 09:06\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9126/091110_001.jpg",
//       main_news_title:
//         "“자랑스럽고 행복” 방탄소년단 지민, 멤버들도 축하한 韓솔로 최초 빌보드 1위[종합]",
//       sub_news_titles: [
//         "함소원, 이혼 호소 몇 시간 만에 “♥진화 中에서 잘나가요” 남편 자랑 엔딩[종합]",
//         "“20대 보낸 인생친구” 솔라 문별, 10년차 마마무 유닛 부부케미 (드라이브)[어제TV]",
//         "1%대 후속작 ‘조선변호사’ 침체된 MBC 드라마 살릴까[TV보고서]",
//         "소향X프라임킹즈, 조합부터 이미 반칙‥해외 시상식 방불케한 무대(불후)[어제TV]",
//         "“목숨 내놓고 달려”…‘사이드미러 박살’ 김선신 아나, 결국 경찰 신고 당했다[종합]",
//         "블랙핑크 제니, ‘비련의 여주인공’ 처럼 [포토엔HD]",
//       ],
//     },
//     {
//       name: "마이데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/117.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:12\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9045/161845_001.jpg",
//       main_news_title: '"맥주18L 마셔"…이찬원,야구장서 폭주',
//       sub_news_titles: [
//         '"조용필, 후배들 찾아가 먼저 인사"…미담 공개',
//         '이승기 "음악 안돼도 내 식구 책임지는데 걱정X"',
//         '장근석 "팬=연인이라 생각…탈덕? 돌아올 것"',
//         "자택서 쓰러져…가수 현미 별세 '향년 85세'",
//         '아이유, 전화공포증 고백 "유인나와도 3분"',
//         '"어안이 벙벙" 지민, 빌보드 1위하자 새벽에…',
//       ],
//     },
//     {
//       name: "스포탈코리아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/139.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 13:30\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9056/133455_001.jpg",
//       main_news_title: "미모의 모델 화끈한 비키니로 글래머 과시",
//       sub_news_titles: [
//         "“바르셀로나, 日 카마다 관심... 이번 주 최종 결정",
//         "SON 감독 바뀌고 잘할 줄 알았는데...“여전히 주저하고, 볼 ...",
//         "‘EPL 100호골 다음에’ SON 향한 혹평, “기여한 부분 기...",
//         "‘승부 조작범 사면 추진 논란’ 이동국-이영...",
//         "‘생방 중 욕설’ 정윤정, 현대홈쇼핑 영구 ...",
//         "방실이, 18년째 뇌경색 투병…“시력 80% 잃...",
//       ],
//     },
//     {
//       name: "스타뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/108.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9136/162209_001.jpg",
//       main_news_title:
//         "단독 현미, 4일 별세..두 아들+한상진 급거 귀국→노사연 촬영中 [종합]",
//       sub_news_titles: [
//         '단독 츄 탬퍼링 진실공방? "접촉 안했다"vs"본질 흐트러졌다"[종합]',
//         "현미 별세, 별이 된 전설의 디바[★FOCUS]",
//         "뉴진스, 여름 컴백..6월 선공개곡→7월 새 앨범 발매",
//         '장근석 "데뷔 31년차..5년 공백기, 무서웠다" [인터뷰①]',
//         "'V4' 대한항공 3년 연속 통합 우승! 구단 최초 트레블 '대업'",
//         "방탄소년단, '놀토' 5년史 최다 출제 뮤지션 선정",
//       ],
//     },
//     {
//       name: "TV리포트",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/213.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 12:59\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9122/130209_001.jpg",
//       main_news_title:
//         '[단독] 츄, 템퍼링 위반 사항 없다…연매협 "이중계약 근거 없어"',
//       sub_news_titles: [
//         '[단독] "이달소 멤버 영입 안 한다"…바이포엠, 연매협 권고 수긍',
//         "함소원, 악플 퇴치하려다 '비판' 받아...\"이혼이 장난이냐\" [종합]",
//         "디카프리오, 또 모델과...\"'꽃'도 보내며 구애 중\" [할리웃통신]",
//         "넷플릭스 측 \"'피지컬100' 출연자 이슈 안타깝다...생기부·SNS 검증\" ('마실')",
//         "'법인 카로 명품 가방 구매한 '상상초월' 오피스 빌런",
//         "‘아사동’ 이선균 “子에게 거짓말하고 전혜진과 해외여행, 미안함에 울컥”[종합]",
//       ],
//     },
//     {
//       name: "MK스포츠",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/410.png",
//       category_id: "dsporent",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9132/161845_001.jpg",
//       main_news_title: "원로가수 현미, 4일(오늘) 별세…향년 85세",
//       sub_news_titles: [
//         "지민, 첫 솔로곡 ‘Like Crazy’로 빌보드 1위",
//         "김하성이 끝냈다...애리조나전 끝내기 홈런",
//         "이영표·이동국, 사면 파문에 KFA 부회장직 사퇴",
//         "한국인 최고 이적료 정상빈 MLS 데뷔",
//         "`욕설 논란` 정윤정, 현대홈쇼핑서 영구 퇴출",
//         '유연석 팬미팅 연기 "공연장 주변 화재 발생"',
//       ],
//     },
//     {
//       name: "코리아타임스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/040.png",
//       category_id: "deng",
//       edit_time: "2023.04.04. 16:15\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9043/162209_001.jpg",
//       main_news_title: "Dynamic harbor city Busan, where future, past meet",
//       sub_news_titles: [
//         "BIE delegation starts Expo inspection in Korea",
//         "Public-private 'One Team' strategy key to Busan's Expo campaign",
//         "Consumer prices rose at slowest pace in a year last month",
//         "Korean biz leaders pitch Expo bid for BIE mission",
//         "Police looking into possible mastermind behind abduction murder of woman",
//         "Securities firms reduce dividends amid earnings declines",
//       ],
//     },
//     {
//       name: "코리아헤럴드",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/044.png",
//       category_id: "deng",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9049/162451_001.jpg",
//       main_news_title:
//         "Yoon vetoes grain act revision, calls it 'populist bill'",
//       sub_news_titles: [
//         "Pyeongtaek teen arrested after wielding box cutter at elementary student",
//         "[The Korean Dilemma] Foreign domestic workers: Yay or nay?",
//         "Former K-pop boy band member charged with sexual assault of fellow member",
//         "Users can now decline KakaoTalk group chat invites from non-friends",
//         "[K-Food In Your Area] Binggrae taps into niche markets with K-snacks",
//         "[Herald Interview] Busan expo not just for tech, also for 'inclusive growth'",
//       ],
//     },
//     {
//       name: "중앙데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/330.png",
//       category_id: "deng",
//       edit_time: "2023.04.04. 15:50\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9061/155453_001.jpg",
//       main_news_title: "Yoon Suk Yeol vetoes controversial grain bill",
//       sub_news_titles: [
//         "Korea reports 4.2 percent inflation in March, a one-year low",
//         "Dongsuh Foods recalls coffee mixes due to possible silicon pieces",
//         "Yoon says “Busan is ready” at banquet for BIE delegation",
//         "Korea Inc. goes all out for cutting-edge expo",
//         "South Korea, U.S. and Japan begin naval drills to deter North's SLBMs",
//         "Jimin of BTS takes No. 1 on Billboard's Hot 100 with 'Like Crazy'",
//       ],
//     },
//     {
//       name: "이코노타임즈",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0615/nsd7251644.png",
//       category_id: "deng",
//       edit_time: "2023.03.28. 23:35\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9358/013348_001.jpg",
//       main_news_title:
//         "What central banks are doing to safeguard financial stability and why they must proceed with caution",
//       sub_news_titles: [
//         "Europe Roundup: Pound rises as BoE says no stress in UK banking system, European stocks extend recovery, Gold steadies, Oil extends gains on Kurdish supply risks, banking relief",
//         "Asiana Airlines launches task force to accelerate completion of Korean Air merger",
//         "Iraq parliament passes controversial election law amendments",
//         "What does 'secularism' mean in the Iran protests?",
//         "In Russia's war against Ukraine, one of the battlegrounds is language itself",
//         "For the first time, astronomers have linked a mysterious fast radio burst with gravitational waves",
//       ],
//     },
//     {
//       name: "YONHAPNEWS",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/946.png",
//       category_id: "deng",
//       edit_time: "2023.04.04. 16:06\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9169/161103_001.jpg",
//       main_news_title:
//         "Nuclear envoys of S. Korea, U.S., Japan to meet in Seo...",
//       sub_news_titles: [
//         "Yoon vetoes legislation requiring gov't purchase of surplus rice",
//         "BIE delegates visit Busan to inspect bid to host 2030 World Expo",
//         "尹锡悦对《粮谷管理法》修正案行使否决权",
//         "韩去年税收增加2700多亿 财政赤字却创新高",
//         "３月の消費者物価上昇率４．２％　１年ぶり低水準＝韓国",
//         "［韓流］ＢＴＳジミン　新曲がビルボード１位「誇らしく幸せ」＝メンバーも祝福",
//       ],
//     },
//     {
//       name: "KBS World",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/326.png",
//       category_id: "deng",
//       edit_time: "2023.03.24. 15:03\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0324/article_img/new_main/9057/151109_001.jpg",
//       main_news_title: "Yoon Pledges to Make N. Korea Pay for Provocations",
//       sub_news_titles: [
//         "N. Korea’s State Media Releases Details of Nuclear Attack Drills",
//         "Yoon Honors Fallen Service Members on West Sea Defense Day",
//         "北韩21日-23日实施核无人水下攻击艇水下爆炸试验",
//         "尹锡悦出席“西海守护日”纪念仪式",
//         "日本が輸出管理を緩和 韓国はWTOへの提訴取り下げ",
//         "企業の75％は柔軟な労働制度でも週60時間以下を想定",
//       ],
//     },
//     {
//       name: "넥스트데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/910.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9115/161845_001.jpg",
//       main_news_title:
//         "BTS 지민, K팝 솔로 가수 최초 빌보드 '핫 100' 1위 올라...강남스타일 한 풀었다",
//       sub_news_titles: [
//         "지난해 항공사 안전평가 에어부산 ‘최상위’, 대한항공 ‘평균미만’",
//         "틸론, 5일 ‘2023 DAVEIT DAY’ 개최",
//         "전세 세입자 정부 보호조치 대폭 강화...‘피해자 우선’",
//         "공항철도 타고 도보로 가능한 봄꽃 여행지…아라뱃길, 드림파크 야생화공원 등",
//         "“기업 지속가능성 성숙도와 지능형 자동화 활용도 비례”",
//         "LS전선, ‘차세대 2차전지’ 자회사 LS머트리얼즈 상장",
//       ],
//     },
//     {
//       name: "IT동아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/818.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 10:53\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9230/105933_001.jpg",
//       main_news_title: "인기 인공지능 서비스 연이어 중단, 업계 “자정할 것”",
//       sub_news_titles: [
//         "[뉴스줌인] 실속형 PC용 보급형 메인보드 칩셋, 'AMD A620' 이모저모",
//         "엑스박스 용량 확장 비용, 드디어 싸지나…씨게이트 독점 체제 끝날 듯",
//         "[뉴스줌인] 두나무, ‘크립토 겨울’에 실적 급감에 수익 다각화 모색",
//         "안전한 벚꽃 구경 위해 ‘서울 실시간 도시 데이터’ 살피기",
//         "“비싼 배달비·수수료, 배달앱 못 쓰겠다” 불만 터진 이용자들",
//         "매년 갱신하는 자동차 보험, 한 눈에 비교하려면 이렇게![이럴땐 이렇게!]",
//       ],
//     },
//     {
//       name: "디지털데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/138.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 13:08\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9102/131229_001.jpg",
//       main_news_title:
//         "[IRA명암]①배터리 투자, 美 믿고 올인? '정치적 불확실성' 남았다 [소부장박대리]",
//       sub_news_titles: [
//         "[취재수첩] 낭만 실종된 요즘 K-게임, 요즘 이용자",
//         "디아블로 이모탈, 업데이트 반응 ‘글쎄’…이용자 “숙제 많아졌네”",
//         "韓 반도체 '선택장애' 올라…中, 보란 듯 美 마이크론 저격 [소부장반차장]",
//         "[PLAY IT] 예약하면 누구나 무료 탑승…제주서 ‘자율주행차’ 타보니",
//         "[PLAY IT] 일상이 ‘브이로그’가 되다…소니 카메라 ‘ZV-1F’",
//         "'국제 유가' 악재로 혼조… 테슬라 6%↓ \"1분기 판매, 시장예상치 하회\" [美 증시 & IT]",
//       ],
//     },
//     {
//       name: "IT조선",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/917.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 15:11\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9142/151559_001.jpg",
//       main_news_title:
//         "결국 ‘GAA’로 가나… 삼성-TSMC ‘2나노 파운드리’ 세계 최초 타이틀전",
//       sub_news_titles: [
//         "간편결제에 카드 등록했더니 더블 할인… GS가맹점주 피해 떠안아",
//         "LG디스플레이, 1분기 영업손실 폭 '1조원대' 전망",
//         "유동성 우려 잠재우는 SK하이닉스, 2조원대 교환사채 발행",
//         "야놀자, 인터파크 인수 확정…공정위, 기업결합 승인",
//         "미국이냐 아니면 중국이냐…K반도체·배터리, 美 압박에 선택 기로",
//         "美 청소년 합성마약 중독 심각…국내 유입 막을 '범정부 대책' 시급",
//       ],
//     },
//     {
//       name: "AI타임스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/1112/nsd102040597.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9353/161417_001.jpg",
//       main_news_title: "슈퍼컴 필요없는 소형 언어모델 'sLLM' 급부상",
//       sub_news_titles: [
//         "메타, 로봇에 '눈'을 달다...로봇용 인공 시각 피질 개발",
//         "화상회의에 생성 AI 도입 러시...MS·구글 이어 줌·시스코에 스타트업까지",
//         "업스테이지, 챗봇 '아숙업'에 이미지 생성 기능 추가",
//         "소비자 70% “제품에 AI 활용한 경우 알려줘야”",
//         "ETRI, 무인기 통신 네트워크 국제표준 4건 제정",
//         "날개 단 '챗GPT'",
//       ],
//     },
//     {
//       name: "디지털타임스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/029.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 16:03\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9024/161103_001.jpg",
//       main_news_title: '정경심 측 "건강 심각하게 악화"…형집행정지 다시 신청',
//       sub_news_titles: [
//         '산불에도 근무시간 중 골프 연습 김진태 지사…"부적절"사과',
//         "‘백발’ 서훈 가석방에…이래진씨 눈물 “‘잊혀져 살겠다’더니 활개치고 다녀”",
//         "[속보] `밤안개` 현미 별세, 자택서 쓰러져 발견…향년 85세",
//         "손 ‘덜덜’ 떨었던 김의겸 일격? “한동훈은 ‘조선 제1의 혀’…그럴듯해 보여도 궤변”",
//         '전현희 "유례없는 정치 감사 철저히 수사해야"…감사원장 추가 고발',
//         "尹대통령, 양곡관리법에 거부권 행사…尹정부 1호",
//       ],
//     },
//     {
//       name: "헬로디디",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/977.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9203/161417_001.jpg",
//       main_news_title: "우주청 특별법 의결···연내 개청준비 본격화",
//       sub_news_titles: [
//         "전자종이 소재 원천기술 韓 유일 '엔스펙트라' 글로벌 공략 '完'",
//         "약물접합·표적단백질 R&D 강세, 바이오 벤처 IPO 전략은?",
//         "레고켐, ADC 첫 기술이전 中 임상 3상 개시···마일스톤 46억원",
//         "수젠텍, 여성호르몬 진단플랫폼 FDA 허가···美 시장 진출 본격",
//         "[조간브리핑]탈탄소로 가는 지름길, '바이오에탄올'",
//         "유기용매, 친환경·고효율로 분리한다",
//       ],
//     },
//     {
//       name: "디지털투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/953.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 16:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9177/160224_001.jpg",
//       main_news_title:
//         "'생성AI 모델 개발 진입 장벽 낮춘다' 오픈소스 진영 행보 탄력",
//       sub_news_titles: [
//         "아이폰 '언더 페이스 아이디' 출시 지연? 애플 루머 대거 유출",
//         "에어팟에 '터치 스크린' 생길까? 애플 특허 출원",
//         "NFT 스타트업 비트블루, 폴리곤과 협력",
//         "스노우플레이크, 5월 중 CSP 안정성 평가 완료...금융권 공략 확대",
//         "AI 기반 영상 생성·방송 플랫폼 ‘플루닛 스튜디오’, 정식 오픈",
//         "[단독] 과기정통부, 삼성전자에 5G 28㎓ 단말 출시 요청",
//       ],
//     },
//     {
//       name: "전자신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/030.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9026/162451_001.png",
//       main_news_title: "[단독] 삼성리서치 신사업TF, 슬립테크·NFT 키운다",
//       sub_news_titles: [
//         "갤Z 폴드5, 무게·두께 '다이어트'",
//         "포항공대 출신 인재들, 블록체인 업계 '종횡무진'",
//         "[ET시론]스타트업 강국 '이스라엘'의 교훈",
//         "[에듀플러스]신용태 SW중심대학협의회장 “산업현장에서 원하는 최고급 인재 양성할 것”",
//         '중졸도 고연봉 개발자 가능하다... 장병규 "성장형 개발자 육성 주력"',
//         "초단기 자유적금 경쟁...MZ세대 유입 각축전",
//       ],
//     },
//     {
//       name: "지디넷코리아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0905/nsd131925414.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 16:23\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9027/162451_001.png",
//       main_news_title: "첨단기밀 새나갈라...기업마다 챗GPT 단속 골머리",
//       sub_news_titles: [
//         "커지는 해외직구 시장…알리익스프레스, 메기 될까",
//         "'가짜 뉴스'에 꽂힌 정치권…선거철 포털 잔혹사 또",
//         "논란된 'OO페이' 수수료, 왜 받아야 하나",
//         "\"악플 말고 선플\"...착한 사장님 응원하고 '아이폰14' 받자",
//         "[타보고서] 위풍당당하고 힘 좋아...프리미엄 SUV '2023 투아렉'",
//         "수장 바뀐 라인게임즈, 경영효율화에 신작 준비 박차",
//       ],
//     },
//     {
//       name: "보안뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/952.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 12:02\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9176/121108_001.jpg",
//       main_news_title: "일본, 사이버 위협과 보안 리스크에 어떻게 대응하고 있나",
//       sub_news_titles: [
//         "최근 BEC 공격자들, 돈보다 물품을 노리는 쪽으로 방향을 틀고 있다",
//         "개인정보 유출 등 보안사고의 또 다른 주범 ‘내부자들’... 범인은 이 안에 있다",
//         "해외 직구족 위한 ‘쇼핑보안 가이드’... 신용카드 절대지켜!",
//         "[2023 디도스 대응 리포트] 디도스 융단폭격에 기업·기관 ‘휘청’",
//         "쉴 새 없이 터지는 개인정보 유출사고... 개인정보보호 전문강사 활용도 높여야",
//         "KISA, ‘2023 블록체인 밋업(Meetup) 콘퍼런스’ 5일 개최",
//       ],
//     },
//     {
//       name: "블로터",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/293.png",
//       category_id: "dit",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9054/162451_001.jpg",
//       main_news_title:
//         "어르신은 대출 안 하나…우리은행 '시니어플러스' 실효성 도마위",
//       sub_news_titles: [
//         "허울뿐인 저축은행판 메타버스…앞길 구만리",
//         "벌써 5대째…국내 전기 SUV 출시에 진심인 벤츠 [2023 서울모빌리티쇼]",
//         "구자열 무역협회장-존 오소프 美 조지아주 상원의원 협력 약속",
//         "산불 피해지역에 하나 6억·우리 5억·신한 3억원 지원",
//         "'카카오 T'앱에서 전기차 구매 상담한다(feat. GS 글로벌)",
//         "제네시스 1분기 국내 판매 부진…GV80 쿠페로 만회하나",
//       ],
//     },
//     {
//       name: "TV조선",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/902.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:11\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9105/161417_001.jpg",
//       main_news_title:
//         "尹, 양곡법에 '1호 거부권' 행사…\"전형적 포퓰리즘 법안\"",
//       sub_news_titles: [
//         "'강남 납치·살인' 수면제 출처 수사…성형외과 압수수색",
//         "'탄핵 심판' 이상민 측 \"파면당할 만큼 중대 위법 없어\"",
//         '전현희 권익위원장 "정치 감사 철저히 수사해야"',
//         "노동계, 내년 최저임금 1만 2천원 요구",
//         "정진상 측 \"검찰, 유동규 '번복 진술'만 선별해 제출\"",
//         "김포공항 '주차 빌런' 논란…이재명 비서실장 차로 드러나",
//       ],
//     },
//     {
//       name: "한국경제TV",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/215.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:03\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9014/160637_001.jpg",
//       main_news_title: "연 10%짜리 적금? 무턱대고 가입하면 '낭패'",
//       sub_news_titles: [
//         '노동계 "최저시급 1만2천원 달라"…24.7% 인상안',
//         "7일부터 주택 전매제한 완화…수도권 10년→3년",
//         "다자녀 부모 '연 8%' 적금…대출금리도 깎아준다",
//         '"2년 반 기다리라"던 국산차, 이젠 7개월이면 출고',
//         '"실리콘 섞였을 가능성" 맥심 모카골드 일부 회수',
//         '"OPEC+ 깜짝 감산은 원유 공매도 세력 제거 목적"',
//       ],
//     },
//     {
//       name: "EBS",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/0803/nsd20247547.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 13:50\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9076/135353_001.jpg",
//       main_news_title: "민주당, \"국민, 60% '정순신 사태' 대통령이...",
//       sub_news_titles: [
//         "학폭 목격자 10명 중 3명 '방관'…가해 이유 1위 \"장난·이유 없어\"",
//         "초등학교 학생 1인당 디지털 기기 0.33대…지역별 격차도 3배",
//         "\"법 위반 소지\"…서울시교육청, 기초학력 조례안 '재의'",
//         "서울시, '청년안심주택' 2030년까지 12만 가구 공급",
//         '고학수 개인정보위원장 "챗GPT에서 한국 이용자 정보 유출 확인 중"',
//         "BTS 지민, 美 빌보드 '핫 100' 1위…한국 솔로 아티스트로 처음",
//       ],
//     },
//     {
//       name: "MBC",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9011/160637_001.png",
//       main_news_title:
//         '양곡법 두고 윤 대통령 "재의 요구" 이재명 "민생 1호 법안"',
//       sub_news_titles: [
//         "'홍성 산불 사흘째' 강풍에 다시 확산‥총력 진화",
//         '탄핵소추 이상민 장관 측 "파면당할 만큼 중대한 위법 없어"',
//         "검찰, 10년 동안 지인 12명 불법촬영한 30대 남성 구속기소",
//         "원로가수 현미, 향년 85세 나이로 자택서 사망",
//         "[World Now] 도박 빚 대신 여친 동영상‥중국 탁구 스타의 몰락",
//         '산불 당일 술자리 논란 김영환‥"얼굴 빨간데요?" "햇볕 그을려서"',
//       ],
//     },
//     {
//       name: "YTN사이언스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/0922/nsd152336602.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:19\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9168/162209_001.jpg",
//       main_news_title: "이틀 새 산불 40여 건 발생...오늘 밤부터 전국 단비",
//       sub_news_titles: [
//         '잿더미 가득한 인왕산..."서울 산불로 역대 최대 규모"',
//         "동시 다발 산불, 헬기 부족 부른다...부품 수급도 문제",
//         "부러진 뼈에 바르면 재생!...치료되면 사라지는 바이오잉크",
//         '일본 해저 8천336ｍ서 심해어 포착..."가장 깊은 곳에서 발견돼"',
//         "[별소리 다 듣겠네] 우주의 탄생!… 빅뱅우주론VS정상우주론",
//         "[사이언스 취재파일] 영구 처분 미뤄왔던 사용후핵연료 포화 직전…고준위 방폐장 논의 시급",
//       ],
//     },
//     {
//       name: "채널에이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/903.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:01\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9108/160637_001.jpg",
//       main_news_title:
//         "[단독]지난해 쌀 보관료만 885억 원…與 “양곡관리법 아닌 ‘창고복지법’”",
//       sub_news_titles: [
//         "‘나랏빚’ 사상 첫 1000조 원 돌파…국민 1명당 2천만 원 빚졌다",
//         "[단독]청년부의장도 정책배틀로…與, ‘해커톤’ 방식 선출 추진",
//         "세금으로 스크린골프장 지으려던 서울동부구치소…법무부 지시로 중단",
//         "[뉴스를 보다]‘마약과의 전쟁’ 중…처벌은 왜 솜방망이?",
//         "‘미스터 션샤인’ 실존 인물 황기환 애국지사 9일 봉환",
//         "서울시, 청년임대주택 12만 가구 공급",
//       ],
//     },
//     {
//       name: "연합뉴스TV",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9109/161845_001.jpg",
//       main_news_title: "\"오늘 안으로 주불 진화\"…'등짐펌프' 메고 구슬땀",
//       sub_news_titles: [
//         '\'양곡법 거부권\'에 여야 충돌…"농업 악영향" "쌀값 정상화"',
//         "이상민 탄핵심판 시작…이태원 참사 책임 쟁점",
//         '권도형, 도피중 "美에 관할권 없다"…이번에도 같은 논리 펴나',
//         "범행전 수천만원 거래 '윗선' 추적…'청부 살인' 가능성",
//         "'밤안개' 부른 원로가수 현미, 향년 85세로 별세",
//         '트럼프, 내일 뉴욕 법원 출석…미국인 다수 "기소 정당"',
//       ],
//     },
//     {
//       name: "TBS",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/981.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:21\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9206/162209_001.jpg",
//       main_news_title: "앞당겨진 봄꽃 개화 시기, 기후 변화의 신호탄?",
//       sub_news_titles: [
//         "여의도 봄꽃축제 특별교통대책 추진…혼잡시 '여의나루역' 무정차 통과",
//         "불법주차만 200만 건…서울은 지금 '주차 전쟁' 중",
//         '"지금도 비싸"·"자취 포기각"…대학 등록금 인상만이 최선인가',
//         '"정문 앞에 야산이 턱" 진출입로 없는 아파트…대책은 더 속탄다? [여긴 왜!]',
//         "BTS 지민 K팝 솔로 최초 미국 빌보드 싱글 '핫 100' 1위",
//         '산림당국 "홍성 산불, 실화 가능성…의심되는 사람들 조사중"',
//       ],
//     },
//     {
//       name: "뉴시스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/003.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:17\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9078/161845_001.jpg",
//       main_news_title: "기습 감산에 배럴당 80弗 돌파 中리오프닝, 10..",
//       sub_news_titles: [
//         "홍성 산불 진화율 91%…3일만에 완진 눈앞",
//         '韓총리 "美 IRA·반도체법, 정상회담서 논의 가능"',
//         "4대강 보, 가뭄 극복 활용…기후 맞춰 탄력 수위",
//         "경찰, '강남 납치·살해' 주사기 관련 성형외과 압색",
//         "김하성, 마수걸이 홈런포…끝내기 승 견인",
//         "임영웅 효과에 K리그 티켓 인기…40만원 암표도",
//       ],
//     },
//     {
//       name: "YTN",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:19\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9015/162451_001.jpg",
//       main_news_title:
//         '[속보] 충남 홍성 산불 53시간 만에 주불 진화…"오후 4시 완진 선언"',
//       sub_news_titles: [
//         "하늘에서 2,400억 원이 내린다…오늘 내릴 봄비의 엄청난 가치",
//         '한덕수 "한일 회담으로 가장 큰 돌덩이 치워"',
//         '초등학생에 흉기 휘두른 고등학생…"갑자기 화 치밀어"',
//         "尹 \"양곡법, 포퓰리즘이자 강제매수법\"…'1호 거부권' 행사",
//         "'납치 살인' 피의자 착수금 받은 정황…배후 수사 중",
//         '식약처 "맥심 커피믹스 실리콘 혼입 가능성 커…원인 조사 중"',
//       ],
//     },
//     {
//       name: "JTBC",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9110/162209_001.jpg",
//       main_news_title: "산불 진화 총력전…저녁부터 전국 비 소식",
//       sub_news_titles: [
//         "현미, 항년 85세로 별세… 자택서 쓰러진 채 발견",
//         "손님 나가자마자 '펑'…스페인 빨래방 폭발 사고 왜",
//         "경찰, 강남 납치·살인사건 신상공개 여부 내일 결정",
//         "맥심 커피믹스 '실리콘' 섞였을 가능성…동서식품 회수",
//         '북 선전매체 "서해수호의 날 기념식, 역겨운 광대놀음"',
//         "트위터 로고가 시바견으로 교체?…머스크 기행에 도지코인 한때 '폭등'",
//       ],
//     },
//     {
//       name: "KBC광주방송",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/980.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:04\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9205/161103_001.jpg",
//       main_news_title: "윤 대통령, 양곡법 거부권 행사..여야 '살얼음판'",
//       sub_news_titles: [
//         '국힘 "거부권 행사 당연", 민주당 "농민 심장에 비수"',
//         "수도권 아파트 분양권 전매제한 최대 3년..비수도권 최대 1년",
//         "올 추석엔 SRT 타고 고향 간다.. 여수ㆍ순천, 포항 등 확대",
//         '日 국민 절반 이상 "후쿠시마 방류 국민 이해 못 얻어"',
//         "함평·순천 산불 이틀째 진화 총력..진화율 70~80%",
//         "'추월하려다..' 가로등과 부딪친 오토바이 운전자, '심정지'",
//       ],
//     },
//     {
//       name: "TJB대전방송",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2023/0103/nsd95227559.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 08:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9366/080200_001.jpg",
//       main_news_title: "(R) 홍성 산불 34시간째..중학교 코앞까지 다시 불",
//       sub_news_titles: [
//         "(R) '그을린 염소, 남은 건 옷 한 벌'..홍성 산불로 마을 쑥대밭",
//         '(R) 대전·금산 산불도 "오늘 밤이 최대 고비"',
//         "보령 산불 진화, 실화자 입건..당진 진화율 78%",
//         "'여신도 성폭행' JMS 고소한 홍콩 여성..비공개로 증인신문",
//         "대전 대덕구/ 8일 '대덕물빛축제' 불꽃쇼 취소, 드론쇼 예정대로",
//         "(R) 강한 바람에 꺼지던 불도 다시 확산세",
//       ],
//     },
//     {
//       name: "머니투데이방송",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0420/nsd105139164.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 11:16\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9112/112143_001.jpg",
//       main_news_title: "윤 대통령 '양곡관리법' 거부권…2016년 이후 처음",
//       sub_news_titles: [
//         "[단독][요지경 은행 신뢰]① 5년간 윤리 위반 218건",
//         "[이커머스 지각변동]①한 지붕 세가족…큐텐 '티메파크' 大통합",
//         "맥심 모카골드 이물혼입 가능성…동서식품, 자발적 회수 조치",
//         "\"채팅하면 고수익 보장\"…포인트 환전 사기 '기승'",
//         "SK하이닉스, '운영자금 조달' 목적...2조 교환사채 발행",
//         '"이젠 미룰 수 없는데.." 핵폐기물 처리 특별법 목소리 ↑',
//       ],
//     },
//     {
//       name: "KNN",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/906.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 10:13\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9135/102116_001.jpg",
//       main_news_title: "엑스포 실사단 공식 일정 첫 날... 강력한 유치 의지 확인",
//       sub_news_titles: [
//         "부산실사 D-1, 부산의 일정은?",
//         "정치자금법 위반 혐의 하영제 의원 영장기각",
//         '경남 창원  S-BRT 착공...박완수 "신중해야"',
//         "<취재수첩> 항타기 넘어질까 주민 우려",
//         "부산 해운대 누리마루APEC 하우스 지붕에 드론 추락",
//         "한국국제대, 전기요금 납부로 단전 사태 피해",
//       ],
//     },
//     {
//       name: "SBS",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/055.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:21\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9013/162209_001.jpg",
//       main_news_title:
//         "\"난감한 소식 죄송, 마음 많이 다쳐\"…'백종원' 이름 뺀다",
//       sub_news_titles: [
//         "창문 깨고서야 제압했다…서귀포 뒤집은 차량 난동 전말",
//         "퇴직 앞둔 금감원 직원, 하루 출근하고 1,214만 원 수령",
//         "원로가수 현미 자택서 쓰러진 채 발견, 별세…향년 85세",
//         '"남성 아이돌, 동성 멤버 강제추행으로 기소…팀 나갔다"',
//         "8자로 빙글빙글…중, 위성 아닌 풍선 쓴 이유 나왔다",
//         '컵라면 먹던 초등생에 칼부림한 고교생 "갑자기 화나서"',
//       ],
//     },
//     {
//       name: "OBS",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/340.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 15:25\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9070/152837_001.png",
//       main_news_title: '윤 대통령 "양곡법, 강제매수법"…1호 거부권 행사',
//       sub_news_titles: [
//         "강남 납치·살해 3인조 신상공개 여부 5일 결정",
//         "평택 아파트 단지서 초등생에 흉기 휘두른 10대 체포",
//         "인천시, '챗 GPT' 활용 기업 육성 위한 지원 추진",
//         '윤 대통령, 엑스포 실사단과 만찬…"부산 이즈 레디"',
//         "국민의힘 원내대표 출마…김학용 대 윤재옥",
//         "'이상민 탄핵' 첫 준비기일…이태원 참사 책임 쟁점",
//       ],
//     },
//     {
//       name: "SBS Biz",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/1229/nsd165811867.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9111/161845_001.jpg",
//       main_news_title: "'나 몰래 전입신고' 못 하게…전세 사기 막는다",
//       sub_news_titles: [
//         "신촌 대학생들, '이 상품권'으로 10% 싸게 밥 먹자",
//         "30분 줄 서도 못 타는 광역버스…이젠 좀 나아질까?",
//         "이제라도 둔촌주공 사겠다면…12월 노리세요",
//         '원희룡 "미분양 매입? 정부에 먹히지도 않을 얘기"',
//         "9월에 SRT 타고 여수 밤바다 구경 어떠세요?",
//         "식목일 전국에 '단비'…기온 '뚝'",
//       ],
//     },
//     {
//       name: "TBC",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/989.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 09:50\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9215/095437_001.jpg",
//       main_news_title: "전화-영주 박달산 산불 3단계..진화율 85%",
//       sub_news_titles: [
//         "대피 주민 경로당서 뜬 눈으로 밤 새워",
//         "서문시장에 구국운동기념관 세운다",
//         '"운전할 사람이 없어요"... 전세버스 대란 되풀이하나',
//         "대구시, 2단계 공공일자리 사업 참여자 모집",
//         "메타버스 산업 활성화 국제학술대회",
//         "고령군, '점심 휴무제' 첫 도입",
//       ],
//     },
//     {
//       name: "아리랑TV",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/934.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 15:13\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9146/152111_001.jpg",
//       main_news_title:
//         "S. Korea’s inflation growth slows in March to 4.2% y/y, smallest jump in 12 months",
//       sub_news_titles: [
//         "Fast-spreading forest fire in Hongseong for third straight day, rain forecast for afternoon",
//         'President Yoon tells BIE team "Busan is ready" to hold 2030 Expo',
//         "'Like Crazy' by BTS member Jimin tops Billboard Hot 100",
//         "World News: Trump heads to New York City to face arraignment",
//         "Nat'l Assembly questions gov't on politics, diplomacy, N. Korea, security issues",
//         "Oil prices surge after OPEC+ nations announce voluntary cuts in oil production",
//       ],
//     },
//     {
//       name: "KBS",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/056.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:24\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9044/162451_001.jpg",
//       main_news_title: "[속보] ‘산불 3단계’ 전남 순천·충남 홍성 산불 주불 진화",
//       sub_news_titles: [
//         "함평 산불 ‘3단계’ 발령…진화율 70%",
//         "한미일 북핵 수석대표, 7일 서울서 3자 협의…‘한일 협의’도 주목",
//         "달라진 ‘청년안심주택’, 청년 눈높이 맞출 수 있을까?",
//         "尹, 양곡법 개정안에 거부권…“포퓰리즘 법안”",
//         "3월 소비자 물가 4.2%↑…‘근원물가’는 여전히 높아",
//         "‘유진 초이’ 실존 인물 황기환 지사 유해 100년 만에 봉환",
//       ],
//     },
//     {
//       name: "MBN",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/057.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:24\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9012/162451_001.jpg",
//       main_news_title:
//         '정경심 전 교수 "건강 심각하게 악화"...형집행정지 재신청',
//       sub_news_titles: [
//         '이준석 "이양희 사의, 김재원 처리 피하려"',
//         '"윤석열 XXX야"…욕설한 안해욱 국회의원 후보',
//         '현미, 별세…"범죄·극단적 선택 발견되지 않아"',
//         '전우원 "해코지 당할까 매일 두렵다"',
//         '정명석 측 "특별한 관계 원한 것"...피해자 구토',
//         "“너 지금 스쳤냐?” 여중생 집단폭행한 여고생들",
//       ],
//     },
//     {
//       name: "뉴스1",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/421.png",
//       category_id: "dtvcom",
//       edit_time: "2023.04.04. 16:19\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9107/162209_001.jpg",
//       main_news_title: "'밤안개' 현미 별세…자택서 '말 없이' 떠났다",
//       sub_news_titles: [
//         '尹, 거부권 행사…"미래 위한 결단" "농심 짓밟아"',
//         "납치·살해 주범 '수면제 출처' 의혹 성형외과 압색",
//         "공무원·군인 줄 연금빚 1181조…국가부채 절반",
//         '[르포] "뻘건 불길에 살아야겄다, 몸만 뛰쳐나와"',
//         '[단독]이자연 "현미 엊저녁도 지인과 식사…가슴 아파" 눈물',
//         '백일섭, 20년간 MBC서 퇴출 "아들과 딸\' 덕 9억 빚 싹 청산"',
//       ],
//     },
//     {
//       name: "뉴스타파",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/930.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:21\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9144/162209_001.jpg",
//       main_news_title: '"공직자 재산공개제도, 확 뜯어고쳐야 시민 알권리 보장"',
//       sub_news_titles: [
//         '[대장동 X파일]박영수 차명지분 의혹...김만배 "천화동인·화천대유는 박영수 돈으로 설립"',
//         "글로벌 삼성의 위험한 공장⑤ 구멍난 '관리의 삼성'",
//         "공약(空約)에 그친 윤석열의 ‘공직자 재산 DB 일원화’ 공약",
//         "비트코인 첫 신고 공직자 나왔다... 그러나 '갈팡질팡' 안내에 재산 왜곡까지",
//         '"해운대구광역시"에 틀린 덧셈까지... 오류투성이 재산공개 시스템',
//         "일본 전역에 울려 퍼진 김복동의 외침 “일본 정부는 사죄하라”",
//       ],
//     },
//     {
//       name: "한겨레",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/028.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:16\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9009/161845_001.jpg",
//       main_news_title: "[영상] “장태산을 지켜라”…대전 산불 진화에 사흘째 온 힘",
//       sub_news_titles: [
//         "산불 비상인데 골프 연습한 김진태, “1시간 연가 썼다”더니",
//         "‘강남 납치’ 부른 코인, 상장 땐 뒷돈도…9883원→6.6원 추락",
//         "가수 현미 별세…“이가 확 빠질 때까지 노래” 열정만 남기고",
//         "이탈리아 당국 챗지피티 잠정 차단…독일 등도 ‘코드’ 만지작",
//         "“‘윤의 멘토’ 행세 말라” 경고한 ‘윤의 메신저’, 누구?",
//         "“청소년독서실, 구청 의무 아냐”…남는 건 비싼 스터디카페뿐",
//       ],
//     },
//     {
//       name: "위키리크스한국",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/801.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9218/161417_001.jpg",
//       main_news_title:
//         "韓美日 북핵 수석대표 7일 서울서 협의...“엄중한 한반도 정세 논의”",
//       sub_news_titles: [
//         "윤 대통령, '野 강행' 양곡법 거부권 행사…재의요구안 의결",
//         "오늘밤 전세계 美 트럼프 기소 절차 관심 집중, 공개될 범죄 혐의 파장 주시",
//         "[WikiLeaks]  Congressional effort to end Julian Assange Prosecution Underway",
//         '"마른 수건도 짜라"...직원 복지 축소하는 구글 등 빅테크들',
//         "'밤안개'의 가수 현미 별세...향년 85세",
//         "청와대-백악관 X파일(140) 김정일의 클린턴 방북 초청 vs 클린턴의 뉴욕 김정일 초청… 어긋난 기대, 불발된 북미정상회담",
//       ],
//     },
//     {
//       name: "EBN",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/120.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9143/160637_001.jpeg",
//       main_news_title: '"부산 is Ready"…재계, 부산 엑스포 유치 지원 총력',
//       sub_news_titles: [
//         'OPEC+ 기습 감산에 유가 급등…"다시 100달러 간다"',
//         "금융권, 산불 피해 지원…긴급대출·성금 전달",
//         "'곰표밀' 맥주는 사라져도…상표 마케팅은 계속",
//         "KT, 경영공백 장기화 불가피...박종욱 비상경영체제 가동",
//         "한화의 대우조선 인수 제동건 '공정위' 이유 있다",
//         "\"빚부터 갚자\"…5대 은행 가계대출 '역성장'",
//       ],
//     },
//     {
//       name: "한국일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/038.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9010/162209_001.jpg",
//       main_news_title:
//         "또 줄줄이 머리 깎는 여의도…  유권자 어필 노리지만 효과 '글쎄'",
//       sub_news_titles: [
//         '중국어로 "여기서 나가라!" 방송… 북한 식량난 소문 흉흉한 단둥',
//         '"아빠 속상해서 우셨는데" 빌보드 정상 오른 BTS 지민 속얘기',
//         '尹대통령, 양곡법에 "포퓰리즘" 거부권 행사... 민주당 반발',
//         '전우원 "가족들과 연락 끊겨…해코지 당할까봐 두렵다"',
//         "검찰, '화학적 거세 기각' 항소에…김근식도 1심 불복 항소",
//         "7일부터 주택 전매 제한 기간 완화... 수도권 10년→3년",
//       ],
//     },
//     {
//       name: "톱데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14491516.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9245/161417_001.png",
//       main_news_title: "적자늪 11번가, 직매입 착시효과 '노림수'",
//       sub_news_titles: [
//         "'켈리+테라' 하이트진로, 오비맥주 투트랙 넘을까",
//         "'구조조정 삭풍' 라인게임즈, CSO도 물러났다",
//         "황현순 키움증권 대표, 반토막 성적표에 '법카 단속' 나섰다",
//         "공정위, 한화·대우조선 기업결합 경쟁제한 우려…시정방안 제출 요청",
//         "곽재선號 KG모빌리티 방향성 '시장 다변화'",
//         "현대차그룹 임직원 출신 스타트업, '규제 혁신' 한 목소리",
//       ],
//     },
//     {
//       name: "조세일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/123.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:55\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9040/160224_001.jpg",
//       main_news_title:
//         "[단독] 금감원 늑장 안내에 은행 바젤은행감독위 보고 ‘혼란’",
//       sub_news_titles: [
//         "부가가치세 예정신고 대상 61만명…25일까지 납부",
//         "영상제작 세액공제, 음악·게임 등 '문화' 전반으로 확대 추진",
//         '한덕수 ‘한일회담으로 돌덩이 치워’… 민주 "尹 가장 큰 돌덩이”',
//         "코스피상장사 순이익 131조5148억원...전년比 17.3% 감소",
//         "아이진 15% '↑'... K바이오 수출 기대감에 관련주 강세",
//         "매출 27조7917억원에 법인세는 0원",
//       ],
//     },
//     {
//       name: "인더스트리뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0907/nsd9423633.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9222/161417_001.jpg",
//       main_news_title:
//         "해동엔지니어링, BIPV 모듈 컬러안료에 펄 첨가해 일반 모듈 대비 85% 발전효율 달성",
//       sub_news_titles: [
//         "로보티즈, 셀바스AI와 자율주행로봇 AI 고도화를 위한 협력",
//         "현대오토에버-HD현대 아비커스, 연 200만척 자율운항 레저보트 신시장 개척 나선다",
//         "태양광발전학회, “지속가능한 BIPV 산업 활성화 위해 표준화·경제성·기준마련에 집중해야”",
//         "산업부, 2023 신재생에너지 보급지원사업 착수… 2,447억원 투입",
//         "AMR, ‘춘추전국’ 시대 개막… “2024년까지 급성장, 국내·해외 동시 공략”",
//         "화웨이, 아크차단기능·자동차단 스위치로 안전성 확보…옵티마이저로 고효율 발전 구현",
//       ],
//     },
//     {
//       name: "CNB뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/954.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:00\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9178/161103_001.jpg",
//       main_news_title:
//         "[핫+CEO] 조현준 효성그룹 회장의 ‘경영자대상’ 수상 내막…“첫째도 둘째도 친환경”",
//       sub_news_titles: [
//         "[게임했手] ‘오딘’ 명성 잇나…카카오게임즈 ‘아키에이지 워’ 체험기",
//         "[부산엑스포-재계가 뛴다⑧] 삼성·LG·현대차, ‘하나 된 광장’에 기술력 집결",
//         "[연중기획-기업과 나눔(89)] ‘너·나·우리’…IBK기업은행의 ‘동행’ 이야기",
//         "[쿨韓정치] 전광훈의 힘? 국힘 내홍 '막전막후'",
//         "문재인, 당분간 모든 정치인 안 만난다…‘전언 정치’ 부담 때문?",
//         "[구병두의 세상읽기] 차라리 정치를 ‘블록체인 기술’에 맡기자",
//       ],
//     },
//     {
//       name: "조선비즈",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/366.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:17\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9088/161845_001.jpg",
//       main_news_title: "임영웅에 축구장도 '들썩'… 40만원 암표까지 등장했다",
//       sub_news_titles: [
//         "SVB 사태에 웃더니… 산유국 감산에 날벼락 맞은 투자자",
//         "'통신 3사' 아성 흔들… 올해만 22만명 갈아탄 가성비甲",
//         "남매간 배당 갈등 일단락된 '아워홈'… 구지은 4전 3승",
//         "기업 가치 10배 '쑥'… 신발 리셀로 유니콘 등극 '눈앞'",
//         '정진상 측 "검찰, 유동규 진술 중 유리한 부분만 제출"',
//         "속도 붙는 '中 노선' 정상화… 항공업계, 실적 개선 기대",
//       ],
//     },
//     {
//       name: "오마이뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/047.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9030/161845_001.jpg",
//       main_news_title:
//         "한덕수 '맨손' 분향에  반도체 추모사, 셀카 시도... 4.3 유족은 탄식만",
//       sub_news_titles: [
//         '"내가 살 돌집 지었을 뿐인데 운명이 바뀌었어요"',
//         '첫 거부권 행사 윤 대통령 "양곡관리법, 전형적인 포퓰리즘"',
//         "아들 대신 총살당한 어머니... '일출명소'에 숨겨진 비극",
//         "'4대강 보'로 가뭄 극복?  \"신기루 같은 얘기\"",
//         "윤석열 대통령님, 제발 아무 것도 하지 마세요",
//         '김재원 "4.3 추념식, 광복절보다는 조금 격 낮아"',
//       ],
//     },
//     {
//       name: "PD저널",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/972.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:32\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9199/153944_001.jpg",
//       main_news_title: "'프로듀스' 순위 조작 PD 재입사에 CJ ENM 공정성 도마",
//       sub_news_titles: [
//         "탄력받은 넷플릭스 예능, 오색 라인업 쟁쟁",
//         "의심이 교차하는 인터뷰 게임",
//         "스튜디오S, ‘최소 9개월 사전제작 기간 보장’ 가이드라인 시행",
//         "방심위, 업체 홍보 선 넘은 연합뉴스TV 보도에 '권고'",
//         "서울시에 혁신안 내는 TBS…주민조례안 서명운동 개시",
//         "'스즈메의 문단속', 동의할 수 없는 결말",
//       ],
//     },
//     {
//       name: "초이스경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/941.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:25\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9164/153132_001.jpg",
//       main_news_title: '함영주 "초저출산 극복지원 총력"',
//       sub_news_titles: [
//         "대만기업들이 동남아로 향하는 까닭은?",
//         "중국증시, 반도체 이슈 · 부양책 촉각 속 '장중 강세'",
//         '"DL이앤씨, 해외 플랜트 수주 늘어날 듯"...메리츠증권',
//         "중국 화웨이, 美제재 속 독자 연구개발로 위기돌파 승부수",
//         "하나금융그룹, 홍성·금산·대전 등 산불피해지역 '긴급 지원'",
//         "신한금융, '에너지에 진심인 신한금융그룹' 선언",
//       ],
//     },
//     {
//       name: "프라임경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/0730/nsd13728808.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:15\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9239/162209_001.jpg",
//       main_news_title: '한숨 돌린 K배터리…"불확실성은 여전"',
//       sub_news_titles: [
//         "[오늘의 장바구니] 아모레퍼시픽·시몬스·SSG닷컴 외",
//         "[이BIO] 동아에스티·대웅제약·경희의료원 외",
//         "[오늘 뭐 먹지] 롯데마트·드롭탑·삼양식품 외",
//         "중소형주 IPO '대박 흥행'…실종된 '대어' 돌아올까",
//         "OPEC+ 깜짝 감산 발표, 요동치는 유가 변동성",
//         "'주택시장 훈풍' 정비사업 활성화 기대감도 덩달아 증가",
//       ],
//     },
//     {
//       name: "연합인포맥스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/013.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9133/161845_001.jpg",
//       main_news_title: '추경호 "금융시장 24시간 모니터링…필요시 즉시 대응"',
//       sub_news_titles: [
//         "감사원의 거듭된 지적 무시한 금감원…유사직위 만들어 '방만경영'",
//         '尹대통령, 양곡법에 첫 거부권 행사…"포퓰리즘 법안"(종합)',
//         "호주달러-달러, RBA 동결결정에 낙폭 확대…0.6759달러(13:35)",
//         '"은행 위기, 끝났다는 생각은 오산…위험 초기 단계"',
//         "RBA, 기준금리 3.60%로 동결(상보)",
//         "국가결산 후 남은돈 5.8조…하반기 추경 재원으로 활용하나",
//       ],
//     },
//     {
//       name: "프레시안",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:01\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9031/160637_001.jpg",
//       main_news_title:
//         "'다음 소희'가 남긴 문자 메시지… \"아빠, 나 콜수 못채웠어\"",
//       sub_news_titles: [
//         "한국의 1년 장애인 예산, 독일 1개 도시에도 못 미친다",
//         "오늘부터 핀란드도 나토 회원국…러·나토 국경 '2배로'",
//         '與 원내대표 선거전…김학용 "수도권 바람몰이" vs 윤재옥 "꼼꼼한 협상력"',
//         "김재원 \"4.3은 3.1절·광복절보다 격 낮은 추모일…무조건 '대통령 불참' 공격 안돼\"",
//         "김영환 충북지사, 산불 진압 한창인데 '술자리 참석' 논란…\"할 말 많으나 따로…\"",
//         "국민의힘 \"전광훈, 민주당 '개딸'보다 영향력 적어…우리 당원도 아냐\"",
//       ],
//     },
//     {
//       name: "한국금융신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/968.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:17\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9193/162209_001.jpg",
//       main_news_title:
//         '곽재선, 정의선에게 "KG는 현대차와 달라, 낙숫물부터 줍겠다"',
//       sub_news_titles: [
//         "소액생계비 대출 1주일 만에 5499건 신청 몰렸다…누가 받았나 봤더니",
//         "입주 점검부터 하자보수까지, 내 손 안의 ‘아파트 관리 어플’ 경쟁",
//         "원희룡 장관 만난 현대차 출신 스타트업 대표....규제 개선 한뜻",
//         "재개발‧재건축현장, 신용높은 ‘마스터키’ 신탁방식 눈길",
//         "GS건설 ‘휘경자이 디센시아’ 특별공급 접수 종료…생애최초 신청 최다",
//         '이복현 금감원장 "시장 불안 계속되면 공매도 전면 재개 검토 어려워"',
//       ],
//     },
//     {
//       name: "여성경제신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1018/nsd132851977.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9364/161417_001.jpg",
//       main_news_title:
//         "美 '은빛 쓰나미' 속 사상 최대 고용 호황··초고령 시대 이런 일이",
//       sub_news_titles: [
//         "계획 철회한 여가부, 비동의 간음죄 사실상 백지화 ",
//         "물가 ‘산 넘어 산’‧‧‧‘원유 감산’ 빈살만發 인플레 우려",
//         "[최익준 더봄] 파란만장(波瀾萬丈)한 봄이 당신에게 전하는 소식",
//         "네이버 이어 문체부도 무작정 AI 만세!···설 곳 없어진 웹툰 저작권",
//         "[성기노 칼럼] 윤석열은 ‘서문시장 대통령’인가",
//         "600만 틱톡커 '듀자매'의 도전은 어디까지?",
//       ],
//     },
//     {
//       name: "위키트리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/539.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:21\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9157/162209_001.jpg",
//       main_news_title:
//         "오늘(4일) 별이 된 현미, 사망 하루 전 마지막 '목격담'…그저 눈물만 난다",
//       sub_news_titles: [
//         "갑작스러운 이모의 별세… '현미 조카' 노사연·한상진, 슬픔에 빠졌다",
//         "치가 떨린다...불륜 전문 변호사가 작정하고 공개한 충격적인 '불륜 장소'",
//         "인천의 한 군부대에서 지난 토요일에 기이한 병사 사망사건이 발생했다",
//         "[속보] 원로가수 현미 별세…향년 85세",
//         "이혼설 아닌 진짜 이혼…함소원♥진화, 갑작스러운 이별 발표 (전문)",
//         "“심려 끼쳐 드린 점…” 이동국, 결국 중대한 결정을 내렸다",
//       ],
//     },
//     {
//       name: "조선일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185255316.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:19\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9007/162209_001.jpg",
//       main_news_title: '부산 엑스포 실사단 뜨자 환호… 단장 "스타된 기분"',
//       sub_news_titles: [
//         '尹, 양곡법에 첫 거부권 행사…"전형적 포퓰리즘 법안"',
//         "車 3대 막은 '주차 빌런'은 민주당 천준호의원 수행차",
//         "원로가수 현미, 자택서 쓰러져 별세… 향년 85세",
//         "팬들 비난에 이영표·이동국… 결국 축협 부회장 사퇴",
//         '이준석 "尹 술잔 거절해 관계악화?…만취해 귀가했다"',
//         '이용 "신평, 멘토 내세우며 尹 훈계… 철새처럼 행동"',
//       ],
//     },
//     {
//       name: "쿠키뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0823/nsd105911492.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:25\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9155/153132_001.jpg",
//       main_news_title:
//         "尹대통령, 양곡법 재의요구권 의결…‘취임 1호’ 거부권 행사",
//       sub_news_titles: [
//         "‘밤안개’ 부른 원로 가수 현미 별세",
//         "“기습사면 논란 죄송”…이영표·이동국 축구협회 부회장직 사퇴",
//         "이태원 참사 유가족, 이상민 탄핵 심판 앞두고 파면 촉구",
//         "이달 7일부터 전매제한 완화…최장 3년",
//         "넷플릭스 “일반인 출연자 생기부 검증, 거짓말 시 책임 물어”",
//         "강남 납치·살인 4번째 공범 구속영장… 신상공개 5일 결정",
//       ],
//     },
//     {
//       name: "이로운넷",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/825.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9244/161417_001.jpg",
//       main_news_title: "'바이올린의 여제' 힐러리 한, 5년만의 내한 공연",
//       sub_news_titles: [
//         "[공동체이야기] 발아-성장을 거쳐 개화로 꽃피운 졸업 공동체 이야기",
//         "국회 환노위, 사회적경제기업 구매촉진과 판로지원을 위한 특별법 입안을 위한 공청회 개최",
//         "모두의 힘으로 만드는 새로운 길",
//         "사회적경제연대회의 '새(SE)로운 공동행동' 출범",
//         "죽음이 삶을 소비해서는 안된다...②김경환 한겨레두레협동조합 상임이사",
//         "팬데믹이 샌프란시스코 원예산업에 남긴 것들",
//       ],
//     },
//     {
//       name: "이투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/922.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:17\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9114/162209_001.jpg",
//       main_news_title: "유가·실물·물가 ‘트릴레마’ 덫에 걸린 글로벌 중앙은행",
//       sub_news_titles: [
//         "尹, 양곡법 ‘거부권’ 행사...국힘 “당연한 결단” vs 민주 “국민 뜻 무시”",
//         '[종합] 3월 물가 4.2% 상승, 1년 만에 최저…정부, "둔화 흐름이나 불확실성 여전"',
//         '7일부터 전매제한 완화…"수도권 10년→3년 단축"',
//         "대한민국 대표 디바 현미 별세… ‘밤안개’ 등 히트곡 남겨",
//         "이건 약과?…어김없이 격해진 K-디저트, 또 선 넘었다",
//         "“생리해도 괜찮아”…‘펨테크’ 시장이 뜬다",
//       ],
//     },
//     {
//       name: "에너지경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/963.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9188/161417_001.jpg",
//       main_news_title: "월세 전환·역전세 지속...銀 전세대출 6개월째 감소",
//       sub_news_titles: [
//         "K배터리, IRA 보조금 받지만...‘탈중국’은 숙제",
//         "OPEC+, 국제유가 좌지우지할 수 있는 이유는",
//         "[Q&A] 임대사업자 거주주택 비과세 두 번 못 받나요?",
//         '유가급등, 글로벌 금리인상으로 이어질까…"새로운 인플레 압력"',
//         "SK이노의 넷제로 여정… '카본 투 그린' 본격 시행",
//         "매매 시장에 몰린 MZ세대…분위기 반전 시킬까",
//       ],
//     },
//     {
//       name: "CEO스코어데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/932.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 11:33\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9152/114057_001.jpg",
//       main_news_title:
//         "‘CEO 공백’ KT, 계열사 경영 정상화 속도…“대표 임기 3년→1년 단축”",
//       sub_news_titles: [
//         "당국, 인터넷은행 ‘메기’ 역할 또 강조…카뱅·토뱅 자산 성장 주춤하나",
//         "[CEO워치] 이건준 BGF리테일 사장, 올해 CU 상품력 강화‧O4O 사업 주력",
//         "금융지주사 5억 이상 보수 22명…김정태 전 하나금융 회장, 48억 수령",
//         "“실손 심사강화로 비급여 지급 줄여놓고…”, 일부 손보사 보험료는 최대 15% 인상",
//         "보수총액 ‘톱100’ 고액 연봉자 중 SK 기업인 11명 ‘최다’…삼성은 6명",
//         "‘군웅할거’ 카드사 차 할부시장…신한·국민카드 2파전, 하나카드 200%대 급성장",
//       ],
//     },
//     {
//       name: "파이낸셜뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:14\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9021/162209_001.jpg",
//       main_news_title:
//         '"정치하려는 것 아닌가?" 물음에 전두환 손자 "신앙심이 강해서..."',
//       sub_news_titles: [
//         '5억짜리 SUV 신발 털고 탄 여배우 "계약하러..." 시승기',
//         "가수 현미 별세, 자택서 팬클럽 회장이 발견",
//         "재혼 맞선 여성이 노브라로 나와.. 황당한 경험들",
//         "욕실서 코 세게 풀다 하반신 마비된 사연... 왜?",
//         "1년 만에 연봉 6100만→1억2300만원 뛴 직장 화제",
//         '8천원 예비군 도시락 "누가 중간에 해 먹은.." 의심',
//       ],
//     },
//     {
//       name: "BBS NEWS",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/974.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:49\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9198/155453_001.jpg",
//       main_news_title:
//         "홍성·함평 산불, 당국 진화작업...현장 인근 사찰, 문화재 보호 총력",
//       sub_news_titles: [
//         "7일부터 주택 전매행위 제한 기간 단축",
//         "[한-인도 50주년] 정관스님 “사찰음식은 열반의 음식”",
//         '이수진 "자연공원법 개정안, 국회 본회의 통과...정부 지원 법적 근거 마련"',
//         "지난해 나라살림 117조원 적자",
//         "‘정치자금법 위반’ 하영제 영장 기각...체포동의안 가결 무색",
//         "[속보] 尹, 양곡법 거부권 행사…재의요구안 의결",
//       ],
//     },
//     {
//       name: "아주경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/921.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9124/161845_001.jpg",
//       main_news_title: "尹, 취임 첫 거부권...'양곡관리법 재의요구'",
//       sub_news_titles: [
//         "작년 국가부채 2326조 '역대 최대'",
//         "'밤안개'처럼 떠나간 가수 故 현미",
//         "방탄 지민 솔로곡, 美 빌보드 1위...K팝 최초",
//         "[인터넷전문은행 출범 5년] 인뱅 총자산 11배 뛸 때 연체율도 '껑충'",
//         "'실리콘 이물질' 맥심 모카골드 회수 조치",
//         "​[배인선의 중국보고] 구멍 뚫린 전투기에서 매화로...화웨이 '정상궤도' 선언",
//       ],
//     },
//     {
//       name: "일요신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/925.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 09:48\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9131/095437_001.jpg",
//       main_news_title:
//         "[이차전지 산업의 명암②] 뻥 뚫린 고속도로에 너도나도 진입 중",
//       sub_news_titles: [
//         "위믹스에 출렁이는 위메이드…'장현국 마법' 이번에도 통할까",
//         "'판사까지 언급' 영장 연속 기각 신현성 가족관계 얼마나 대단하기에…",
//         '한덕수 "한일정상회담서 돌덩이 치워"…민주당 "비유 실망"',
//         "현대홈쇼핑, 욕설 논란 정윤정 쇼호스트 퇴출 결정",
//         "기아, 3월 27.8만대 판매…전년 대비 10.9% 증가",
//         '"민생 때문" vs "윤석열 정부 민낯"…제주 4·3 추념식 여야 공방',
//       ],
//     },
//     {
//       name: "일요시사",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/971.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9194/161417_001.jpg",
//       main_news_title:
//         "보배 인피니티 사건 아이 엄마 “얼마 안 되지만…” 기부 화제",
//       sub_news_titles: [
//         "<속보> 가수 현미 별세…향년 85세",
//         "<단독> JMS, 언론 대응 시나리오···재판 반전 노리나?",
//         "재탕·삼탕 물타기…다시 나오는 한동훈 출마론, 왜?",
//         "<요지경 세태> ‘성 중립’ 화장실을 아십니까?",
//         "이태원 희생·생존자 금융조회 단독 보도 이후…",
//         "대통령 지키려다…밑천 드러나는 당정 일체의 한계",
//       ],
//     },
//     {
//       name: "정책브리핑",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1116/nsd113848865.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:12\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9367/161845_001.jpg",
//       main_news_title:
//         "윤 대통령 “2030 부산 세계박람회 유치 활동, 진심 다해 펼쳐나가고 있어”",
//       sub_news_titles: [
//         "2027년까지 의료기기 수출 2배 달성 …“수출 세계 5위로”",
//         "‘우주항공청 특별법’ 국무회의 의결… 올해안에 개청 추진",
//         "“특판예적금 가입 때 우대금리 조건 꼼꼼히 확인하세요”",
//         "‘시그널’을 고화질로…문체부, 화질개선 등 OTT 후반작업 지원",
//         "5년간 원전 중소기업에 6750억원 투입…강소기업 150개 육성",
//         "노동개혁과제 총괄·노동개혁 추진하는 ‘노동개혁정책관’ 신설",
//       ],
//     },
//     {
//       name: "M이코노미뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9184/161417_001.jpg",
//       main_news_title:
//         "동물보호단체, 롯데 아쿠아리움 앞에서 ‘흰돌고래’ 방류 촉구",
//       sub_news_titles: [
//         "종말의 묵시록에서 찾은 희망의 청사진",
//         "민주당, 대통령실 앞에서 ‘양곡관리법 개정안 거부’ 규탄",
//         "지리산 지방정부의 '탄소중립 흙 선포식'...\"흙이 살아야 나라가 산다\"",
//         "“아픈 가족 돌보느라 미래 희생하는 '영케어러' 더 이상 없어야\"",
//         "인구감소지역에 ‘지역소멸 우려 읍·면·동을 관할로 두는 시·군·구’ 추가...개정 추진",
//         "활짝 핀 여의도 벚꽃길",
//       ],
//     },
//     {
//       name: "헤럴드경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9023/162451_001.jpg",
//       main_news_title:
//         "10만 미분양 경고에도 이어지는 완판행렬…전매제한도 풀린다 [부동산360]",
//       sub_news_titles: [
//         "尹대통령 “국회 통과 유감” 양곡법 거부권…‘밀리면 안된다’ 위기감",
//         "하영제 영장 기각… 조응천 “이재명도 판사 납득시키길”",
//         '은행 예금서 10조원 탈출 러시…"은행도 불안하다?"[머니뭐니]',
//         "[르포] 현대차가 만든 패션전시회…컬렉션이 된 안전띠・와이퍼 ‘상상을 현실로’",
//         "아이오닉6 출고 18→2개월 ‘뚝’…하이브리드만 오래 걸리는 이유? [여車저車]",
//         "집 없는 무주택 설움 그만 …생애 첫 아파트 매수 급반등 [부동산360]",
//       ],
//     },
//     {
//       name: "이데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/018.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:13\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9020/161845_001.jpg",
//       main_news_title:
//         "노동계, 내년 최저임금 1만2000원 요구..월급 환산 시 250만원↑",
//       sub_news_titles: [
//         "‘이대로만 나와라’..대박친 KG 모빌리티 디자인",
//         "[속보]'강남 납치·살해' 주범 아내 근무 성형외과 압색",
//         "'故 현미 조카' 한상진, 미국서 급히 귀국",
//         '전우원 "자본력 센 가족들 상대, 해코지 매일 두렵다"',
//         "'억대 연봉' 정윤정 이어 유난희도 퇴출?",
//         "식욕억제제 과다복용 환각..차량 6대 들이받은 20대",
//       ],
//     },
//     {
//       name: "매일노동뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/969.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 07:40\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9183/074329_001.jpg",
//       main_news_title:
//         "[나도 ‘선생님’입니다 ③] 교육공무직, 대화·정책참여 공간이 사라진다",
//       sub_news_titles: [
//         "한국노총 “5월1일 대정부 투쟁 포문 연다”",
//         "[근로시간 기록 우수사업장이라더니] ‘와디즈’ 임신 중 노동자에게 초과근로",
//         "경총 “연차 써서 내수 살리자” 회원사 권고",
//         "[살아 남은 업무개시명령 제도] ‘윤 정부 추천’ 인권위 상임위원이 애써 ‘외면’한 것들",
//         "윤석열표 연금개편, 민간보험 확대 연막?",
//         "[김현준 한국산업은행지부 위원장] “이전 반대가 이기주의? 이전 주장은 정치적 욕망”",
//       ],
//     },
//     {
//       name: "서울신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:13\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9005/162209_001.jpg",
//       main_news_title: "尹 “양곡법, 전형적 포퓰리즘 법안”…‘1호 거부권’ 행사",
//       sub_news_titles: [
//         "노동계 최저임금 1만 2000원 요구…24.7% 인상안",
//         "금감원, 면직 직원들에게 수당…‘유령 직위’ 운영도 적발",
//         "[단독] 경북 의성군 인구 ‘날개 없는 추락’…5만명 선 붕괴",
//         "“걸리면…” 고양이 빨래에 분노한 코인세탁소 주인",
//         "“착해서 결혼한 남편, 4년째 백수”…아내는 대기업",
//         "송아지 습격한 들개떼… 들개 슬기롭게 대처하는 법",
//       ],
//     },
//     {
//       name: "대한경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1115/nsd153942530.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9185/161417_001.jpg",
//       main_news_title:
//         "작년 관리재정 수지 적자 117조원 ‘역대 최대’…무색해진 건전재정",
//       sub_news_titles: [
//         "'삼전' 없으면 실적 쇼크급…지난해 코스피 상장사 순익 36% 이상 ↓",
//         "2분기에도 ‘대어급’ 빠진 중소형 IPO 이어진다",
//         'KG모빌리티 "2030년까지 레벨4 자율주행 확보"',
//         "롯데ㆍ이마트, 더 강력해진 ‘가격파괴’ 실험",
//         '커지는 한화-공정위 갈등…"대우조선 인수 차질 우려"',
//         "김학용·윤재옥 與원내대표 출마 선언",
//       ],
//     },
//     {
//       name: "매일경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/009.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:24\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9016/162451_001.jpg",
//       main_news_title: "\"성장세 가파르다\"…ETF 순자산 올해에만 11조 '쑥'",
//       sub_news_titles: [
//         '"임대료 낮춘다" 서울청년주택 2030년까지 12만가구 공급',
//         '野 "檢, 李채널서 보낸 문자를 사적대화 증거로 제시"',
//         "'소득공제 40% 혜택'에도 청년에게 외면받는 이 펀드",
//         '"자고나면 시총 순위 바뀌네"…불붙은 코스닥 시장',
//         "“민주주의 아버지 ‘전두환’ 할머니 말 의외” 전우원 고백",
//         "年 10% 특판 적금 가입했다고 좋아했는데, 알고 보니",
//       ],
//     },
//     {
//       name: "데이터뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/804.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 14:45\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9220/145154_001.png",
//       main_news_title: "대기업 유통사, 사외이사 10명 중 6명이 관료 출신",
//       sub_news_titles: [
//         "여성 은행원 연봉 톱, KB금융…2020년 1억 돌파이후 업계 1위 지속",
//         "SK바이오사이언스, 실적 반토막 났지만…연구개발비 1000억 돌파",
//         "폴라리스오피스, 코로나19 타고 만년 적자 벗어났다",
//         "삼성디스플레이, 최주선 대표 체제 이후 실적지표 매년 새로 썼다",
//         "김택진 엔씨소프트 대표, 넘사벽 연봉…2022년 123억8000만 원",
//         "네오위즈, 멈춤없는 M&A…인디게임 진용 갖춰",
//       ],
//     },
//     {
//       name: "메트로신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/961.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9186/162209_001.jpg",
//       main_news_title:
//         "제네시스, 4인승 GV80 쿠페 콘셉트 공개…'우아함·스포티함' 독특한 조화",
//       sub_news_titles: [
//         "가수 현미, 별세 '향년 85세'…자택서 쓰러진 채 발견",
//         "주담대 금리 연 3%대 하락?…영끌족 체감 못해",
//         "드디어 단톡방 초대 거절 기능…근데 부장 단톡방은 거절 못한다고?",
//         "연간 투자금 확보 완료한 SK하이닉스…적자 넘어 '업턴' 대비",
//         "인터넷은행 연체율 급등…중금리대출 목표 가능할까",
//         "'천원의 아침' 확대에 포퓰리즘 지적...대학생들은 \"여전히 부족해\"",
//       ],
//     },
//     {
//       name: "소비자가만드는신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/970.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 07:30\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9196/073516_001.jpg",
//       main_news_title:
//         "휴대폰 해지 누락돼 1년간 100만원 빠져나가...책임소재 갈등",
//       sub_news_titles: [
//         "생보사 신계약유지율 삼성생명 90% '톱' 교보라이프 2위",
//         "‘미니 이지스함’ 수주전 후끈....대우조선해양 행보 주목",
//         "SK쉴더스, 합병 후 2년간 R&D 투자 급증...ICT 첨단 섹터로 진화",
//         "10대 건설사 직원 연봉 1위 삼성물산·2위 SK에코플랜트",
//         "바디프랜드, 실적 부진에도 연구개발비 역대 최대...특허도 급증",
//         "미래에셋증권, 글로벌IB로 성큼성큼...해외법인 실적 '훨훨'",
//       ],
//     },
//     {
//       name: "데일리임팩트",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0819/nsd151219656.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9234/161417_001.jpg",
//       main_news_title: "\"갈등은 없다\"…금융당국에 '보폭 맞추는' 임종룡 회장",
//       sub_news_titles: [
//         "완성차 3월 판매량 70만대 돌파…성장세 돋보여",
//         "[세상 돌아보기]우리 삼국시대가 숨 쉬는 일본 키토라고분",
//         "[세상 돌아보기] 티끌이 치킨값 되는 앱테크의 기적",
//         "[배종찬의 빅데이터] 블랙핑크가 한미 외교 최대 변수인가?",
//         '"1·2인 가구 안성맞춤" 삼성전자 세탁기·건조기 신제품 출시',
//         '"종이 26만장 줄인다" LGU+, 온라인 배당 조회 도입',
//       ],
//     },
//     {
//       name: "뉴스클레임",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1006/nsd205818702.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9359/161417_001.jpg",
//       main_news_title: "물가 4%대로 낮아졌지만 여전히 ‘비상’인 이유",
//       sub_news_titles: [
//         "[잡채기 칼럼] 목 타는 붕어의 ‘한 방울 물’",
//         "대통령 양곡관리법 거부권 행사… 정국 더욱 경색",
//         "건강기능식품, 효능과 부작용 모르고 복용",
//         "돌아오겠다는 황영웅, 달갑지 않은 행복회로[영상]",
//         "실내외 마스크 해제… 마스크를 벗은 내 모습 가꾸기",
//         "대안학교 입시에서까지 장애인 차별[영상]",
//       ],
//     },
//     {
//       name: "비즈워치",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2023/0213/nsd17943530.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:04\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9167/151252_001.jpeg",
//       main_news_title: "[알쓸부잡]내 아파트인데 입주 못하는 이유",
//       sub_news_titles: [
//         "[인사이드 스토리]특례제도 '허점' 속 길 잃은 K바이오",
//         "[K방산 파워분석]③'핵심' R&D 비용, 회계 처리는 달랐다",
//         "9월부터 SRT 타고 여수 밤바다 보러 간다…진주·포항도",
//         "'청사진' 내놓은 KG모빌리티…투자규모는 \"글쎄\"",
//         "'4억 육박' 마세라티 스포츠카…국내 딱 5대 판매",
//         "[알쓸부잡] 펜트하우스가 고급주택이 아닌 이유",
//       ],
//     },
//     {
//       name: "더팩트",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/536.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9156/161845_001.jpg",
//       main_news_title:
//         "尹대통령, '양곡관리법'에 첫 거부권 행사…\"전형적 포퓰리즘 법안\"",
//       sub_news_titles: [
//         "[TF기획·목장갑 인생⑥] 사고 나야 움직이는 정부…사망도 벌금형인 법원",
//         "윤 대통령, '친일외교 논란' 대처 MB처럼?",
//         "제이홉·지민→뉴진스 20팀…'TMA 베스트 뮤직–봄' 사전 투표",
//         "[속보] 원로가수 현미 별세…향년 85세",
//         "아워홈 오너일가 배당금 격돌…구지은 부회장 완승",
//         "\"'존 윅4' 시리즈 중 최고\"…속편 제작설 '솔솔'",
//       ],
//     },
//     {
//       name: "서울와이어",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/1024/nsd174430433.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9360/161417_001.jpg",
//       main_news_title: "5대그룹 총수들 부산엑스포 유치에 '영끌'… 빈살만 넘을까",
//       sub_news_titles: [
//         "전국 건설현장 60% 이상 멈췄다… '시멘트 대란' 결국 폭발",
//         "코인 욕망이 부른 강남 납치살인 '윗선 있다'… 누가 배후?",
//         "아워홈 삼남매 배당금 둔 '진흙탕 싸움'… 막내 구지은 부회장 '완승'",
//         "현대오일뱅크 프리미엄 경유 '울트라 디젤'… 가격대는?",
//         '정명석 "나는 사람이다" 혐의 부인… 고소인은 신문과정서 구토',
//         "소비자물가 1년 만에 최저… 체감물가 여전히 높아",
//       ],
//     },
//     {
//       name: "세계일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/022.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:12\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9006/161845_001.jpg",
//       main_news_title: "‘강남 살인’ 원인 퓨리에버코인, 작전 세력 먹잇감이었나",
//       sub_news_titles: [
//         '尹 "양곡관리법은 포퓰리즘 법안"…첫 거부권 행사',
//         '이상민측 "파면당할 만큼 중대 위법 없어"',
//         "산불에도 골프 연습·술자리 참석… 도지사들 '논란'",
//         "원로가수 현미 별세… 자택서 쓰러진 채 발견",
//         "“이런 X밥이”… 인천 서구의회, 만취 욕설 진실공방",
//         "ADB, 韓 경제성장률 1.5% 전망… 동아시아 국가 중 최하위",
//       ],
//     },
//     {
//       name: "신아일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0316/nsd103953129.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9225/161417_001.jpg",
//       main_news_title: "尹, 양곡관리법 거부권 행사…박근혜 이후 7년만",
//       sub_news_titles: [
//         "지난해 재정적자 117조…국가부채 2326조 '사상 최대'",
//         "경기침체에 기업도 허리띠 졸라맨다…2월 법카 사용 급감",
//         "여야, '대출이자 부담 경감' 등 민생·개혁법안 4월 우선 처리",
//         "[4월 달라진 것] 중소기업 기술보호 강화…신고 쉬워진다",
//         "화물 실은 트럭 그대로 한-중 운송…6개월 시범사업",
//         "이재명, '기본금융' 도입...\"모든 국민, 금융 혜택 누려야\"",
//       ],
//     },
//     {
//       name: "시사위크",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/957.png",
//       category_id: "daei",
//       edit_time: "2023.04.03. 19:26\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0403/article_img/new_main/9180/193133_001.jpg",
//       main_news_title: "윤석열 대통령, 집토끼 지키기 위한 행보?",
//       sub_news_titles: [
//         "한세엠케이가  지켜야 할 ‘공시의 무게’",
//         "[윤석열 지지율] 3주 연속 하락세 멈추고 소폭 상승",
//         "순익 줄고 연체율↑… OK저축, 올해 개선세 보일까",
//         "3년 만에 흑자전환 배민… 올해 더 주목되는 이유",
//         "민주당, 4‧3 추념식에 대통령-김기현 불참 ‘맹폭’",
//         "민주당과 국민의힘 지지율 격차 10.0%P",
//       ],
//     },
//     {
//       name: "비즈니스포스트",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/942.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:45\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9166/155154_001.jpg",
//       main_news_title:
//         "일본 반도체산업 재건 의지 재확인, 글로벌 주요 생산기지로 '컴백' 노린다",
//       sub_news_titles: [
//         "하이브 BTS '군백기' 걱정 없다, 지민 뉴진스 르세라핌 TXT 흥행가도",
//         "유가 100달러 돌파 전망 ‘솔솔’, 바이든 “나쁘지 않을 것” 옐런 “성장 저해”",
//         "삼성전자 GPU 개발 역량 강화, 경계현 엑시노스 '제대로' 한다",
//         "[서울아파트거래] 목동신시가지5단지 24억에 팔려, 재건축 호재로 최고가",
//         "인텔 차세대 GPU 위탁생산 TSMC가 독점, 미세공정 기술력 재차 증명",
//         '챗GPT로 반도체 결합장비 수요 증가, 현대차증권 “한미반도체 위상 강화"',
//       ],
//     },
//     {
//       name: "뉴데일리",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:22\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9058/162451_001.jpg",
//       main_news_title:
//         '"방치된 4대강 보… 가뭄·산불 위험에 적극 활용하라" 尹, 비정상의 정상화',
//       sub_news_titles: [
//         "한일의원연맹 일본 측도 '오지말라' 했는데… 기어코 후쿠시마 향하는 민주당",
//         "'정부가 무조건, 남는 쌀 다 사준다' 양곡관리법 개정안… 尹 거부권 첫 행사",
//         "'남는 쌀 방지법'이라는 민주당…'농가파탄법'이라는 국민의힘",
//         '"하영제도 받았으니 이재명도 받자"… 영장실질심사, 부메랑 효과',
//         "작년 국가부채 2326兆… 코로나 대응에 공무원·군인연금 부담↑",
//         "한화, 대우조선 '인수TF팀' 복귀로 내홍 봉합… 공정위 어깃장만 남아",
//       ],
//     },
//     {
//       name: "비즈한국",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/973.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9197/161845_001.jpg",
//       main_news_title: "크라운해태그룹, '옥상옥' 두라푸드는 어떤 기업?",
//       sub_news_titles: [
//         "미국 IRA 전기차 보조금 정책에 '춤추는 2차전지주'",
//         "어닝서프라이즈에 흑자 전환했는데…'배민' 향한 전망 엇갈리는 까닭",
//         "일론 머스크의 스타링크가 허블 망원경을 방해하고 있다!",
//         "10년 만에 최대치 맞나? 미분양 통계 살펴보니",
//         "'NO재팬' 재점화 조짐, 전범기업 손잡은 대기업 성적표는?",
//         "노동계 최저임금 1만 2000원 요구…24.7% 인상안",
//       ],
//     },
//     {
//       name: "문화일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/021.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:19\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9004/162451_001.jpg",
//       main_news_title:
//         "“고기도 없는데 이게 8000원?”… 허접한 도시락에 힘 빠지는 ..",
//       sub_news_titles: [
//         "성조숙증 남자 어린이 왜 급증할까?… 12년새 83배 늘었다",
//         "“양곡법 전형적 포퓰리즘”… 尹대통령, 첫 거부권",
//         "‘문 정부 확장재정’ 부작용… 나랏빚 사상 첫 1000조원 돌파",
//         "재혼 맞선 본 돌싱남, 상대녀 ‘노브라’에 화들짝…“신체조건이 중요”",
//         "‘밤안개’ 원로가수 현미, 4일 별세…향년 85세",
//         "함소원, 이혼 발표 6시간만에 번복 “사이는 자주 안좋아”",
//       ],
//     },
//     {
//       name: "서울파이낸스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/824.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9243/161417_001.gif",
//       main_news_title: "구지은 아워홈 부회장, 배당 둘러싼 '남매의 난' 승리",
//       sub_news_titles: [
//         "금감원, 은행 지배구조 집중 감독·검사···이사회 면담도 정례화",
//         "SK하이닉스 파운드리 사업, 세계 톱10 진입 눈앞",
//         '이 달에만 은행 점포 30곳 문 닫는다···당국 "사전 평가 강화"',
//         "당국 지배구조 정조준에도···5대 금융 사외이사 75% 연임",
//         "'K 방산 총아' 한화에어로스페이스 출범···한화 계열 3사 통합",
//         "서울청년주택 임대료 낮추고 공급 늘린다···2030년까지 12만호",
//       ],
//     },
//     {
//       name: "나우뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2022/0804/nsd1343054.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:26\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9165/153132_001.jpg",
//       main_news_title:
//         "“바흐무트 시청에 러 국기 게양”…우크라 최대 격전지 점령 코앞",
//       sub_news_titles: [
//         "日 대지진 전조?…돌고래 30여 마리 집단 좌초에 불안 확산 [여기는 일본]",
//         "조종사 먼저 도망쳤다…멕시코 열기구 탄 부부의 비극 [포착]",
//         "[영상] 세상 가장 깊은 곳 사는 물고기…日 해저 8336ｍ 포착 [핵잼 사이언스]",
//         "총 152발 ‘탕탕탕’…美 총기난사범, 치밀한 준비 끝 학살극 [핫이슈]",
//         "[건강을 부탁해] 저녁 늦게 먹어도 살찌지 않는 비결은?",
//         "연금 시위 한창인데...프랑스 장관 플레이보이 표지모델 논란",
//       ],
//     },
//     {
//       name: "미주한국일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/814.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 11:54\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9231/115909_001.jpg",
//       main_news_title: "트럼프, 기소절차 하루전 뉴욕 도착… “미국이 지옥으로”",
//       sub_news_titles: [
//         "바이든 “극우 공화, 美경제 위협”…민생행보로 트럼프와 차별화",
//         "6세 초교 1년생에 총 맞은 교사, 4천만 달러 손배 소송",
//         "BTS 지민, 빌보드 ‘핫 100’ 1위…K팝 솔로 최초",
//         "4월 첫 주말 ‘총격 살인’으로 물든 LA",
//         "“월요일과 금요일엔 카페 문닫아”…구글, 직원 복지 축소",
//         "“테슬라 가격 인하 더 필요”…수익성 우려에 주가 6% 하락",
//       ],
//     },
//     {
//       name: "데일리안",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/368.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:52\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9090/160039_001.jpeg",
//       main_news_title: "하영제 영장 기각…믿는 '특권'에 발등 찍힌 이재명",
//       sub_news_titles: [
//         "'한동훈 차출'에 '홍준표 반발'까지…與서 고개드는 '지지율 위기론'",
//         "'친윤' 이용 \"尹 멘토 없어…'신평發 창작물' 두고보지 않을 것\"",
//         '[은행권 수술대③] 이상 외화송금 123억 달러 "법적 조치"',
//         '野, 6일 후쿠시마行…與 "日측서 안 만난다는 데 무슨 창피 당할지"',
//         "또 멀어진 SK온의 흑자전환 시점, 그래서 언제? [기자수첩-산업·IT]",
//         "“멋지고 떳떳하게 사라지겠다”던 현미, 85세 일기로 4일 별세",
//       ],
//     },
//     {
//       name: "뉴스토마토",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/913.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9121/161845_001.jpg",
//       main_news_title:
//         "윤 대통령, 양곡법에 '거부권' 행사…\"전형적인 포퓰리즘\"(종합)",
//       sub_news_titles: [
//         "아시아 성장률 상향, 한국만 '1.5%'…동아시아 중 '최하'",
//         "소비자물가 두 달 연속 '4%대'…석유류 꺾이고 채소값 껑충",
//         "'범정부 총력지원' 메아리만…한국 수출 살얼음판",
//         "한화 성장 신사업마다 총수일가 그림자",
//         "민주당 탄핵 맞불…이상민 이어 한덕수·정황근까지",
//         "창립 1주년 KT클라우드…멈춰버린 지주형 KT 전략",
//       ],
//     },
//     {
//       name: "미디어오늘",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/006.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9029/162209_001.jpg",
//       main_news_title: "신문사 간부가 직원 44명을 고소한 사건 전말은",
//       sub_news_titles: [
//         "챗GPT는 기자를 대체할 수 있을까",
//         "경향 “통합 행보 의미 퇴색” 동아 “4·3 무관한 단어들로 채워”",
//         "한덕수, 돌덩이 발언 “강제동원 희생자 지칭 아냐” 해명",
//         "영국 감사원이 지적한 BBC 디지털전략의 한계",
//         "윤석열 대통령 스트라이크 구질 분석한 조선일보에 던지는 질문",
//         "불순한 꼰대들만 호명하는 ‘MZ노조’",
//       ],
//     },
//     {
//       name: "아이뉴스24",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/031.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9025/162209_001.jpg",
//       main_news_title: "개미 VS 기관·외국인…삼성전자 투자, 누가 웃을까?",
//       sub_news_titles: [
//         "[우리 딜레마]②팔지도, 사지도 못한 官의 굴레",
//         "\"젊은 인재 여기 다 모였네\"…커피·공간 무료 '취업 카페' 뜬다",
//         '[르포] "보는 눈 없어 놓쳤다"…다시 불 지피는 동탄2신도시',
//         "이상 외화송금만 16조…금감원, 13개 금융사 중징계 예고",
//         "카·포 학생들은 어쩌다 이 게임사에 꽂혔나",
//         "오비맥주, 새 광고 시작…맥주시장 경쟁 본격화",
//       ],
//     },
//     {
//       name: "서울경제",
//       logo_src: "https://s.pstatic.net/static/newsstand/2019/logo/011.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:06\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9018/161417_001.jpg",
//       main_news_title:
//         "勞 “내년 최저임금 25% 올려야”…올해도 기싸움으로 시작된 심의",
//       sub_news_titles: [
//         "한전 33조 적자 폭탄에…코스피 상장사 작년 순익 17% '뚝'",
//         "'60년대 톱가수' 현미 별세, 자택서 쓰러진 채 발견…향년 85세",
//         "박명수 부부 '스벅 재테크'…100억 시세차익 대박",
//         "'퓨리에버 코인 뭐길래'…강남 납치·살인 '투자 실패'로 사주 의혹",
//         "尹이 착용한 아기띠…코니바이에린, 작년 매출 10% 늘었다",
//         "감히 그 분의 이름을 빼?…시진핑 표기 제외, 인민일보 대형 사고",
//       ],
//     },
//     {
//       name: "동아일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/020.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:14\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9003/162209_001.jpg",
//       main_news_title:
//         "“한 번만 더 터지면”… 총선 앞둔 與의 불안 요인 된 최고위원",
//       sub_news_titles: [
//         "한미일 북핵수석대표, 7일 서울서 3자 협의…“北 도발 대응 협의”",
//         "하영제 영장기각에…조응천 “李도 기각 받았다면 리스크 해소”",
//         "김진태, 강원 산불 속 골프연습 물의…“다신 이런 일 없을것”",
//         "빗길 고속도로서 역주행하는 車…“어디로 가나 봤더니”",
//         "다리잃은 아빠-재활치료 소년… 응급실 표류, 삶을 송두리째…",
//         "원로가수 현미 별세, 향년 85세…사인 조사 중",
//       ],
//     },
//     {
//       name: "데일리한국",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/042.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9036/162451_001.jpg",
//       main_news_title:
//         "[의혹의 하이소닉①] 4년3개월만의 거래재개...과거·현재 주요주주만 배불리기",
//       sub_news_titles: [
//         '[주총] 아워홈, 3남매 배당금 전쟁서 구지은 부회장 승기…"30억원 의결"',
//         "양곡관리법 개정안 폐기 수순 밟나…尹대통령, 첫 거부권 행사",
//         "두나무·빗썸, 순익 급감에도 직원 늘렸지만…크립토 윈터에 앞길 '안갯속'",
//         '[글로벌테크] "불황 몰랐는데"…TSMC에도 감지된 반도체 침체',
//         "LS일렉트릭, 유럽 ESS 시장 진출...1200억원 규모 사업 수주",
//         "맘스터치, 몽골 진출 마스터 프랜차이즈 계약…연내 6개 매장 예정",
//       ],
//     },
//     {
//       name: "머니에스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/417.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9159/162209_001.jpg",
//       main_news_title:
//         "\"1시간 일했는데 집에 가래요\"… 알바해도 '빈손'인 청년들 [Z시세]",
//       sub_news_titles: [
//         "尹, '민주당 추진' 양곡법에 거부권… \"전형적 포퓰리즘\"",
//         "노동계, 내년 최저임금 '1만2000원' 요구… 24.7% 인상",
//         '"기준금리 인상 부담, 국내 은행이 미국보다 더 떠넘겼다"',
//         '"연 10% 준다고?" 고금리에 홀려 가입한 적금, 알고 보니',
//         "'2966억 vs 30억' 아워홈 배당금 남매의 난서 구지은 승리",
//         "원로가수 현미 별세, 숨진 채 발견… 향년 85세",
//       ],
//     },
//     {
//       name: "아시아경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:51\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9019/160039_001.jpg",
//       main_news_title:
//         "작년 관리재정수지 117조 적자 사상최대...부채 2300조 돌파",
//       sub_news_titles: [
//         "3월 소비자물가 4.2%↑…상승률 1년 내 최저수준",
//         '"Fed 기준금리 인상 가능성"…국제유가 급등에 물가 자극 우려',
//         "'국내 5대 뿐이라는데'…5.3억원 마세라티 MC20 첼로 '완판'(종합)",
//         "[단독]인천세관, 페루현지 부실조사 의혹",
//         '"임대료 낮춘다"…청년안심주택, 2030년까지 12만호 공급',
//         '中企 "공짜야근? 걱정 말라"',
//       ],
//     },
//     {
//       name: "국민일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/005.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:15\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9002/162209_001.jpg",
//       main_news_title: "[단독] 술 마셔서 퇴학 당해놓고… 육사 생도 잇단 소송",
//       sub_news_titles: [
//         "[단독] “상속, 제척기간 지났다” LG구광모, 단호한 답변서",
//         "[르포] 경찰만 3만5000명… 트럼프 재판 하루 전 숨 죽인 뉴욕",
//         "원로가수 현미 별세… 자택서 쓰러진 채 발견",
//         "벚꽃길 유모차 충돌 논란… “진단서 끊겠대요” “학생 품행 엉망”",
//         "‘강간 당했다’ 신고에 경찰차 4대 출동 “거짓말인데 하하”",
//         "“왜 저항안했나” 정명석측 묻고 또 물어…피해자 구토",
//       ],
//     },
//     {
//       name: "시사오늘",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/816.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9229/161417_001.jpg",
//       main_news_title:
//         "전기·가스비 인상 잠정 보류에…물가 안정 vs. 현실 외면 ‘온도차’",
//       sub_news_titles: [
//         "토스뱅크, 작년 2644억 순손실…대손충당금·수수료 비용의 ‘늪’",
//         "곽재선이 손대면 다를까…‘미래車 기술 개발’ 닻 올린 KG 모빌리티 [현장에서]",
//         "자동차보험 매출액 21兆 육박…보험료 인하에 당국-업계 ‘동상이몽’",
//         "공정위, 어설픈 평등으로 한화 차별하나?",
//         "김영구 “어릴 적 장학금 받은 감사함, 함께 나누고파” [인터뷰]",
//         "정부와 여당의 늪 [특별기고]",
//       ],
//     },
//     {
//       name: "이코노미스트",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/243.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:23\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9163/152837_001.jpg",
//       main_news_title:
//         "재주는 ‘점주’가, 생색은 ‘배민’이?…‘풍선효과 배달비’ 누가 이득보나 [‘알뜰배달’의 덫]②",
//       sub_news_titles: [
//         "‘4200억 흑자’낸 배민, 왜 ‘묶음배달’을 내놨나 [‘알뜰배달’의 덫]①",
//         "“F100, 전기차 플랫폼 적용”...KG모빌리티, 비밀 보따리 풀었다",
//         "토종 車 수장 곽재선·정의선, 서울모빌리티쇼서 만났다",
//         "흔들리는 ‘전설의 삼선(三線)’…세계 2위 운동화 브랜드, 악재 딛고 비상할까 [브랜도피아]",
//         "3월 소비자물가 4.2%↑…상승폭 1년 만에 ‘최저’",
//         "“마음 다쳤다” 백종원, 예산 국밥거리 손절…왜?",
//       ],
//     },
//     {
//       name: "시사저널이코노미",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/975.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9195/161417_001.jpg",
//       main_news_title: "허영인 SPC 회장 배임 재판서 ‘주식 적정가액’ 쟁점으로",
//       sub_news_titles: [
//         "'빅딜' 앞둔 HMM, 업황 내리막에 OPEC+ 감산까지 '엎친 데 덮친 격'",
//         "연이은 공모 철회에 스팩 IPO ‘이상기류’···증권사 먹거리 위축되나",
//         "‘배당금’ 둘러싼 아워홈 남매의 난, 구지은 부회장 '勝'",
//         "‘환경기업 지향·디벨로퍼 목표’···건설업계, 신사업 힘 준 개명 잇따라",
//         "‘강남 달리는 경전철’ 위례신사선, 연내 착공 ‘파란불’",
//         "[영상] “무임승차는 지자체 문제”···택시·버스·지하철 요금 줄인상 변수",
//       ],
//     },
//     {
//       name: "뉴스핌",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/914.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9125/162209_001.jpg",
//       main_news_title:
//         "노동계, 내년 최저임금 1만2000원 요구…소상공·자영업 '한숨'",
//       sub_news_titles: [
//         "[단독] 공정위, 신고인에 통지 의무 위반 심각…25% 통지 안해",
//         "[종합] 尹대통령, 양곡법 '첫 법률안 거부권' 행사…\"전형적인 포퓰리즘 법안\"",
//         "[속보] 경찰, '강남 납치·살해' 사건 관련 성형외과 압수수색",
//         "블랙핑크 지수, 초동 밀리언셀러 등극…K팝 여성 솔로 최초",
//         "'밤안개' 원로가수 현미, 4일 별세…\"이가 빠질 때까지 노래할 것\"",
//         "[이코노믹포럼] 최연혁 교수가 직접 들려주는 스웨덴 '행복지수'가 높은 이유",
//       ],
//     },
//     {
//       name: "머니투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/008.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:20\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9017/162209_001.jpg",
//       main_news_title:
//         "\"나랏빚, 5년 새 407조 급증\"… 재정준칙이 '방어막' 될까",
//       sub_news_titles: [
//         "모처럼 웃은 제약·바이오株… 셀트리온 3형제 나란히 올랐다",
//         "행동주의가 지주사 주가 올린다?",
//         "한국, 선진국 'G8' 합류?…러시아 빠진 자리 노린다",
//         "[속보] '강남 납치·살인' 수면제 출처 수사…주범 아내 성형외과 압수수색",
//         '전두환 손자 "가족들에게 해코지 당할까 두려워"…이순자도 저격',
//         "'별세' 현미 누구…'밤안개' 부른 대한민국 디바",
//       ],
//     },
//     {
//       name: "아시아투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/920.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:12\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9113/161845_001.jpg",
//       main_news_title: '尹, 양곡법 첫 거부권 행사…"전형적 포퓰리즘 법안"',
//       sub_news_titles: [
//         "분양권 전매제한 완화…수도권 최대 3년, 지방은 1년",
//         "'불법 정치자금' 김용, 보석 청구…13일 공판서 심문",
//         "국가부채 2300조 넘었다…나라살림 적자 '역대 최대'",
//         "양대노총, 내년 최저임금 25% 오른 1만2000원 요구",
//         "가수 현미 별세, 자택서 쓰러진 채 발견…향년 85세",
//         "연 10% 준다고? 고금리에 무턱대고 가입했다가 낭패",
//       ],
//     },
//     {
//       name: "이뉴스투데이",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/964.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:58\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9189/160224_001.jpg",
//       main_news_title:
//         "한은, ‘메기’ 찾겠다던 금융당국 행보 제동…금융권 “답 정해놓고 추진”",
//       sub_news_titles: [
//         "전매제한 완화에 시장 훈풍 기대감 ‘솔솔’…수도권 공급 몰린다",
//         "1분기 실적 ‘어닝쇼크’ 예상보다 심각…재계 ‘상저하고’ 의문",
//         "[현장] 서울모빌리티쇼서 만난 정의선·곽재선 회장 “차 잘 나가나요?”",
//         "외식업계 다시 부는 치킨 바람…신제품부터 컬래버까지",
//         "‘특판가구’ 담합 혐의에 흔들리는 가구업계…다음은 ‘세금 포탈’ 의혹",
//         "[현장] 與윤재옥, 원내대표 출마 “수도권 출신이라도 승리 장담 못해”",
//       ],
//     },
//     {
//       name: "인민망",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/923.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 12:30\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9118/134024_001.jpg",
//       main_news_title: "리창 총리, 日외무상과 회담",
//       sub_news_titles: [
//         "마라톤 메달에 담긴 중국 문화 요소",
//         "[중국 뉴스 브리핑] 2023년 4월 4일",
//         "[포토] 中, 톈룽2호 야오1 운반로켓 발사 성공",
//         "리창 총리, 日외무상과 회담",
//         "앞날이 기대되는 중국 신세대 선수들",
//         "中 왕이, 日외무상과 회담",
//       ],
//     },
//     {
//       name: "한국경제",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/015.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:04\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9022/161103_001.jpg",
//       main_news_title: '"배터리 어디 것 쓰나"…정의선 회장 깜짝 방문한 곳',
//       sub_news_titles: [
//         "한전 역대급 쇼크에…코스피, 28조원 '와르르'",
//         "\"주가 더 오른다\"…외국인이 '콕' 찍은 이 종목",
//         "6년간 고속도로 하이패스 무단통과 30대 결국",
//         "30개월 기다리던 車, 이제 7개월 만에 내품에…",
//         "'초유의 상황'…정윤정 출연금지 초강수 둔 이유",
//         "손님 나간 지 5초 만에…빨래방 폭발 '아수라장'",
//       ],
//     },
//     {
//       name: "허프포스트코리아",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/993.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:10\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9217/161845_001.jpg",
//       main_news_title: "인간의 아름다움이란",
//       sub_news_titles: [
//         '"울다 웃으면 엉덩이에 털 나~(?!)" 항문털 (510만 팔로워 의사 꿀조언)',
//         "방탄소년단(BTS) 지민은 케이팝 솔로 최초로 빌보드 '핫100' 1위에 오른 아티스트가 됐다",
//         '"조선 제1검???" 김의겸 더불어민주당 의원은 한동훈 법무부 장관이 말싸움 잘한다며 "조선 제1혀"라고 평가했다',
//         '"내가 그를 얼마나 좋아하는지.." 손흥민이 김민재 SNS 언팔 논란에 대인배같은 선배의 모습을 보여줬다',
//         '"평생 다시 못 걷는다고..." 오토바이 사고로 하반신 마비 판정을 받은 이 남성은 포기하지 않은 끝에 PT 트레이너가 됐다 (영상)',
//         "71세로 별세한 거장 사카모토 류이치는 숨지기 직전까지 '환경 보존'을 위해 강하게 목소리를 내며 시민 의식을 강조했다 (편지)",
//       ],
//     },
//     {
//       name: "중앙일보",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:14\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9008/162209_001.png",
//       main_news_title: "대청댐서 살아있었다…강남 납치 살인 전말",
//       sub_news_titles: [
//         '김재원 "4·3은 광복절보다 격 낮다" 허은아 "부끄럽다"',
//         "3000억 풀라는 아워홈 오너…'막장 배당' 겨우 막았다",
//         '구치소에 혈세로 골프장? 한동훈, 계약 직전 "NO"',
//         "가수 현미 별세, 자택서 쓰러진 채 발견…향년 85세",
//         "김혜경 법카 제보자 비밀접촉…'007' 방불케하는 그들",
//         '이준석 "장염에 尹술잔 거부? 만취해 집 간 적은 있다"',
//       ],
//     },
//     {
//       name: "노컷뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/079.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:09\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9028/161103_001.jpg",
//       main_news_title: '\'尹 양곡법 거부\'에 野"농심 외면" vs 與"입법폭주"',
//       sub_news_titles: [
//         '[르포]"혈압약도 놓고 나왔제" 산불에 애간장 타는 어르신들',
//         '김재원 "4·3은 격 낮아"···김웅 "추모에도 격 있나"',
//         "컵라면 먹던 초등생, 목 흉기 피습···잡고보니 고교생",
//         '한덕수 "징용 희생자 돌덩이라 안해, 똑바로 들어야"',
//         "주식·채권시장 동반하락···국가자산 사상 첫 감소",
//         "'강남 납치·살해' 추가 공범 사전구속영장 신청",
//       ],
//     },
//     {
//       name: "중앙SUNDAY",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/353.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 09:43\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9227/095121_001.jpg",
//       main_news_title: "금융 진정 '벚꽃랠리' 기대, 코스피 2600선 회복할 것",
//       sub_news_titles: [
//         "유튜브로 퍼지는 '이단'…중고거래 사이트까지 활용",
//         '"그림 정말 좋다" 망각의 늪에서 건져낸 괴짜 원계홍',
//         '"아이패드용 OLED 패널 선점하자" 삼성·LG 불꽃 경쟁',
//         "RNA로 난치병 유발 유전자 억제, 암도 치료할 수 있다",
//         "물 귀하고 변 넘치고…100억 사기도 판친 고갯마루",
//         "도쿄서 미술 배운 이완석, 공예 통해 한·일 문화 교류 힘 써",
//       ],
//     },
//     {
//       name: "미디어펜",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/809.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:16\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9224/161845_001.jpg",
//       main_news_title: "美 IRA 배터리 전략은…韓 포섭·中 견제·日 육성",
//       sub_news_titles: [
//         '"만리장성 넘어라"…게임계, 중국 판로 확대 모색',
//         "K-방산, 안보 위기 속 실적 향상 모색",
//         '시멘트 부족에 멈춰서는 건설현장…"장기화 대책 필요"',
//         "반도체 바닥론 '솔솔'…삼성전자 주가 향방은",
//         '"은행 과점이익 해결책, 규제완화만이 능사 아냐"',
//         "가장 안전한 항공사 1위 에어부산…타 국적항공사 제친 비결은?",
//       ],
//     },
//     {
//       name: "경향신문",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 16:18\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9001/162209_001.jpg",
//       main_news_title:
//         "[단독]보훈처 추진 이승만 대통령 기념관…'전직대통령법 기념관' 아니었다",
//       sub_news_titles: [
//         "출퇴근 시간 ‘무정차통과’ 막는다… 수도권 광역버스 운행 11% 증가",
//         "김재원 “제주4·3은 국경일보다 격이 낮은 추모일”",
//         "‘나는 신이다’ JMS 정명석 피해자, 이틀째 법정서 비공개 증언…“신변·사생활 보호”",
//         "정경심, 형집행정지 재신청···“건강 심각하게 악화”",
//         "대형 걸그룹이 점령한 가요계서 피어난···‘중소의 기적’들",
//         "‘밤안개’ 가수 현미 별세···향년 85세",
//       ],
//     },
//     {
//       name: "UPI뉴스",
//       logo_src:
//         "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/823.png",
//       category_id: "daei",
//       edit_time: "2023.04.04. 15:29\n편집",
//       main_news_image:
//         "https://s.pstatic.net/static/newsstand/2023/0404/article_img/new_main/9241/153410_001.jpg",
//       main_news_title:
//         "봉숭아학당 與…선배 지적질에 영 안서는 당대표, 잇단 물의 지자체장",
//       sub_news_titles: [
//         '尹, 양곡법에 첫 거부권 "전형적 포퓰리즘 법안"…野 반발',
//         '"집토끼냐 산토끼냐"…총선 앞둔 與, 보·혁 노선 경쟁 점화',
//         "아직도 너무 비싼 '서울 아파트'…전문가들 \"대세 상승 기대 어려워\"",
//         "이름값 못하는 신세계건설, '홀로서기' 실패?",
//         "'어닝쇼크' 예고된 삼전·하이닉스…\"2분기 바닥 다지고 상승\"",
//         "캡슐커피 재도전 바쁜데…이물질 사태로 발목잡힌 동서식품",
//       ],
//     },
//   ],
// };

// const fs = require("fs");

// // 객체를 JSON 문자열로 변환
// const jsonString = JSON.stringify(test);

// // JSON 파일에 문자열 쓰기
// fs.writeFileSync("db.json", jsonString);
