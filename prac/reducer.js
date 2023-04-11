const dispatch = ({ type, payload }) => {
  reducer({ type, payload });
};

const reducer = (action) => {
  switch (action.type) {
    case 'deposit':
      return {
        ...account,
        action: action.payload,
      };
  }
};

const account = {
  amount: 0,
};
