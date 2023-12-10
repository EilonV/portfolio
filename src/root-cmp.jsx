import './assets/scss/styles.scss'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer'
import { Spotlight } from './pages/spotlight'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Spotlight />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App
