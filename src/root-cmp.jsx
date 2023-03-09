import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import './assets/scss/styles.scss'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
