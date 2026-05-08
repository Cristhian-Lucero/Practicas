import { useId, useContext } from 'react'
import './Filter.css'
import { FiltersContext } from '../context/filters'

export function Filter() {
  const { filtro, setFiltro } = useContext(FiltersContext)
  const priceID = useId()
  const categoryID = useId()

  const handleChangeMinPrice = (event) => {
    setFiltro((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }
  const handleChangeCategory = (event) => {
    setFiltro((prevState) => ({
      ...prevState,
      categoria: event.target.value,
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={priceID}>Precio minimo:</label>
        <input
          type="range"
          id={priceID}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filtro.minPrice}
        />
        <span>${filtro.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryID}>Categoría</label>
        <select id={categoryID} onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragancias</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
        </select>
      </div>
    </section>
  )
}
