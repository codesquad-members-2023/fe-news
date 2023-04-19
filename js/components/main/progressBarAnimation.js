import { dispatch } from '../../store/store.js';
import { displayActionCreator } from '../../actions/actions.js';

export const animationStart = () => {
  let startTime = null;
  const progressBarAnimation = (timestamp) => {
    if (startTime === null) startTime = timestamp;
    const duration = timestamp - startTime;

    if (duration <= 2000) {
      dispatch(
        displayActionCreator.progressBarAnimationStart(
          requestAnimationFrame(progressBarAnimation),
        ),
      );
    } else {
      dispatch(displayActionCreator.listRightBtnClick());
    }
  };
  dispatch(
    displayActionCreator.progressBarAnimationStart(
      requestAnimationFrame(progressBarAnimation),
    ),
  );
};
