import { dispatch, getStoreState } from '../../store/store.js';
import { displayActionCreator } from '../../actions/actions.js';

const ANIMATION = {
  DURATION: 20000,
  MAKE_PERCENT: 100,
};

export const animationStart = ($progressBar) => {
  const viewOption = getStoreState('viewOptionData').viewOption;
  let startTime = null;
  const progressBarAnimation = (timestamp) => {
    if (startTime === null) startTime = timestamp;
    const duration = timestamp - startTime;

    if (duration <= ANIMATION.DURATION) {
      $progressBar.style.background = `linear-gradient(90deg, #4362d0 ${
        (duration / ANIMATION.DURATION) * ANIMATION.MAKE_PERCENT
      }%, #7890e7 0%)`;
      dispatch(
        displayActionCreator.progressBarAnimationStart(
          requestAnimationFrame(progressBarAnimation),
        ),
      );
    } else {
      if (viewOption.allOrMine === 'all')
        dispatch(displayActionCreator.listRightBtnClick());
      else if (viewOption.allOrMine === 'mine')
        dispatch(displayActionCreator.mineListRightBtnClick());
    }
  };
  dispatch(
    displayActionCreator.progressBarAnimationStart(
      requestAnimationFrame(progressBarAnimation),
    ),
  );
};
