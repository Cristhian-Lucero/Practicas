import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'
import './Cart.css'

export function Cart() {
  const cartChexboxID = useId()
  return (
    <>
      <label className="cart-button" htmlFor={cartChexboxID}>
        <CartIcon />
      </label>
      <input id={cartChexboxID} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
              alt="iphone"
            />
          </li>
          <div>
            <strong>iPhone</strong> - 1499$
          </div>
          <footer>
            <small>Qty: 1</small>
            <button>+</button>
          </footer>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
