/* eslint-disable max-len */
import { createNode } from '../../script/utils.js'

class ViewSelectionBtn {
  createButtons() {
    const container = createNode('div')
    container.classList.add('btn__view-type')
    container.innerHTML = `
      <div>
        <button class="title-md all-presses">전체 언론사</button>
        <button class="body-md my-presses">내가 구독한 언론사</button>
      </div>
      <div>
        <button class="list-view">
          <img src="./asset/listViewButton.svg" alt="listViewButton">
        </button>
        <button class="grid-view">
          <img src="./asset/gridViewButton.svg" alt="gridViewButton">
        </button>
      </div>
    `

    return container
  }
}

export default ViewSelectionBtn
