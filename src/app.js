import './pages/header/headerView.js'
import HeaderHandler from './pages/header/headerHandler.js'
import './pages/mainSection/pressGridView.js'
import './pages/mainSection/pressesGridView.js'
import './pages/mainSection/pressListView.js'
import './pages/mainSection/viewSelectionBtn.js'
import './pages/mainSection/mainView.js'
import './pages/mainSection/directionBtn.js'
import MainHandler from './pages/mainSection/mainHandler.js'

const app = () => {
  new HeaderHandler()
  new MainHandler('http://localhost:3001/presses')
}

app()
