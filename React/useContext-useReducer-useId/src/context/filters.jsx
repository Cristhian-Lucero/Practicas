import { createContext } from "react";
export const FiltersContext = createContext()
export function FiltersProvider ({children}) {
    return (
        <FiltersContext.Provider value={{ categoria: 'all', minPrice: 0 }}>
            {children}
        </FiltersContext.Provider>
    )
}