import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'

function App() {
  return (
    <>
      <Header />
      <Products />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
