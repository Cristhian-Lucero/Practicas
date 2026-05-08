import './App.css'
import { products as productosIniciales } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [products] = useState(productosIniciales)
  const [filtro, setFiltro] = useState({ categoria: 'all', minPrice: 0 })
  const filtroProductos = (products) => {
    return products.filter((producto) => {
      return (
        producto.price >= filtro.minPrice &&
        (producto.category === filtro.categoria || filtro.categoria === 'all')
      )
    })
  }

  const productosFiltrados = filtroProductos(products)

  return (
    <>
      <Header changeFilters={setFiltro} />
      <Products products={productosFiltrados} />
    </>
  )
}

export default App
