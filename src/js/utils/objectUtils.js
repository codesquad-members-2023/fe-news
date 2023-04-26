export const isEquivalent = (curState, selectedState) => {
  return (
    curState.gridOrList === selectedState.gridOrList && curState.allOrSub === selectedState.allOrSub
  );
};
