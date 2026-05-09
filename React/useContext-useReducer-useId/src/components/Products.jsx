import { useState } from 'react'
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'
import { useFilter } from '../hooks/useFilter'
import { products as productosIniciales } from '../mocks/products.json'
import { useCart } from '../hooks/useCart'

export function Products() {
  const [products] = useState(productosIniciales)
  const { productosFiltrados } = useFilter(products)
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }
  return (
    <main className="products">
      <ul>
        {productosFiltrados.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : 'gray' }}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
