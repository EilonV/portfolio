import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import './assets/scss/styles.scss'
import { Header } from './components/header'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </div >
  )
}

export default App
