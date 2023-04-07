/**
 *
 * @param {Object} initialState
 */

const createStore = (initialState = {}) => {
  let isDispatching = false; // 액션이 디스패치되고 있는지 여부를 나타내는 변수.

  const reducer = {}; // 도메인 이름과 도메인 리듀서를 매핑한 객체
  const state = typeof initialState === 'object' ? initialState : {};
  // Store의 상태 객체. 초기 상태로 초기화되며, 각각의 도메인에 해당하는 상태를 포함.
  const listeners = {}; // 도메인 이름과 도메인에 등록된 콜백 함수들을 매핑한 객체.

  /**
   * 해당 도메인을 위한 초기 상태를 생성
   * 해당 도메인 리듀서를 reducer 객체에 등록
   * 해당 도메인에 등록된 콜백 함수들을 위한 배열을 생성하고 listeners 객체에 등록.
   * @param {*} domain : 추가할 도메인의 이름
   * @param {*} domainReducer : 도메인 리듀서
   * @param {*} initialState : 도메인의 초기 상태.
   */

  const addDomain = (domain, domainReducer, initialState = {}) => {
    state[domain] = initialState;
    listeners[domain] = [];
    reducer[domain] = domainReducer;
  };

  /**
   * 스토어의 현재 상태를 반환.
   * @param {*} domain
   * @returns
   */
  const getStoreState = (domain = '') => {
    if (domain) return Object.freeze(state[domain]);
    return Object.freeze({ ...state });
  };

  //unSubscribe 함수를 반환
  /**
   * 스토어의 상태 변경 시점에 호출할 콜백 함수를 등록
   * @param {*} domain  콜백 함수를 등록할 도메인의 이름
   * @param {*} listener 스토어 상태 변경 시점에 호출할 콜백함수
   * @returns unSubscribe
   */
  const subscribe = (domain, listener) => {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function');
    }
    const domainListenerList = listeners[domain];
    if (!domainListenerList) {
      // 도메인이 스토어에 등록되어 있는지 확인.
      throw new Error('domain not exist at store');
    }
    let isSubscribed = true;
    domainListenerList.push(listener);

    const unSubscribe = () => {
      const domainListenerList = listeners[domain];
      const updatedListenerList = domainListenerList.filter(
        (domainListener) => domainListener !== listener,
      );
      listeners[domain] = updatedListenerList;
      isSubscribed = false;
    };

    return unSubscribe;
  };

  /**
   * 이전 상태와 다음 상태를 비교하여 해당 도메인의 상태가 변경 되었는지 여부를 확인.
   * 변경된 경우, listener 목록에 등록된 모든 함수를 호출하여 업데이트된 상태를 전달.
   * @param {*} action
   * @returns
   */
  const dispatch = (action) => {
    if (isDispatching) {
      throw new Error('action is dispatching');
    }
    const domains = Object.keys(state);
    const isDomainChanged = {};

    try {
      isDispatching = true;

      for (const domain of domains) {
        const domainReducer = reducer[domain];
        const previousState = state[domain];
        const nextState = domainReducer(previousState, action);
        state[domain] = nextState;
        isDomainChanged[domain] = previousState !== nextState;
      }
    } finally {
      isDispatching = false;
    }
    for (const domain in listeners) {
      if (isDomainChanged[domain]) {
        const domainListenerList = listeners[domain];
        domainListenerList.forEach((listener) => {
          listener(getStoreState(domain));
        });
      }
    }

    return action;
  };

  return {
    dispatch,
    subscribe,
    getStoreState,
    addDomain,
  };
};

export default createStore;
