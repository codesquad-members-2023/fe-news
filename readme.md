## 구조

![new-stand-structure](https://user-images.githubusercontent.com/96980857/230043837-46156db8-a817-4440-bf85-b000e9eb3525.png)

## 기능 목록

### 기본 화면 레이아웃

- [x] 상단 왼쪽에는 뉴스 스텐드 로고를 표시한다.
- [x] 상단 오른쪽에는 시스템 날짜를 표시한다.
- [ ] 콘텐츠는 웹 화면의 정중앙에 배치한다.

### 최신 뉴스 자동 롤링 영역

1. 기능

- [x] 왼쪽 바와 오른쪽 바는 각각 다른 최신 뉴스의 헤드라인 5개가 5초마다 자동으로 무한 롤링된다.
- [ ] 왼쪽 바와 오른쪽 바가 무한 롤링할 때,
  - [ ] 좌우 영역의 롤링 시간차를 1초로 한다.
  - [x] 제목이 위로 부드럽게 넘어간다.
- [ ] 각 영역에 마우스를 호버했을 때,
  - [ ] 무한 롤링을 일시 정지한다.
  - [ ] 헤드라인에 밑줄을 표시한다.

### 전체 언론사: 그리드 보기

1. 레이아웃

- [x] 그리드는 가로 930px, 세로 388px 영역에 6\*4 테이블 구조이다.
- [x] 각 테이블의 셀에 언론사 브랜드 마크가 중앙에 배치된다.
- [x] 그리드의 좌우에는 화살표를 배치한다.
- [x] 가장 첫 페이지에 disabled되는 화살표는 표시하지 않는다.
- [x] 가장 마지막 페이지에 disabled되는 화살표는 표시하지 않는다.

2. 기능

- [ ] [전체 언론사] 탭의 [그리드 보기]를 기본 상태로 한다.
- [ ] 페이지가 새로고침 될 때마다 언론사 마크의 순서는 랜덤으로 배치된다.
- [x] 그리드의 좌우 화살표를 클릭했을 때, 페이지를 넘길 수 있다.
      **언론사는 아무리 많아도 4페이지까지만 표시한다.**
- [x] 언론사 마크가 있는 셀에 마우스를 호버했을 때, [구독하기]버튼이 보인다.
- [ ] 이미 구독하고 있는 언론사 마크를 호버했을 때, [해지하기]버튼이 보인다.

### 전체 언론사: 리스트 보기

1. 레이아웃

- [x] 카테고리는 기사 영역 상단에 가로로 긴 탭 형태로 배치한다.
  - 종합/경제, 방송/통신, IT, 영자지, 스포츠/연예, 매거진/전문지, 지역

2. 기능

**카테고리**

- 선택된 카테고리 이름 옆에
  - [x] 해당 카테고리에 속하는 언론사의 갯수를 표시한다.
  - [x] 연재 언론사의 순서를 표시한다.
  - [ ] 언론사의 순서는 화면이 새로고침 될 때마다, 랜덤으로 정한다.
- [ ] 현재 선택된 카테고리의 다른 카테고리에 마우스를 호버했을 때, 밑줄이 생긴다.
- [x] 각 카테고리를 눌렀을 때, 해당 카테고리로 이동한다.
- [x] 가장 마지막 카테고리의 마지막 언론사가 보여진 후, 처음 카테고리의 첫 언론사로 돌아온다.

**언론사 기사 내용**

- [x] 현재 순서에 맞는 언론사 내용을 표시한다.
  - [x] 언론사 브랜드 마크
  - [x] 최종 편집 일시
  - [x] [구독하기] 버튼
  - [x] 썸네일이 있는 메인 뉴스 1건
  - [x] 타이틀만 있는 서브 뉴스 6건
  - [x] 편집권에 대한 안내 문구
- [x] 메인 뉴스에 마우스를 호버했을 때,
  - [x] 썸네일은 5% 확대된다.
  - [x] 뉴스 타이틀에 밑줄이 생긴다.
- [ ] [구독하기] 버튼을 눌렀을 때,
  - [ ] '내가 구독한 언론사에 추가되었습니다.'라는 스낵바가 5초간 유지한다.
  - [ ] 5초 후,즉시 내가 구독한 언론사 탭의 리스트 보기 화면으로 이동하도록 한다.
- [ ] 한 언론사당 20초 동안 화면에 보인다.
  - [ ] 카테고리명 배경은 초마다 색이 차오른다. (애니메이션 적용)
- [ ] 20초 후 다음 언론사의 내용이 나타난다.
- [x] 좌 화살표를 클릭하면 이전 언론사로 넘어간다.
- [x] 우 화살표를 클릭하면 다음 언론사로 넘어간다.

### 내가 구독한 언론사: 리스트보기

1. 레이아웃

- [ ] 카테고리 가로 탭에 언론사의 이름 보인다.
- [ ] > 화살표 아이콘이 보이게 한다.

2. 기능

- [ ] 언론사는 내가 구독한 순서대로 배치된다.
- [ ] 내가 구독한 언론사 탭 상태는 리스트 보기가 기본이다.
- [ ] 언론사가 많아서 탭의 가로 영역을 넘어가는 경우, 드래그를 통해 가로로 스크롤이 된다.
- [ ] [구독해지]버튼을 누르면 "(언론사이름)을(를) 구독해지하시겠습니까?"라는 alert 모달창이 뜬다.
- [ ] alert 모달창의 [예, 해지합니다]를 클릭했을 때,
  - [ ] 구독이 해지된다.
  - [ ] 다음 순서 언론사가 나타난다.

### 내가 구독한 언론사: 그리드 보기

1. 레이아웃

- [ ] 사용자가 구독하고 있는 언론사의 브랜드마크만 보이고, 나머지 칸은 비어있다.

2. 기능

- [ ] 구독 중인 언론사의 브랜드마크 셀에 마우스를 올렸을 때, [구독해지]버튼이 나타난다.
- [ ] [구독해지]버튼을 클릭했을 때, alert 모달창이 나타난다.
- [ ] 구독을 해지했을 경우, 해당 언론사의 브랜드 마크가 사라진다.
