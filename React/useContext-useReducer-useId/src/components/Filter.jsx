import { useState, useId } from 'react'
import './Filter.css'

export function Filter({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(500)
  const priceID = useId()
  const categoryID = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }
  const handleChangeCategory = (event) => {
    changeFilters((prevState) => ({
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
        />
        <span>${minPrice}</span>
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
