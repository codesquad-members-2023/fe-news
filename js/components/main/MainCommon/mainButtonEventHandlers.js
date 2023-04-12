import { dispatch, getStoreState } from '../../../store/store.js';

export const buttonClickEventHandler = (event) => {
  const $targetButton = event.target.closest('a');
  if (!$targetButton) return;
  const $mainSection = event.currentTarget.parentNode.lastChild;

  // TODO : 전체 언론사 grid일때, list일때, 다 다른 event를 부여해야함.
  // Case 문으로 좀 빼야할듯...
  if ($targetButton.classList.contains('left-button')) {
    const direction = 'left';
    buttonClickHandler(direction, $mainSection, $targetButton);
  }
  if ($targetButton.classList.contains('right-button')) {
    const direction = 'right';
    buttonClickHandler(direction, $mainSection, $targetButton);
  }
};

const buttonClickHandler = (direction, $mainSection, $targetButton) => {
  const directionNum = direction === 'left' ? -1 : 1;
  // some 메서드 : true가 중간에 return 되면 break!
  Array.from($mainSection.childNodes).some((node, idx, arr) => {
    if (node.classList.contains('grid')) {
      node.classList.replace('grid', 'none');
      arr[idx + directionNum].classList.replace('none', 'grid');
      gridButtonHandler(idx + directionNum, $targetButton, direction);
      return true;
    }
  });
};

const gridButtonHandler = (index, $targetButton, direction) => {
  switch (index) {
    case 0:
      $targetButton.classList.add('none');
      break;

    case 1:
      if (direction === 'right') {
        $targetButton.parentNode
          .querySelector('.left-button')
          .classList.remove('none');
      }
      break;

    case 2:
      if (direction === 'left') {
        $targetButton.parentNode
          .querySelector('.right-button')
          .classList.remove('none');
      }
      break;

    case 3:
      $targetButton.classList.add('none');
      break;

    default:
      break;
  }
};
