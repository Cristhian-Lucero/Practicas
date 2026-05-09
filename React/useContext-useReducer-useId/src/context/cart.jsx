import { createContext } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'
import { useCartReducer } from '../hooks/useCartReducer'

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()

export function CartProvier({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer(
    cartReducer,
    cartInitialState,
  )

  return (
    <CartContext.Provider
      value={{ cart: state, removeFromCart, clearCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
