import { dispatch, getStoreState } from '../../../store/store.js';
import { displayActionCreator } from '../../../actions/actions.js';

const VIEW_BTN_CLASS = {
  ALL: 'main-header__all-media',
  MINE: 'main-header__my-media',
  LIST: 'main-header__list-button',
  GRID: 'main-header__grid-button',
};

export const pageControlBtnClickEventHandler = ({ target, currentTarget }) => {
  const $targetButton = target.closest('a');
  if (!$targetButton) return;
  const $mainSection = currentTarget.parentNode.lastChild;
  const $leftButton = $mainSection.parentNode.querySelector('.left-button');
  const $rightButton = $mainSection.parentNode.querySelector('.right-button');
  const $buttons = [$leftButton, $rightButton];
  console.log($buttons);
  const viewOptionData = getStoreState('viewOptionData').viewOption;
  // TODO : 전체 언론사 grid일때, list일때, 다 다른 event를 부여해야함.
  // Case 문으로 좀 빼야할듯...
  if ($targetButton.classList.contains('left-button')) {
    const direction = 'left';
    ButtonClickEventHandler(
      viewOptionData,
      direction,
      $mainSection,
      $targetButton,
      $buttons,
    );
  } else if ($targetButton.classList.contains('right-button')) {
    const direction = 'right';
    ButtonClickEventHandler(
      viewOptionData,
      direction,
      $mainSection,
      $targetButton,
      $buttons,
    );
  }
};

export const headerViewChangeBtnClickEventHandler = ({
  target,
  currentTarget,
}) => {
  const $clickedBtn = target.closest('a');
  const [$listBtn, $gridBtn] = currentTarget.querySelectorAll('i');

  let $unClickedBtn;
  if (!$clickedBtn) return;
  switch ($clickedBtn.classList[0]) {
    case VIEW_BTN_CLASS.ALL:
      $unClickedBtn = $clickedBtn.nextElementSibling;
      $clickedBtn.classList.add('bold');
      $unClickedBtn.classList.remove('bold');
      $gridBtn.classList.add('grid-icon__enable');
      $listBtn.classList.remove('list-icon__enable');
      dispatch(displayActionCreator.headerAllBtnClick());
      break;

    case VIEW_BTN_CLASS.MINE:
      $unClickedBtn = $clickedBtn.previousElementSibling;
      $clickedBtn.classList.add('bold');
      $unClickedBtn.classList.remove('bold');
      $listBtn.classList.add('list-icon__enable');
      $gridBtn.classList.remove('grid-icon__enable');
      dispatch(displayActionCreator.headerMineBtnClick());
      break;

    case VIEW_BTN_CLASS.LIST:
      $listBtn.classList.add('list-icon__enable');
      $gridBtn.classList.remove('grid-icon__enable');
      dispatch(displayActionCreator.headerListBtnClick());
      break;

    case VIEW_BTN_CLASS.GRID:
      $gridBtn.classList.add('grid-icon__enable');
      $listBtn.classList.remove('list-icon__enable');
      dispatch(displayActionCreator.headerGridBtnClick());
      break;

    default:
      break;
  }
};

// TODO :객체로 전달하기.
const ButtonClickEventHandler = (
  viewOptionData,
  direction,
  $mainSection,
  $targetButton,
  $buttons,
) => {
  if (direction === 'left')
    leftSwitchCase(viewOptionData, $mainSection, $targetButton, $buttons);
  else rightSwitchCase(viewOptionData, $mainSection, $targetButton, $buttons);
};

const leftSwitchCase = (
  viewOptionData,
  $mainSection,
  $targetButton,
  $buttons,
) => {
  const allOrMine = viewOptionData.allOrMine;
  const gridOrList = viewOptionData.gridOrList;
  switch (true) {
    case allOrMine === 'all' && gridOrList === 'grid':
      gridButtonClickHandler('left', $mainSection, $targetButton);
      break;
    case allOrMine === 'all' && gridOrList === 'list':
      dispatch(displayActionCreator.listLeftBtnClick());
      break;
    case allOrMine === 'mine' && gridOrList === 'grid':
      mineGridButtonClickHandler('left', $mainSection, $buttons);
      break;
    case allOrMine === 'mine' && gridOrList === 'list':
      dispatch(displayActionCreator.mineListLeftBtnClick());
      break;
  }
};

const rightSwitchCase = (
  viewOptionData,
  $mainSection,
  $targetButton,
  $buttons,
) => {
  const allOrMine = viewOptionData.allOrMine;
  const gridOrList = viewOptionData.gridOrList;
  switch (true) {
    case allOrMine === 'all' && gridOrList === 'grid':
      gridButtonClickHandler('right', $mainSection, $targetButton);
      break;
    case allOrMine === 'all' && gridOrList === 'list':
      dispatch(displayActionCreator.listRightBtnClick());
      break;
    case allOrMine === 'mine' && gridOrList === 'grid':
      mineGridButtonClickHandler('right', $mainSection, $buttons);
      break;
    case allOrMine === 'mine' && gridOrList === 'list':
      dispatch(displayActionCreator.mineListRightBtnClick());
      break;
  }
};

const mineGridButtonClickHandler = (direction, $mainSection, $buttons) => {
  const $pages = $mainSection.querySelectorAll('.main-grid__page');
  const directionNum = direction === 'left' ? -1 : 1;
  const $currentPage = $mainSection.querySelector('.grid');
  const currentPageNum = Array.from($pages).indexOf($currentPage);
  const targetPageNum = currentPageNum + directionNum;
  const $targetPage = $pages[targetPageNum];
  $currentPage.classList.replace('grid', 'none');
  $targetPage.classList.replace('none', 'grid');
  console.log($buttons);
  if (targetPageNum === 0) {
    btnCreate($buttons[1]);
    leftBtnDelete($buttons);
  } else if (targetPageNum === $pages.length - 1) {
    btnCreate($buttons[0]);
    rightBtnDelete($buttons);
  } else {
    btnCreate($buttons[0]);
    btnCreate($buttons[1]);
  }
  // 1. 그리드 페이지 none, grid 해주기
  // 2. 버튼 page 번호에 맞게 삭제.
};

const leftBtnDelete = ($buttons) => {
  const $leftButton = $buttons[0];
  $leftButton.classList.add('none');
};

const rightBtnDelete = ($buttons) => {
  const $rightButton = $buttons[1];
  $rightButton.classList.add('none');
};

const btnCreate = ($button) => {
  $button.classList.remove('none');
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
