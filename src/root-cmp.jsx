import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import './assets/scss/styles.scss'
import { Footer } from './components/footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div >
  )
}

export default App
