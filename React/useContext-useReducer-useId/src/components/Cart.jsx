import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - {price}$
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const { addToCart, cart, clearCart } = useCart()
  const cartChexboxID = useId()
  return (
    <>
      <label className="cart-button" htmlFor={cartChexboxID}>
        <CartIcon />
      </label>
      <input id={cartChexboxID} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
