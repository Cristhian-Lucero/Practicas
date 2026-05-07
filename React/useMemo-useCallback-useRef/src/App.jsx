import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useBuscar } from './hooks/useBuscar'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

const useOrdenar = () => {
  const [ordenar, setOrdenar] = useState(false)
  const handleSort = () => {
    setOrdenar(!ordenar)
  }
  return { handleSort, ordenar }
}

function App() {
  const { handleSort, ordenar } = useOrdenar()
  const { buscar, setBuscar, error } = useBuscar()
  const { movies, getMovies, loading } = useMovies({ buscar, ordenar })

  const handleSubmit = (event) => {
    event.preventDefault() // bloquea comportamiento default
    getMovies(buscar)
  }

  //debounce
  const debounceMovies = useCallback(() => {
    debounce((buscar) => {
      getMovies({ buscar })
    }, 500)
  }, [])

  const handleChange = (event) => {
    const nuevaBusqueda = event.target.value
    setBuscar(nuevaBusqueda)
    // le envia un objeto con propiedad buscar
    debounceMovies(nuevaBusqueda)
  }

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de Películas</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={buscar}
              name="query"
              placeholder="Avengers, Matrix ..."
            />
            <input type="checkbox" onChange={handleSort} checked={ordenar} />
            <button className="boton" type="submit">
              Buscar
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </header>
        <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
      </div>
    </>
  )
}

export default App
