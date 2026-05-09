import { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()

export function CartProvier({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex] += 1
      setCart(newCart)
    }
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ])
  }
  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, removeFromCart, clearCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
