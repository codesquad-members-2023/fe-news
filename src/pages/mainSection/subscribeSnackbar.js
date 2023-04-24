import { createNode } from '../../script/utils.js'

class SubscribeSnackbar {
  createSnackbar() {
    const container = createNode('div')
    container.classList.add('subscribe-snb', 'none')
    container.innerHTML = `
      <span>내가 구독한 언론사에 추가되었습니다.</span>
    `
    return container
  }
}

// viewType이 list일 때 구독하기를 누르면 display: block
export default SubscribeSnackbar
