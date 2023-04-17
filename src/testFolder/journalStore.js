// 언론사의 상태 저장소
// 언론사 dispatcher에서 전달된 Action을 통해서만 상태 변경
// 상태가 변경되면 View에게 통지

class JournalStore {
  constructor(journalList) {
    this.journalList = journalList;
    this.subscribeList = [];
    this.unSubscribeList = [];
  }
}

export default JournalStore;

// view

// 보통 상태는 유저가 어떤 행동을 했을 때 바뀐다
// 즉 addEventListner의 콜백함수에 setState함수가 들어가는게 대표적인 경우
// setState가 발생하고 나면 view는 렌더를 다시해야된다.

/*
이벤트는 뷰에서 
전체 그리드
뷰안 스토어한테 상태 변화 알려주는 함수 -> all or 구독


스토어가 받아서
스토어내의 싱태를 업데이트하고
이 값으로 렌더링 다시해라는 함수가 핗요
스토어 값이 바꿔야함

뷰한테 렌더링해
*/

// 전체 언론사 클릭시
