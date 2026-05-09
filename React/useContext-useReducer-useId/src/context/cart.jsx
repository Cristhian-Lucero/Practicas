import { createContext, useReducer, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()
const initialState = []
const reducer = (state, action) => {
  // type = QUÉ operación. payload = CON QUÉ datos.
  const { type, payload } = action
  switch (type) {
    case 'ADD_TO_CART': {
      const { id } = payload
      const productInCartIndex = state.findIndex((item) => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      } else {
        return [
          ...state,
          {
            ...payload,
            quantity: 1,
          },
        ]
      }
    }
    case 'REMOVE_FROM_CART': {
      const { id } = payload
      return state.filter((item) => item.id !== id)
    }
    case 'CLEAR_CART':
      return initialState
  }
  return state
}

export function CartProvier({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })
  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })
  const clearCart = () =>
    dispatch({
      type: 'CLEAR_CART',
    })

  return (
    <CartContext.Provider
      value={{ cart: state, removeFromCart, clearCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
