/* eslint-disable max-len */
import { createNode } from '../../script/utils.js'

class ViewSelectionBtn {
  createButtons() {
    const container = createNode('div')
    container.classList.add('btn__view-type')
    container.innerHTML = `
      <div>
        <button class="title-md view-type all-presses" data-type="all">전체 언론사</button>
        <button class="body-md view-type my-presses" data-type="my">내가 구독한 언론사</button>
      </div>
      <div>
        <button class="view-type list-view" data-type="list">
          <img src="./asset/listViewButton.svg" alt="listViewButton">
        </button>
        <button class="view-type grid-view" data-type="grid">
          <img src="./asset/gridViewButton.svg" alt="gridViewButton">
        </button>
      </div>
    `

    return container
  }
}

export default ViewSelectionBtn
