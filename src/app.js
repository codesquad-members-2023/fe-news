import './pages/header/headerView.js'
import HeaderHandler from './pages/header/headerHandler.js'
import './pages/mainSection/pressGridView.js'
import './pages/mainSection/pressesGridView.js'
import './pages/mainSection/pressListView.js'
import './pages/mainSection/viewSelectionBtn.js'
import './pages/mainSection/mainView.js'
import './pages/mainSection/directionBtn.js'
import './pages/mainSection/UnsubscribeModal.js'
import MainHandler from './pages/mainSection/mainHandler.js'
import RollingbarHandler from './pages/rollingbar/rollingbarHandler.js'

const app = () => {
  new HeaderHandler()
  new RollingbarHandler()
  new MainHandler('http://localhost:3001/presses')
}

app()
