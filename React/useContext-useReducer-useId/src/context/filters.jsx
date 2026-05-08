import { createContext, useState } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const FiltersContext = createContext()
export function FiltersProvider({ children }) {
  const [filtro, setFiltro] = useState({ categoria: 'all', minPrice: 0 })
  return (
    <FiltersContext.Provider value={{ filtro, setFiltro }}>
      {children}
    </FiltersContext.Provider>
  )
}
