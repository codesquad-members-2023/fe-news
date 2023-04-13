import { dispatch, getStoreState } from '../../../store/store.js';
import { displayActionCreator } from '../../../actions/actions.js';

const VIEW_BTN_CLASS = {
  all: 'main-header__all-media',
  mine: 'main-header__my-media',
  list: 'main-header__list-button',
  gird: 'main-header__grid-button',
};

export const pageControlBtnClickEventHandler = ({ target, currentTarget }) => {
  const $targetButton = target.closest('a');
  if (!$targetButton) return;
  const $mainSection = currentTarget.parentNode.lastChild;

  // TODO : 전체 언론사 grid일때, list일때, 다 다른 event를 부여해야함.
  // Case 문으로 좀 빼야할듯...
  if (
    $targetButton.classList.contains('left-button') &&
    $mainSection.classList.contains('main-grid')
  ) {
    const direction = 'left';
    gridButtonClickHandler(direction, $mainSection, $targetButton);
  } else if (
    $targetButton.classList.contains('right-button') &&
    $mainSection.classList.contains('main-grid')
  ) {
    const direction = 'right';
    gridButtonClickHandler(direction, $mainSection, $targetButton);
  } else if (
    $targetButton.classList.contains('left-button') &&
    $mainSection.classList.contains('main-list')
  ) {
    dispatch(displayActionCreator.listLeftBtnClick());
  } else if (
    $targetButton.classList.contains('right-button') &&
    $mainSection.classList.contains('main-list')
  ) {
    dispatch(displayActionCreator.listRightBtnClick());
  }
};

export const headerViewChangeBtnClickEventHandler = ({ target }) => {
  // TODO : 그리드 버튼, 리스트 버튼에 dispatch 다르게 해줘야함!!
  // 이 이벤트 핸들러는 이벤트 헨들러 js 파일로 옮기기!
  // 아마 case 문으로 싹 바꿔서 해야할듯!

  const $clickedBtn = target.closest('a');
  let $unClickedBtn;
  if (!$clickedBtn) return;
  switch ($clickedBtn.classList.value) {
    case VIEW_BTN_CLASS.all:
      dispatch(displayActionCreator.headerAllBtnClick());
      break;

    case VIEW_BTN_CLASS.mine:
      dispatch(displayActionCreator.headerMineBtnClick());
      break;

    case VIEW_BTN_CLASS.list:
      $unClickedBtn = $clickedBtn.nextElementSibling;
      $clickedBtn.querySelector('i').classList.add('list-icon__enable');
      $unClickedBtn.querySelector('i').classList.remove('grid-icon__enable');
      dispatch(displayActionCreator.headerListBtnClick());
      break;

    case VIEW_BTN_CLASS.gird:
      $unClickedBtn = $clickedBtn.previousElementSibling;
      $clickedBtn.querySelector('i').classList.add('grid-icon__enable');
      $unClickedBtn.querySelector('i').classList.remove('list-icon__enable');
      dispatch(displayActionCreator.headerGridBtnClick());
      break;

    default:
      break;
  }
};

const gridButtonClickHandler = (direction, $mainSection, $targetButton) => {
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
