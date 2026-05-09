import { useContext } from 'react'
import './Footer.css'
// import { FiltersContext } from '../context/filters'
import { CartContext } from '../context/cart.jsx'

export function Footer() {
  // const { filtro } = useContext(FiltersContext)
  const { cart } = useContext(CartContext)
  return (
    <footer className="footer">
      <h4>{JSON.stringify(cart)}</h4>
    </footer>
  )
}
