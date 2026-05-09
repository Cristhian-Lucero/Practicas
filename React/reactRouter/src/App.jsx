import { Route, Routes } from 'react-router'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { ToMe } from './pages/ToMe'
import { Navbar } from './components/Navbar'
import './App.css'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ToMe" element={<ToMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
