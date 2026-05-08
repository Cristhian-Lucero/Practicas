import { useContext } from 'react'
import './Footer.css'
import { FiltersContext } from '../context/filters'

export function Footer() {
  const { filtro } = useContext(FiltersContext)
  return (
    <footer className="footer">
      <h4>{JSON.stringify(filtro)}</h4>
    </footer>
  )
}
