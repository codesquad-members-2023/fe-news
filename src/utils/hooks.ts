type getStateType<T> = () => T;
type SetStateType<T> = (newState: T) => void;
type SubscribeType = (listener: () => void) => void;

export const useState = <T>(
  initialValue: T
): [getStateType<T>, SetStateType<T>, SubscribeType] => {
  let state = initialValue;
  const listeners: Set<() => void> = new Set<() => void>([]);

  const getState = () => state;

  const setState: SetStateType<T> = (newState: T) => {
    state = newState;
    listeners.forEach((listener) => listener());
  };

  const subscribe: SubscribeType = (listener: () => void) => {
    listeners.add(listener);
  };

  return [getState, setState, subscribe];
};
