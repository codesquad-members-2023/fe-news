type getState<T> = () => T;
type SetState<T> = (newState: T) => void;
type Subscribe<T> = (listener: () => void) => void;

export const useState = <T>(
  initialValue: T
): [getState<T>, SetState<T>, Subscribe<T>] => {
  let state = initialValue;
  const listeners: Array<() => void> = [];

  const getState = () => state;

  const setState: SetState<T> = (newState: T) => {
    state = newState;
    listeners.forEach((listener) => listener());
  };

  const subscribe: Subscribe<T> = (listener: () => void) => {
    listeners.push(listener);
  };

  return [getState, setState, subscribe];
};

// const [test, setTest, subscribeTest] = useState('메롱');

// subscribeTest(() => {
//   this.render(test());
// });
