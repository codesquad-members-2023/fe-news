몇개의 패턴을 학습해 보았지만, 적용하기에는 기본적인 View와 Model 구성 이해부터가 부족함을 느낌.
우선 View와 Store라는 두 가지만을 이용하여 서로 상호작용(?) 하며 움직이도록 구성을 해보자고 계획을 변경했다.

1. JournalHeader 영역

- [x] : JournalHeader에 "전체 언론사" "구독중인 언론사" 클릭시의 이벤트를 부여한다.
- [x] : "전체 언론사" 클릭시 JournalHeaderStore은 "ALL"의 상태를 가진다.
- [x] : "구족중인 언론사" 클릭시 "SUB"의 상태를 가진다.
- [x] : 이벤트 발생과 동시에 JournalHeader의 클릭된 "항목"의 글씨가 굵어지는 렌더링이 일어난다.

2. Journal 그리드 영역

- [x] : JournalHeaderStore에 JournalListAll = [], JournalSubList = []의 상태를 가진다.
- [x] : JournalHeaderStore의 상태("ALL", "SUB")에 따라 해당하는 리스트를 렌더링 해준다.
- [x] : 각 언론사에 마우스를 올리면 [구독하기] 버튼 보이도록 한다.
- [ ] : 이미 구독하고 있는 언론사의 경우 [해지하기] 버튼이 보이도록 한다.
- [x] : Journal의 "구독" 버튼을 누르면 JournalSubList배열에 추가된다.
- [x] : Jounnal의 "해지" 버튼을 누르면 JournalSubList배열에서 해당 언론사가 제거된다.
- [x] : [내가 구독한 언론사] 클릭시 구독을 누른 언론사만 보이게 한다.
- [ ] : 구족중인 언론사위에 마우스를 올리면 [구독해지] 버튼이 나온다
- [x] : 구독해지시 즉시 렌더링 되도록 한다.

3. Journal 디테일(전체) 영역

- [x] : 244개의 언론사를 카테고리로 분류한다. (상단에 카테고리 영역 구성)
- [ ] : 선택된 카테고리 이름 옆에 해당 카테고리에 속해있는 언론사의 갯수와 순서를 표시한다.
- [ ] : 언론사의 순서는 랜덤으로 정해진다.
- [ ] : 아래 화면에는 현재의 언론사 내용을 표시한다.
- [ ] : 좌우 화살표로 다음, 이전 언론사로 넘어가도록 한다.
- [ ] : 각 카테고리 클릭시 해당 언론사 리스트로 이동한다.
- [ ] : 언론사 내용에는 구독하기 버튼을 추가한다.
- [ ] : 구독하기 클릭 시 "내가 구독한 언론사에 추가되었습니다."라는 스낵바가 나오게 한다.
- [ ] : 내가 구독한 언론사에 추가되도록 한다.
- [ ] : 내가 구독한 언론사에서는 해지하기 버튼이 보이도록 한다.
- [ ] : 해지하기 클릭 시 내가 구독한 리스트에서 제거한다.

## 학습자료

[학습](https://stitch-dart-ccd.notion.site/FE-5-c53fa71f543d4bc89314ace45c585241)  
[설계](https://stitch-dart-ccd.notion.site/67df44200d0e4a6c977c39c6bd960244?v=4c93fbcb82234ceb8ca7a70212140d92)

## 참고자료

[리덕스](https://puzzle-roarer-58b.notion.site/snoop-fe-news-396b5d3634a34f7386dbf999f06dff88?p=61670477c3bf43c08e25036336a00171&pm=s)

[황준일](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Store/)

[시저스](https://quasar-stop-d68.notion.site/2-34905a2ae27447e59332bd64a6252241)
