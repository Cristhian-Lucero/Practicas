import { useState } from "react"

export function useFilter (products) {
  const [filtro, setFiltro] = useState({ categoria: 'all', minPrice: 0 })
  const filtroProductos = (productos) => {
    return productos.filter((producto) => {
      return (
        producto.price >= filtro.minPrice &&
        (producto.category === filtro.categoria || filtro.categoria === 'all')
      )
    })
  }

  const productosFiltrados = filtroProductos(products)
  return {filtro, productosFiltrados, setFiltro}
}