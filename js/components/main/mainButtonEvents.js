import { dispatch, getStoreState } from '../../store/store.js';

export const buttonClickEventHandler = (event) => {
  const $targetButton = event.target.closest('a');
  const $mainSection = event.currentTarget.parentNode.lastChild;

  if (!$targetButton) return;

  if ($targetButton.classList.contains('left-button')) {
    const direction = 'left';
    buttonClickHandler(direction, $mainSection);
  }
  if ($targetButton.classList.contains('right-button')) {
    const direction = 'right';
    buttonClickHandler(direction, $mainSection);
  }
};

const buttonClickHandler = (direction, $mainSection) => {
  const directionNum = direction === 'left' ? -1 : 1;
  // some 메서드 : true가 중간에 return 되면 break!
  Array.from($mainSection.childNodes).some((node, idx, arr) => {
    if (node.classList.contains('grid')) {
      node.classList.replace('grid', 'none');
      arr[(idx + directionNum) % 4].classList.replace('none', 'grid');
      return true;
    }
  });
};
