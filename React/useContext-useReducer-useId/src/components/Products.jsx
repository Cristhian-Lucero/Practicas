import { useState } from 'react'
import './Products.css'
import { AddToCartIcon } from './icons'
import { useFilter } from '../hooks/useFilter'
import { products as productosIniciales } from '../mocks/products.json'

export function Products() {
  const [products] = useState(productosIniciales)
  const { productosFiltrados } = useFilter(products)
  return (
    <main className="products">
      <ul>
        {productosFiltrados.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
