import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { Cart } from './components/Cart'
import { CartProvier } from './context/cart.jsx'

function App() {
  return (
    <CartProvier>
      <Cart />
      <Header />
      <Products />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvier>
  )
}

export default App
