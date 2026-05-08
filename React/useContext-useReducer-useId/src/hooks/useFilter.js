import { useContext, useState} from "react"
import { FiltersContext } from "../context/filters"
import { products as productosIniciales } from '../mocks/products.json'

export function useFilter () {
  const [products] = useState(productosIniciales)
  const {filtro} = useContext(FiltersContext)
  const filtroProductos = (productos) => {
    return productos.filter((producto) => {
      return (
        producto.price >= filtro.minPrice &&
        (producto.category === filtro.categoria || filtro.categoria === 'all')
      )
    })
  }

  const productosFiltrados = filtroProductos(products)
  return { productosFiltrados}
}