export const isEquivalent = (curState, selectedState) => {
  for (const prop in selectedState) {
    if (selectedState[prop] !== curState[prop]) {
      return false;
    }
  }

  return true;
};
