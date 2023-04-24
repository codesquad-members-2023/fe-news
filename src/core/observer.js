let currentObserver = [];

export const observe = (fn) => {
  currentObserver.push(fn);
  fn();
  currentObserver.pop();
};

export const observable = (obj) => {
  Object.keys(obj).forEach((key) => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver.length) {
          observers.add(currentObserver[currentObserver.length - 1]);
        }

        return _value;
      },
      set(value) {
        if (_value === value) return;
        if (JSON.stringify(_value) === JSON.stringify(value)) return;
        _value = value;
        observers.forEach((fn) => fn());
      },
    });
  });

  return obj;
};
