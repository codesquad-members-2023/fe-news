import { getElement } from '../../script/utils.js'
import Rollingbar from './rollingbarView.js'

class RollingbarHandler {
  constructor() {
    this.#setRollingbar()
  }

  #setRollingbar() {
    const app = getElement('.app')

    const rollingbar = new Rollingbar({
      pressName: '연합뉴스',
      headline: [
        '[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출',
        '[속보] 與최고위원 본경선, 김병민·김용태·김재원·민영삼'
      ]
    })

    const rollingbarEl = rollingbar.getRollingbar()
    app.append(rollingbarEl)
  }
}

export default RollingbarHandler
