import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilter } from './hooks/useFilter'
import { products as productosIniciales } from './mocks/products.json'
import { useState } from 'react'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'

function App() {
  const [products] = useState(productosIniciales)
  const { filtro, productosFiltrados, setFiltro } = useFilter(products)
  return (
    <>
      <Header changeFilters={setFiltro} />
      <Products products={productosFiltrados} />
      {IS_DEVELOPMENT && <Footer filtro={filtro} />}
    </>
  )
}

export default App
