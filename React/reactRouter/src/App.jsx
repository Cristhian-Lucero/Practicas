import { Route, Routes } from 'react-router'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { ToMe } from './pages/ToMe'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ToMe" element={<ToMe />} />
      </Routes>
    </>
  )
}

export default App
