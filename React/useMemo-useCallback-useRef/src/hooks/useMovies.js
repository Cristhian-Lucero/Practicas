import { useCallback, useMemo, useRef, useState } from "react"
import { movieService } from "../services/movieService"

export function useMovies({buscar, ordenar}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const busquedaAnterior = useRef(buscar)
  
  const getMovies = useCallback(async ({buscar}) => {
      if (busquedaAnterior.current===buscar) return
      try {
        setLoading(true)
        setError(null)
        busquedaAnterior.current = buscar
        const newMovies = await movieService({buscar})
        setMovies(newMovies)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    },[])

  // sort: compara elementos a y b de un array | localeCompare: compara con acentos
  const moviesOrdenadas = useMemo (()=>{
    return ordenar ?  [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies
  },[ordenar,movies])

  return { movies:moviesOrdenadas , getMovies, loading, errorFetch: error }
}