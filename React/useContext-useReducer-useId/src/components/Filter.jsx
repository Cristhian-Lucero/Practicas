import { useState } from 'react'
import './Filter.css'
export function Filter() {
  const [minPrice, setMinPrice] = useState(500)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio minimo:</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select id="category">
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
